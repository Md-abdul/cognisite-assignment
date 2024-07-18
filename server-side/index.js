const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const calculationRoutes = require('./routes/calculationRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connect = async () => {
  try {
    const mongoURI = 'mongodb+srv://mdabdulq62:nadim123@cluster0.mjympox.mongodb.net/landcalculation?retryWrites=true&w=majority';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

app.get("/", (req, res) => {
  res.send({msg:"Welcome to the Congnisite backend"});
});

app.use('/api/calculate', calculationRoutes);

app.listen(5000, () => {
  connect();
  console.log(`Server is running on port 5000`);
});
