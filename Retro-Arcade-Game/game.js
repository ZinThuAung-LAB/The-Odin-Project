"use strict";

const STORAGE_KEY = "retro-rift-defense-high-score";

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
}

class UIController {
  constructor() {
    this.scoreValue = document.getElementById("scoreValue");
    this.highScoreValue = document.getElementById("highScoreValue");
    this.livesValue = document.getElementById("livesValue");
    this.waveValue = document.getElementById("waveValue");
    this.timerValue = document.getElementById("timerValue");
    this.overlay = document.getElementById("overlay");
    this.overlayTitle = document.getElementById("overlayTitle");
    this.overlayMessage = document.getElementById("overlayMessage");
    this.themeToggle = document.getElementById("themeToggle");
  }

  updateHud(score, highScore, lives, wave, elapsedTime) {
    this.scoreValue.textContent = score;
    this.highScoreValue.textContent = highScore;
    this.livesValue.textContent = lives;
    this.waveValue.textContent = wave;
    this.timerValue.textContent = formatTime(elapsedTime);
  }

  setOverlay(title, message, visible = true) {
    this.overlayTitle.textContent = title;
    this.overlayMessage.textContent = message;
    this.overlay.classList.toggle("visible", visible);
  }

  setThemeLabel(themeName) {
    this.themeToggle.textContent = `Theme: ${themeName}`;
  }
}

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  beep(frequency = 220, duration = 0.08, type = "square", volume = 0.03) {
    if (!this.enabled || !this.ctx) {
      return;
    }

    const oscillator = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
    gainNode.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      volume,
      this.ctx.currentTime + 0.01,
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.0001,
      this.ctx.currentTime + duration,
    );

    oscillator.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    oscillator.start();
    oscillator.stop(this.ctx.currentTime + duration + 0.04);
  }
}

class CollisionManager {
  static intersects(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
}

class Entity {
  constructor(x, y, width, height, color, speed = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;
    this.active = true;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Player extends Entity {
  constructor(x, y, board) {
    super(x, y, 52, 22, "#64f5d2", 420);
    this.board = board;
    this.lives = 3;
    this.fireRate = 0.22;
    this.fireCooldown = 0;
    this.shieldTimer = 0;
    this.rapidTimer = 0;
    this.maxLives = 3;
  }

  update(dt, keys) {
    if (keys.left) {
      this.x -= this.speed * dt;
    }

    if (keys.right) {
      this.x += this.speed * dt;
    }

    this.x = this.board.clamp(this.x, 24, this.board.width - this.width - 24);

    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.shieldTimer = Math.max(0, this.shieldTimer - dt);
    this.rapidTimer = Math.max(0, this.rapidTimer - dt);

    if (this.rapidTimer === 0) {
      this.fireRate = 0.22;
    }
  }

  shoot() {
    if (this.fireCooldown > 0) {
      return null;
    }

    this.fireCooldown = this.fireRate;

    return new Projectile(
      this.x + this.width / 2 - 3,
      this.y - 12,
      6,
      16,
      "#6bb6ff",
      -520,
      "player",
    );
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    if (this.shieldTimer > 0) {
      ctx.strokeStyle = "rgba(255, 206, 92, 0.8)";
      ctx.lineWidth = 2;
      ctx.strokeRect(-8, -8, this.width + 16, this.height + 16);
    }

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.width / 2, 0);
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(this.width / 2, this.height - 8);
    ctx.lineTo(0, this.height);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#d6faff";
    ctx.fillRect(this.width / 2 - 2, this.height - 8, 4, 10);
    ctx.restore();
  }
}

class Enemy extends Entity {
  constructor(x, y, width, height, color, speed = 35, drift = 1) {
    super(x, y, width, height, color, speed);
    this.drift = drift;
    this.velocity = { x: speed, y: 30 };
    this.baseY = y;
  }

  update(dt, direction, dropDistance) {
    this.x += direction * this.velocity.x * dt;
    this.y += dropDistance * dt;
    this.baseY += dropDistance * dt;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#dff7ff";
    ctx.fillRect(this.x + 8, this.y + 6, this.width - 16, 6);
    ctx.fillRect(this.x + 4, this.y + 16, this.width - 8, 4);
  }
}

class Projectile extends Entity {
  constructor(x, y, width, height, color, velocity, owner) {
    super(x, y, width, height, color, velocity);
    this.owner = owner;
  }

