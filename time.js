document.addEventListener("DOMContentLoaded", function () {
  const dates = [
    { day: "Tuesday", date: "16", month: "July", showtimes: [] },
    { day: "Wednesday", date: "17", month: "July", showtimes: [] },
    { day: "Thursday", date: "18", month: "July", showtimes: [] },
    {
      day: "Friday",
      date: "19",
      month: "July",
      showtimes: ["3:00 PM", "6:30 PM", "10:00 PM"],
    },
    {
      day: "Saturday",
      date: "20",
      month: "July",
      showtimes: ["3:00 PM", "6:30 PM", "10:00 PM"],
    },
    {
      day: "Sunday",
      date: "21",
      month: "July",
      showtimes: ["3:00 PM", "6:30 PM", "10:00 PM"],
    },
  ];

  const datesContainer = document.querySelector(".dates");
  const showtimesContainer = document.querySelector(".showtimes-picker");

  dates.forEach((date, index) => {
    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    if (index === 3) dateElement.classList.add("selected");
    dateElement.innerHTML = `
            <p>${date.day}</p>
            <p>${date.date}</p>
            <p>${date.month}</p>
        `;
    dateElement.addEventListener("click", () => {
      document
        .querySelectorAll(".date")
        .forEach((d) => d.classList.remove("selected"));
      dateElement.classList.add("selected");
      displayShowtimes(date.showtimes);
    });
    datesContainer.appendChild(dateElement);
  });

  function displayShowtimes(showtimes) {
    showtimesContainer.innerHTML = "";
    showtimes.forEach((showtime) => {
      const showtimeElement = document.createElement("div");
      showtimeElement.classList.add("showtime");
      showtimeElement.textContent = showtime;
      showtimesContainer.appendChild(showtimeElement);
    });
  }

  displayShowtimes(dates[3].showtimes);
});
