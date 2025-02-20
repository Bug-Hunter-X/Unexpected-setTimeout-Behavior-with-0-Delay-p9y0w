function myFunc() {
  setTimeout(() => {
    console.log("This will not always execute immediately!");
  }, 0);
  console.log("This executes first!");
}

myFunc();