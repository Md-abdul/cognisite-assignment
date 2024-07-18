const mongoose = require('mongoose');

const calculationSchema = new mongoose.Schema({
  length: { type: Number, required: true },
  width: { type: Number, required: true },
  workerCount: { type: Number, required: true },
  areaPerWorker: { type: Number, required: true },
  totalDays: { type: Number, required: true },
});

module.exports = mongoose.model('Calculation', calculationSchema);
