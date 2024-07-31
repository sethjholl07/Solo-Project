const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(express.json());

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './src/index.html'));
});

// when a photo is uploaded the client sends a put request to upload to image into the box
app.put('/upload', upload.single('photo'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    return res.status(200).send('File uploaded successfully.');
  });

// catch-all handler for unknown endpoints
app.use((req, res) => res.status(404).send('This is not the page you are looking for...'));

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'Error Occured' },
    } 
    const errorObj = Object.assign({}, defaultErr, errorObj);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

// listen on port 3000
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

module.exports = app; 