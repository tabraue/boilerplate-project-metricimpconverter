const METRIC = ['gal', 'l', 'L', 'mi', 'km', 'lbs', 'kg']
const CONVERSION = {
  'gal': { to: 'L', calc: 3.78541 },
  'L':   { to: 'gal', calc: 1 / 3.78541 },
  'lbs': { to: 'kg', calc: 0.453592 },
  'kg':  { to: 'lbs', calc: 1 / 0.453592 },
  'mi':  { to: 'km', calc: 1.60934 },
  'km':  { to: 'mi', calc: 1 / 1.60934 }
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    const splitInput = input.split('/');
    let result;

    if (splitInput.length === 1) {
      result = parseFloat(input) || 1;
    } else if (splitInput.length === 2) {
      const numerator = parseFloat(splitInput[0]);
      const denominator = parseFloat(splitInput[1]);
      
      if (isNaN(numerator) || isNaN(denominator)) {
        result = 'invalid number';
      } else {
        result = numerator / denominator;
      }
    } else {
      result = 'invalid number';
    }

    return result;
  };
  
  this.getUnit = function(input) {
    const splitInput = input.split(/[0-9]+/)
    const leng = splitInput.length-1
    const result = splitInput[leng].toLowerCase()

    if(METRIC.includes(result)) {
      if(result === 'l') return result.toUpperCase()
      return result
    };
    
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {  
    const input = this.getUnit(initUnit)
    switch (input) {
      case 'gal':
        return 'L'
        break;
      case 'L':
        return 'gal'
        break;
      case 'mi':
        return 'km'
        break;
      case 'km':
        return 'mi'
        break;
      case 'lbs':
        return 'kg'
        break;
      case 'kg':
        return 'lbs'
        break;
      default:
        return 'invalid unit'
        break;
    }
  };

  this.spellOutUnit = function(unit) {
    const input = this.getUnit(unit)
    switch (input) {
      case 'gal':
        return 'gallons'
        break;
      case 'L':
        return 'liters'
        break;
      case 'mi':
        return 'miles'
        break;
      case 'km':
        return 'kilometers'
        break;
      case 'lbs':
        return 'pounds'
        break;
      case 'kg':
        return 'kilograms'
        break;
      default:
        return 'invalid unit'
        break;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const num = this.getNum(initNum)
    const unit = this.getUnit(initUnit)

    if(num === 'invalid number' && unit === 'invalid unit') return 'invalid number and unit'

    const value = num * CONVERSION[unit].calc
    const newUnit = CONVERSION[unit].to
    return value + newUnit
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
