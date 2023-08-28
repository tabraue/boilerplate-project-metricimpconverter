"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    const input = req.query.input;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNumAndUnit = convertHandler.convert(initNum, initUnit);
    const returnNum = convertHandler.getNum(returnNumAndUnit);
    const returnUnit = convertHandler.getUnit(returnNumAndUnit);

    let result = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

    res.json(result)
  });
};
