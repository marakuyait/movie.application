export const reserve = [
  {
    title: "A Premium Dine-In Cinema Experience",
    description:
      "Experience movies like never before at our premium dine-in cinema. Your entertainment escape includes the latest films alongside a chef-driven menu and signature cocktails delivered straight to your reclining Premium Plus seat.",
    image:
      "https://64.media.tumblr.com/0fc93cf866d2f86fd346a93c23963fb3/148a34dee4734bbf-89/s1280x1920/acc090da98916baf373a32412c648334cad0f71a.jpg",
  },
];

const url = "https://solar-poised-salad.glitch.me/karine";

async function saveReserveData() {
  try {
    await fetch(url, {
      method: "DELETE",
    });

    for (const item of reserve) {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
    console.log("Reserve data saved!");
  } catch (error) {
    console.error("Error saving reserve data", error);
  }
}

export function displayReserve() {
  const reserveContainer = document.querySelector(".reserveSits");

  reserve.forEach((item) => {
    const reserveContent = `
        <img src="${item.image}" id="reservePhoto"/>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <button onclick="window.location.href='showtimes.html'">Reserve Seats</button>
      `;
    reserveContainer.innerHTML = reserveContent;
  });
}

saveReserveData();
