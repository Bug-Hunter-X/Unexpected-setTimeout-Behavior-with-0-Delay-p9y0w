# Unexpected setTimeout Behavior with 0 Delay

This repository demonstrates a common misunderstanding regarding JavaScript's `setTimeout` function when used with a delay of 0 milliseconds.  While it's intended to execute the callback function as soon as possible, it's not guaranteed to be immediate.

The `bug.js` file shows an example where the second `console.log` statement might execute before the `setTimeout` callback, showcasing this non-deterministic behavior.

The `bugSolution.js` file offers a better solution for tasks needing immediate execution, using `queueMicrotask` to ensure the callback is processed before the next browser repaint or event.