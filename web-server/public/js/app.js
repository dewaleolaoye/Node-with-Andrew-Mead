console.log("Client side javascript file is loaded and it's working!");

fetch("http://localhost:3000/weather?address=lafia").then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