  update(dt) {
    this.y += this.speed * dt;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class PowerUp extends Entity {
  constructor(x, y, type) {
    super(x, y, 18, 18, type === "shield" ? "#ffd166" : "#6af3ff", 140);
    this.type = type;
  }

  update(dt) {
    this.y += this.speed * dt;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.width / 2, 0);
    ctx.lineTo(this.width, this.height / 2);
    ctx.lineTo(this.width / 2, this.height);
    ctx.lineTo(0, this.height / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

class Game {
  constructor(canvas, uiController) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.ui = uiController;
    this.board = new Board(canvas.width, canvas.height);
    this.sound = new SoundManager();
    this.state = "start";
    this.keys = { left: false, right: false };
    this.score = 0;
    this.highScore = Number(localStorage.getItem(STORAGE_KEY)) || 0;
    this.wave = 1;
    this.elapsedTime = 0;
    this.lastTimestamp = 0;
    this.player = null;
    this.enemies = [];
    this.playerBullets = [];
    this.enemyBullets = [];
    this.powerUps = [];
    this.starfield = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 40 + 20,
    }));
    this.themeName = "Midnight";

    this.bindEvents();
    this.ui.updateHud(
      this.score,
      this.highScore,
      3,
      this.wave,
      this.elapsedTime,
    );
    this.ui.setOverlay(
      "Ready for Launch",
      "Press Start or Space to begin the defense.",
    );
    this.resize();
  }

  bindEvents() {
    document.addEventListener("keydown", (event) => {
      const key = event.key;

      if (key === "ArrowLeft" || key.toLowerCase() === "a") {
        this.keys.left = true;
      }

      if (key === "ArrowRight" || key.toLowerCase() === "d") {
        this.keys.right = true;
      }

      if (key === " " || key === "Spacebar") {
        event.preventDefault();
        if (
          this.state === "start" ||
          this.state === "gameOver" ||
          this.state === "victory"
        ) {
          this.startGame();
        } else {
          this.shoot();
        }
      }

      if (key.toLowerCase() === "p") {
        this.togglePause();
      }
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key;
      if (key === "ArrowLeft" || key.toLowerCase() === "a") {
        this.keys.left = false;
      }

      if (key === "ArrowRight" || key.toLowerCase() === "d") {
        this.keys.right = false;
      }
    });

    document
      .getElementById("startBtn")
      .addEventListener("click", () => this.startGame());
    document
      .getElementById("pauseBtn")
      .addEventListener("click", () => this.togglePause());
    document
      .getElementById("restartBtn")
      .addEventListener("click", () => this.resetGame());
    document
      .getElementById("themeToggle")
      .addEventListener("click", () => this.toggleTheme());

    document.querySelectorAll(".touch-btn").forEach((button) => {
      const key = button.dataset.key;
      const press = (isPressed) => {
        if (key === "ArrowLeft") {
          this.keys.left = isPressed;
        }

        if (key === "ArrowRight") {
          this.keys.right = isPressed;
        }

        if (key === "Space") {
          if (isPressed) {
            if (
              this.state === "start" ||
              this.state === "gameOver" ||
              this.state === "victory"
            ) {
              this.startGame();
            } else {
              this.shoot();
            }
          }
        }
      };

      button.addEventListener("pointerdown", () => press(true));
      button.addEventListener("pointerup", () => press(false));
      button.addEventListener("pointerleave", () => press(false));
    });
  }

  toggleTheme() {
    const theme =
      document.body.dataset.theme === "midnight" ? "sunset" : "midnight";
    document.body.dataset.theme = theme;
    this.themeName = theme === "midnight" ? "Midnight" : "Sunset";
    this.ui.setThemeLabel(this.themeName);
  }

  resize() {
    const parent = this.canvas.parentElement;
    const ratio = this.canvas.width / this.canvas.height;
    const maxWidth = parent.clientWidth;
    const nextWidth = Math.min(maxWidth, 900);
    const nextHeight = nextWidth / ratio;
    this.canvas.style.height = `${nextHeight}px`;
  }

  init() {
    this.sound.init();
    this.resetGame();
    requestAnimationFrame((time) => this.loop(time));
  }

  resetGame() {
    this.state = "start";
    this.score = 0;
    this.wave = 1;
    this.elapsedTime = 0;
    this.player = new Player(
      this.board.width / 2 - 26,
      this.board.height - 60,
      this.board,
    );
    this.player.lives = 3;
    this.enemies = [];
    this.playerBullets = [];
    this.enemyBullets = [];
    this.powerUps = [];
    this.spawnWave();
    this.ui.updateHud(
      this.score,
      this.highScore,
      this.player.lives,
      this.wave,
      this.elapsedTime,
    );
    this.ui.setOverlay(
      "Ready for Launch",
      "Press Start or Space to begin the defense.",
    );
    this.sound.beep(180, 0.1, "square", 0.02);
  }

  startGame() {
    if (this.state === "playing") {
      return;
    }

    this.state = "playing";
    this.ui.setOverlay("", "", false);
    this.lastTimestamp = performance.now();
    this.sound.beep(440, 0.12, "triangle", 0.03);
  }

