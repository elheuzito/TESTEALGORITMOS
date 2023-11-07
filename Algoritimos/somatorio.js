function somatorio(array) {
    
    if (array.length === 0) {
      return 0; 
    }
  
    
    const soma = array.reduce((acumulador, elemento) => {
      return acumulador + elemento;
    });
  
    return soma;
  }
  console.log(somatorio([4,8,0]))

  module.exports = { somatorio };