export const ipicLifeItems = [
  {
    title: "Steakhouse Bacon Cheeseburger",
    description:
      "8-ounce patty, bacon, sharp cheddar, garlic aioli, grilled onion, tomato, arugula, served with smokey ketchup, house sauce and steak fries",
    validDate: "Valid through 07.02.2024",
    image:
      "https://a.ipic.media/home/ipiclife_june_desktop_steakhouse-bacon-cheeseburger.jpg",
  },
  {
    title: "Not Your Kid's Milk",
    description:
      "cereal-infused vodka, caramel vodka, milk, simple syrup, berry crunch cereal",
    validDate: "Valid through 07.02.2024",
    image:
      "https://a.ipic.media/home/ipiclife_june_desktop_not-your-kids-milk.jpg",
  },
];

export function displayIPICLife() {
  const menuItemsContainer = document.getElementById("menu-items");
  menuItemsContainer.innerHTML = "";

  ipicLifeItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <p class="valid-date">${item.validDate}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <button onclick="window.location.href='showtimes.html'">Reserve Seats</button>
      `;
    menuItemsContainer.appendChild(menuItem);
  });
}
