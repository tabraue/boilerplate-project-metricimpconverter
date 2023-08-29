const METRIC = ["gal", "l", "L", "mi", "km", "lbs", "kg"];
const CONVERSION = {
  gal: { to: "L", calc: 3.78541 },
  L: { to: "gal", calc: 1 / 3.78541 },
  lbs: { to: "kg", calc: 0.453592 },
  kg: { to: "lbs", calc: 1 / 0.453592 },
  mi: { to: "km", calc: 1.60934 },
  km: { to: "mi", calc: 1 / 1.60934 },
};

function ConvertHandler() {
  
  this.getNum = function (input) {
    if (input === undefined || input <= "0")
      return "invalid number";
    else if(input === "") return 'invalid input'
    
    const metricRegex = METRIC.join("|");
    const regex = new RegExp(`^(\\d+(\\.\\d+)?(${metricRegex}))?$`);
    const splitInput = input.toString().split("/");
    let result;

    if (splitInput.length === 1) {
      if (!regex.test(input) || !METRIC.includes(input)) {
        result = parseFloat(input) || 1;
      } else {
        result = "invalid unit";
      }
    } else if (splitInput.length === 2) {
      const numerator = parseFloat(splitInput[0]);
      const denominator = parseFloat(splitInput[1]);

      if (isNaN(numerator) || isNaN(denominator)) {
        result = "invalid number";
      } else {
        result = numerator / denominator;
      }
    } else {
      result = "invalid number";
    }

    return result
  };

  this.getUnit = function (input) {
    if (input === undefined || input === "") return "invalid unit";
    const splitInput = input.split(/[0-9]+/);
    const leng = splitInput.length - 1;
    const result = splitInput[leng].toLowerCase();

    if (METRIC.includes(result)) {
      if (result === "l") return result.toUpperCase();
      return result;
    }
    return "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    if (initUnit === undefined || initUnit === "") return "invalid unit";
    const input = this.getUnit(initUnit);
    switch (input) {
      case "gal":
        return "L";
        break;
      case "L":
        return "gal";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      default:
        return "invalid unit";
        break;
    }
  };

  this.spellOutUnit = function (unit) {
    if (unit === undefined || unit === "") return "invalid unit";
    const input = this.getUnit(unit);
    switch (input) {
      case "gal":
        return "gallons";
        break;
      case "L":
        return "liters";
        break;
      case "mi":
        return "miles";
        break;
      case "km":
        return "kilometers";
        break;
      case "lbs":
        return "pounds";
        break;
      case "kg":
        return "kilograms";
        break;
      default:
        return "invalid unit";
        break;
    }
  };

  this.convert = function (initNum, initUnit) {
    if (initNum === undefined || initNum === "") return "invalid number";
    else if (initUnit === undefined || initUnit === "") return "invalid unit";

    const num = this.getNum(initNum);
    const unit = this.getUnit(initUnit);

    if (num === "invalid number" && unit === "invalid unit") return "invalid number and unit";
    else if (num === "invalid number") return "invalid number";
    else if (unit === "invalid unit") return "invalid unit";

    const value = num * CONVERSION[unit].calc;
    const newUnit = CONVERSION[unit].to;
    return parseFloat(value).toFixed(5) + newUnit;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    initNum = this.getNum(initNum);
    if (initNum === "invalid number") return "invalid number";

    initUnit = this.getUnit(initUnit);
    if (initUnit === "invalid unit") return "invalid unit";

    const returnNumAndUnit = this.convert(initNum, initUnit);
    returnNum = this.getNum(returnNumAndUnit);
    //returnNum = parseFloat(returnNum).toFixed(5);
    returnUnit = this.getUnit(returnNumAndUnit);

    let result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(
        initUnit
      )} converts to ${returnNum} ${returnUnit}`,
    };
    return result;
  };
}

module.exports = ConvertHandler;
