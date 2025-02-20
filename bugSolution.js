function myFunc() {
  queueMicrotask(() => {
    console.log("This will execute before the next repaint!");
  });
  console.log("This executes first!");
}

myFunc();