function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      var sequence = [0, 1];
      for (var i = 2; i < n; i++) {
        var nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
      }
      return sequence[sequence.length-1];
    }
  }
console.log(fibonacci(15));
console.log(fibonacci(10));
module.exports = { fibonacci }