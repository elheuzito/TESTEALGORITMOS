const { expect } = require('chai');
const { isPrime } = require('./Algoritimos/primo');
const { describe, it } = require('mocha'); 

describe('Teste número primo', function() {
    describe('isPrime', function() {
        it('O valor retornado deve ser true ou 1 para o número 5', function() {
            expect(isPrime(5)).equal(true); 
        });

        it('O valor retornado deve ser False ou 0 para o número 4', function() {
            expect(isPrime(4)).equal(false); // Remova o ".to" antes de "equal"
        });
    });
});
