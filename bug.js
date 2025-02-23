const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(error => {
    // Error handling without proper error handling
    console.error(error);
  });
});
app.listen(3000, () => console.log('Server started'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong');
  }
  return 'Operation successful';
}