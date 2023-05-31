console.log("worked");

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const timers = document.querySelectorAll(".timer");
const times = document.querySelectorAll(".time");
const months = document.querySelectorAll(".month");

daily.addEventListener("click", () => {
  timers.forEach((timer) => {
    timer.classList.add("display");
  });
  times.forEach((time) => {
    time.classList.remove("display");
  });
  months.forEach((month) => {
    month.classList.add("display");
  });
  console.log("working");
});

weekly.addEventListener("click", () => {
  timers.forEach((timer) => {
    timer.classList.remove("display");
  });
  times.forEach((time) => {
    time.classList.add("display");
  });
  months.forEach((month) => {
    month.classList.add("display");
  });
  console.log("working");
});

monthly.addEventListener("click", () => {
  months.forEach((month) => {
    month.classList.remove("display");
  });
  timers.forEach((timer) => {
    timer.classList.add("display");
  });
  times.forEach((time) => {
    time.classList.add("display");
  });
});
