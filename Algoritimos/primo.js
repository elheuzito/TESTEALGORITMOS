function isPrime(number) {
    if (number <= 1) {
      console.log("Numero é menor ou igual a 1");
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  module.exports = { isPrime };