import RestaurantImage from "./assets/Restaurant.jpg";

export function loadHomepage() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  // 1. Hero Section
  const heroHeader = document.createElement("header");
  heroHeader.classList.add("hero");

  const title = document.createElement("h1");
  title.textContent = "Welcome to The Savory Fork";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Crafted flavors, cozy vibes, and unforgettable meals.";

  heroHeader.appendChild(title);
  heroHeader.appendChild(tagline);

  // 2. Main Card Container
  const mainCard = document.createElement("main");
  mainCard.classList.add("main-card");

  // Hero Image
  const image = document.createElement("img");
  image.src = RestaurantImage;
  image.alt = "Restaurant interior ambiance";
  image.classList.add("hero-image");

  // About Section
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-us");

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About Our Kitchen";

  const para1 = document.createElement("p");
  para1.textContent =
    "At The Savory Fork, we believe that great food brings people together. Founded in 2024, our kitchen prepares every dish with locally sourced, fresh ingredients combined with a passion for bold, rich flavors.";

  const para2 = document.createElement("p");
  para2.textContent =
    "Whether you're stopping by for a quick lunch or enjoying a long evening with friends, we invite you to relax and enjoy an extraordinary dining experience with us.";

  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(para1);
  aboutSection.appendChild(para2);

  // Info / Hours Section
  const infoSection = document.createElement("section");
  infoSection.classList.add("info-box");

  const infoTitle = document.createElement("h3");
  infoTitle.textContent = "Hours & Location";

  const hours1 = document.createElement("p");
  hours1.innerHTML = "<strong>Mon – Thu:</strong> 11:00 AM – 10:00 PM";

  const hours2 = document.createElement("p");
  hours2.innerHTML = "<strong>Fri – Sun:</strong> 11:00 AM – 11:00 PM";

  const location = document.createElement("p");
  location.innerHTML =
    "<strong>Location:</strong> 123 Culinary Way, Flavor Town";

  infoSection.appendChild(infoTitle);
  infoSection.appendChild(hours1);
  infoSection.appendChild(hours2);
  infoSection.appendChild(location);

  // Assemble Main Card
  mainCard.appendChild(image);
  mainCard.appendChild(aboutSection);
  mainCard.appendChild(infoSection);

  // Append sections to container
  container.appendChild(heroHeader);
  container.appendChild(mainCard);

  return container;
}
