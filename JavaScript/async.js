// Callbacks
// A callback is a function that is passed as an argument
// to another function and is executed after an asynchronous
// operation is completed. This was the traditional way of
// handling asynchronous code in JavaScript.

// Simulate a network request with a callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    callback(data); // Invoke the callback with the data
  }, 2000);
}

// Callback function to process the data
function processData(data) {
  console.log("Data received:", data);
}

// Fetch data and process it with a callback
fetchData(processData);
// Output after 2 seconds: Data received: { id: 1, name: "Alice" }

// Promises
// Promises provide a cleaner, more structured way to handle asynchronous code.
// A Promise represents a value that may be available now,
// in the future, or never. It has three states: pending, fulfilled, or rejected.

// Simulate a network request with a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Bob" };
      resolve(data); // Resolve the promise with the data
    }, 2000);
  });
}

// Using the promise
fetchData()
  .then((data) => {
    // handle the result once the promise is resolved
    console.log("Data received:", data);
  })
  .catch((error) => {
    // handle the errors, if something goes wrong
    console.error("Error:", error);
  });
// Output after 2 seconds: Data received: { id: 1, name: "Bob" }

// async/await
// async/await is syntactic sugar built on top of promises.
// It allows you to write asynchronous code in a way that
// looks synchronous, making it easier to understand and maintain.

// Simulate a network request returning a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Charlie" };
      resolve(data);
    }, 2000);
  });
}

// Using async/await to handle the promise
async function getData() {
  try {
    const data = await fetchData(); // Wait for the promise to resolve
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
// Output after 2 seconds: Data received: { id: 1, name: "Charlie" }

// ------------------------------------------------------------------------
// Fetching Data from an API Using async/await

// Fetch data from an API using async/await
async function fetchAPIData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json(); // Wait for the response to be parsed as JSON
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAPIData();
// Output:
// Data received: { userId: 1, id: 1, title: "...", body: "..." }