  togglePause() {
    if (this.state === "playing") {
      this.state = "paused";
      this.ui.setOverlay("Paused", "Press P or Resume to continue.");
      this.sound.beep(220, 0.08, "sawtooth", 0.02);
      return;
    }

    if (this.state === "paused") {
      this.state = "playing";
      this.ui.setOverlay("", "", false);
      this.lastTimestamp = performance.now();
      this.sound.beep(280, 0.08, "triangle", 0.02);
    }
  }

  shoot() {
    if (this.state !== "playing") {
      return;
    }

    const shot = this.player.shoot();
    if (shot) {
      this.playerBullets.push(shot);
      this.sound.beep(620, 0.08, "square", 0.02);
    }
  }

  spawnWave() {
    const rows = 4 + Math.min(2, Math.floor((this.wave - 1) / 2));
    const cols = 8;
    const enemyWidth = 38;
    const enemyHeight = 26;
    const spacingX = 14;
    const spacingY = 14;
    const startX =
      (this.board.width - (cols * enemyWidth + (cols - 1) * spacingX)) / 2;
    const startY = 60;

    this.enemies = [];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const x = startX + col * (enemyWidth + spacingX);
        const y = startY + row * (enemyHeight + spacingY);
        const hue = (row + 1) * 30;
        const color = `hsl(${hue}, 85%, 65%)`;
        this.enemies.push(
          new Enemy(
            x,
            y,
            enemyWidth,
            enemyHeight,
            color,
            26 + this.wave * 2,
            1,
          ),
        );
      }
    }
  }

  handleEnemyFire() {
    if (this.enemies.length === 0 || this.state !== "playing") {
      return;
    }

    const shooter =
      this.enemies[Math.floor(Math.random() * this.enemies.length)];
    if (!shooter) {
      return;
    }

    const chance = Math.min(0.06 + this.wave * 0.008, 0.18);
    if (Math.random() < chance) {
      this.enemyBullets.push(
        new Projectile(
          shooter.x + shooter.width / 2 - 3,
          shooter.y + shooter.height + 12,
          6,
          16,
          "#ff5d73",
          400,
          "enemy",
        ),
      );
      this.sound.beep(180, 0.06, "sawtooth", 0.015);
    }
  }

  loseLife() {
    if (this.player.shieldTimer > 0) {
      this.player.shieldTimer = 0;
      this.sound.beep(260, 0.09, "triangle", 0.03);
      return;
    }

    this.player.lives -= 1;
    this.sound.beep(140, 0.12, "square", 0.03);

    if (this.player.lives <= 0) {
      this.state = "gameOver";
      this.highScore = Math.max(this.highScore, this.score);
      localStorage.setItem(STORAGE_KEY, String(this.highScore));
      this.ui.updateHud(
        this.score,
        this.highScore,
        0,
        this.wave,
        this.elapsedTime,
      );
      this.ui.setOverlay(
        "System Failure",
        "Game Over. Press Start or Reset to try again.",
      );
      return;
    }

    this.player.x = this.board.width / 2 - this.player.width / 2;
    this.player.shieldTimer = 2.5;
    this.ui.updateHud(
      this.score,
      this.highScore,
      this.player.lives,
      this.wave,
      this.elapsedTime,
    );
  }

  handleCollisions() {
    for (let i = this.playerBullets.length - 1; i >= 0; i -= 1) {
      const bullet = this.playerBullets[i];

      for (let j = this.enemies.length - 1; j >= 0; j -= 1) {
        const enemy = this.enemies[j];

        if (CollisionManager.intersects(bullet, enemy)) {
          this.playerBullets.splice(i, 1);
          this.enemies.splice(j, 1);
          this.score += 25;
          this.sound.beep(520, 0.06, "triangle", 0.024);

          if (Math.random() < 0.22) {
            const types = ["shield", "rapid"];
            this.powerUps.push(
              new PowerUp(
                enemy.x + enemy.width / 2 - 9,
                enemy.y + enemy.height / 2,
                types[Math.floor(Math.random() * types.length)],
              ),
            );
          }

          break;
        }
      }
    }

    for (let i = this.enemyBullets.length - 1; i >= 0; i -= 1) {
      const bullet = this.enemyBullets[i];
      if (CollisionManager.intersects(bullet, this.player)) {
        this.enemyBullets.splice(i, 1);
        this.loseLife();
      }
    }

    for (let i = this.powerUps.length - 1; i >= 0; i -= 1) {
      const powerUp = this.powerUps[i];
      if (CollisionManager.intersects(powerUp, this.player)) {
        if (powerUp.type === "shield") {
          this.player.shieldTimer = 6;
          this.sound.beep(700, 0.12, "triangle", 0.03);
        } else {
          this.player.rapidTimer = 8;
          this.player.fireRate = 0.08;
          this.sound.beep(600, 0.12, "square", 0.03);
        }
        this.powerUps.splice(i, 1);
      }
    }

    if (this.enemies.length === 0) {
      if (this.wave >= 4) {
        this.state = "victory";
        this.highScore = Math.max(this.highScore, this.score);
        localStorage.setItem(STORAGE_KEY, String(this.highScore));
        this.ui.updateHud(
          this.score,
          this.highScore,
          this.player.lives,
          this.wave,
          this.elapsedTime,
        );
        this.ui.setOverlay(
          "Victory",
          "The rift is sealed. Press Start or Reset for a new run.",
        );
        return;
      }

      this.wave += 1;
      this.spawnWave();
      this.ui.updateHud(
        this.score,
        this.highScore,
        this.player.lives,
        this.wave,
        this.elapsedTime,
      );
    }

    for (const enemy of this.enemies) {
      if (enemy.y + enemy.height >= this.board.height - 35) {
        this.loseLife();
        break;
      }
    }
  }

