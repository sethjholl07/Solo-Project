const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './src/index.html'));
});

// Catch-all handler for unknown endpoints
app.use((req, res) => res.status(404).send('This is not the page you are looking for...'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'Error Occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Listen on port 3030
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

module.exports = app;
