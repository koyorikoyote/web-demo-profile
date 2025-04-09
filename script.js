const games = [
  {
    title: "Cyber Odyssey",
    description: "Explore a futuristic open-world full of secrets.",
    image: "/images/cyber-odyssey.jpg",
    price: "$59.99"
  },
  {
    title: "Mystic Realms",
    description: "Embark on a magical journey through enchanted lands.",
    image: "/images/mystic-realms.jpg",
    price: "$39.99"
  },
  {
    title: "Battle Forge",
    description: "Forge your army and conquer realms in tactical warfare.",
    image: "/images/battle-forge.jpg",
    price: "$49.99"
  }
];

const grid = document.getElementById("game-grid");

games.forEach((game) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${game.image}" alt="${game.title}" />
    <div class="card-content">
      <h2>${game.title}</h2>
      <p>${game.description}</p>
      <div class="card-footer">
        <span class="price">${game.price}</span>
        <button class="buy-button">Buy Now</button>
      </div>
    </div>
  `;
  grid.appendChild(card);
});