  update(dt) {
    if (this.state !== "playing") {
      return;
    }

    this.elapsedTime += dt;
    this.player.update(dt, this.keys);
    this.ui.updateHud(
      this.score,
      this.highScore,
      this.player.lives,
      this.wave,
      this.elapsedTime,
    );

    const direction = this.enemies.some(
      (enemy) =>
        enemy.x <= 10 || enemy.x + enemy.width >= this.board.width - 10,
    )
      ? -1
      : 1;
    const edgeHit = this.enemies.some(
      (enemy) =>
        enemy.x <= 12 || enemy.x + enemy.width >= this.board.width - 12,
    );

    if (edgeHit) {
      for (const enemy of this.enemies) {
        enemy.y += 18;
        enemy.x += direction * 10;
      }
    } else {
      for (const enemy of this.enemies) {
        enemy.update(dt, direction, 0);
      }
    }

    for (const bullet of this.playerBullets) {
      bullet.update(dt);
      if (bullet.y + bullet.height < 0) {
        bullet.active = false;
      }
    }

    for (const bullet of this.enemyBullets) {
      bullet.update(dt);
      if (bullet.y > this.board.height) {
        bullet.active = false;
      }
    }

    this.playerBullets = this.playerBullets.filter(
      (bullet) => bullet.active && bullet.y + bullet.height > 0,
    );
    this.enemyBullets = this.enemyBullets.filter(
      (bullet) => bullet.active && bullet.y < this.board.height,
    );
    this.powerUps = this.powerUps.filter(
      (powerUp) => powerUp.y < this.board.height + 30 && powerUp.active,
    );

    for (const powerUp of this.powerUps) {
      powerUp.update(dt);
    }

    this.handleEnemyFire();
    this.handleCollisions();
  }

  drawBackground() {
    this.ctx.clearRect(0, 0, this.board.width, this.board.height);
    const grd = this.ctx.createLinearGradient(0, 0, 0, this.board.height);
    grd.addColorStop(0, "#081322");
    grd.addColorStop(1, "#030b18");
    this.ctx.fillStyle = grd;
    this.ctx.fillRect(0, 0, this.board.width, this.board.height);

    for (const star of this.starfield) {
      star.y += star.speed * 0.016;
      if (star.y > this.board.height) {
        star.y = 0;
        star.x = Math.random() * this.board.width;
      }

      this.ctx.fillStyle = "rgba(255,255,255,0.8)";
      this.ctx.fillRect(star.x, star.y, star.size, star.size);
    }

    this.ctx.strokeStyle = "rgba(255,255,255,0.05)";
    this.ctx.beginPath();
    for (let x = 0; x <= this.board.width; x += 50) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.board.height);
    }
    for (let y = 0; y <= this.board.height; y += 50) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.board.width, y);
    }
    this.ctx.stroke();
  }

  render() {
    this.drawBackground();

    if (this.player) {
      this.player.draw(this.ctx);
    }

    for (const bullet of this.playerBullets) {
      bullet.draw(this.ctx);
    }

    for (const bullet of this.enemyBullets) {
      bullet.draw(this.ctx);
    }

    for (const enemy of this.enemies) {
      enemy.draw(this.ctx);
    }

    for (const powerUp of this.powerUps) {
      powerUp.draw(this.ctx);
    }
  }

  loop(timestamp) {
    const delta = Math.min(
      (timestamp - this.lastTimestamp) / 1000 || 0.016,
      0.03,
    );
    this.lastTimestamp = timestamp;

    if (this.state === "playing") {
      this.update(delta);
    }

    this.render();
    requestAnimationFrame((nextTime) => this.loop(nextTime));
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

const canvas = document.getElementById("gameCanvas");
const uiController = new UIController();
const game = new Game(canvas, uiController);

game.init();
window.addEventListener("resize", () => game.resize());
