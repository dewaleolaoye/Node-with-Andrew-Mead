console.log("Client side javascript file is loaded and it's working!");

// search weather form
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;

  http: fetch("http://localhost:3000/weather?addres=" + location).then(
    response => {
      response.json().then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.location);
          console.log(data.forecast);
        }
      });
    }
  );
});
