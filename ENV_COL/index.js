const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const identifySpecies = require('./identifySpecies');

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/identify', upload.single('image'), async (req, res) => {
  try {
    const result = await identifySpecies(req.body.image);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
