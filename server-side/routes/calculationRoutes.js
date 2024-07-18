const express = require("express");
const calculationRoutes = express();

const Calculation = require("../models/Calculation");

calculationRoutes.post("/", async (req, res) => {
  const { length, width, workerCount, areaPerWorker } = req.body;

  const perimeter = 2 * (length + width); 

  const daysPerUnitArea =  areaPerWorker; 
  const totalDaysForOneWorker = perimeter / daysPerUnitArea;

  const totalDays = Math.ceil(totalDaysForOneWorker / workerCount);

  const calculation = new Calculation({
    length,
    width,
    workerCount,
    areaPerWorker,
    totalDays,
  });

  await calculation.save();

  res.json({ totalDays });
});

module.exports = calculationRoutes;
