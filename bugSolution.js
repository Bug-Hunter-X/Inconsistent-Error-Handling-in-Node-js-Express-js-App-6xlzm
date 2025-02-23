const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello');
  } catch (error) {
    next(error);
  }
});

app.listen(3000, () => console.log('Server started'));

async function someAsyncOperation() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong');
  }
  return 'Operation successful';
} 