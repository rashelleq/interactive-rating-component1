const mainCard = document.querySelector("main");
const tyCard = document.querySelector(".ty-card");
const submitButton = document.querySelector(".btn-submit");
const rateSpan = document.querySelector(".rating");
const rateButton = document.querySelectorAll(".btn");
// const rating = document.querySelector("#rating");
// const rateButton = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  tyCard.classList.remove("hidden");
  mainCard.classList.add("hidden");
});

// rateButton.forEach((rate) => {
//   rate.addEventListener("click", () => {
//     rateSpan.innerHTML = rate.innerHTML;
//   });
// });

rateButton.forEach((rate) => {
  rate.addEventListener("click", () => {
    rateSpan.innerHTML = rate.innerHTML;
  });
});
