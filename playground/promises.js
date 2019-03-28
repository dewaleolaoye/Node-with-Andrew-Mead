const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["1, 3, 4"]);
    reject("Things went wrong");
  }, 2000);
});

doPromise
  .then(result => {
    console.log("success", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });
