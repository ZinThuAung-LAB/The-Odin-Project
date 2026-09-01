/**
 * Flashcard Model
 * Represents an individual study card with question, answer, difficulty, and mastery state.
 */
export class Flashcard {
  /**
   * @param {Object} options
   * @param {string} options.question - The front-facing prompt or question
   * @param {string} options.answer - The back-facing explanation or answer
   * @param {'easy'|'medium'|'hard'} [options.difficulty='medium'] - Difficulty level
   * @param {string} [options.id] - Unique identifier (crypto.randomUUID() by default)
   * @param {boolean} [options.mastered=false] - Mastered status flag
   */
  constructor({
    question,
    answer,
    difficulty = "medium",
    id = typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `card-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    mastered = false,
  }) {
    if (!question || !question.trim()) {
      throw new Error("Flashcard question cannot be empty.");
    }
    if (!answer || !answer.trim()) {
      throw new Error("Flashcard answer cannot be empty.");
    }

    this.id = id;
    this.question = question.trim();
    this.answer = answer.trim();
    this.difficulty = ["easy", "medium", "hard"].includes(difficulty)
      ? difficulty
      : "medium";
    this.mastered = Boolean(mastered);
  }

  /**
   * Toggles the card's mastery status
   * @returns {boolean} The updated mastered state
   */
  toggleMastered() {
    this.mastered = !this.mastered;
    return this.mastered;
  }

  /**
   * Rehydrates a plain JSON object into a true Flashcard class instance.
   * This is essential for preserving prototype methods after JSON.parse().
   * @param {Object} rawData - Plain JSON object from storage
   * @returns {Flashcard}
   */
  static fromJSON(rawData) {
    if (!rawData) {
      throw new Error("Cannot rehydrate Flashcard from empty data.");
    }

    return new Flashcard({
      id: rawData.id,
      question: rawData.question,
      answer: rawData.answer,
      difficulty: rawData.difficulty,
      mastered: rawData.mastered,
    });
  }

  /**
   * Serializes the Flashcard instance into a clean JSON-ready object.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      question: this.question,
      answer: this.answer,
      difficulty: this.difficulty,
      mastered: this.mastered,
    };
  }
}
