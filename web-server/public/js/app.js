console.log("Client side javascript file is loaded and it's working!");

// search weather form
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
messageOne.textContent = "Adewale is a goal";

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        console.log(data);
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
