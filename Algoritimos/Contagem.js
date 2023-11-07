function contagem(N) {
    if (!Number.isInteger(N) || N <= 0) {
      return 0;
    }
  
    const valores = [1,1.5,3,'texto',5,7];
    let contadorInteiros = 0;
  
    for (let i = 1; i <= N; i++) {
      if (Number.isInteger(valores[i])) {
        contadorInteiros++;
      }
    }
  
    return contadorInteiros;
  }

  module.exports = { contagem }