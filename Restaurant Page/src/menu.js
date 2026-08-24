export function loadMenu() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  heading.classList.add("page-title");
  container.appendChild(heading);

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const menuItems = [
    {
      name: "Truffle Mushroom Risotto",
      description:
        "Arborio rice, wild mushrooms, black truffle oil, and aged Parmesan.",
      price: "$22",
    },
    {
      name: "Wood-Fired Ribeye",
      description:
        "12oz grass-fed beef cooked over oak wood, served with rosemary butter.",
      price: "$34",
    },
    {
      name: "Artisanal Wood-Fired Pizza",
      description:
        "Fresh mozzarella, San Marzano tomato sauce, fresh basil, olive oil.",
      price: "$18",
    },
    {
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a molten center, paired with vanilla bean gelato.",
      price: "$10",
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `
      <div class="menu-card-header">
        <h3>${item.name}</h3>
        <span class="price">${item.price}</span>
      </div>
      <p>${item.description}</p>
    `;

    menuGrid.appendChild(card);
  });

  container.appendChild(menuGrid);
  return container;
}
