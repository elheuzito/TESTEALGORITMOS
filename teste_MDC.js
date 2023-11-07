const { expect } = require('chai');
const { isPrime, calcularMDC } = require('./Algoritimos/MDC');
const { describe, it } = require('mocha'); 

describe('Teste número primo', function() {
    describe('MDC', function() {
        it('O MDC de 12 e 18 deve retornar 6', function() {
            expect(calcularMDC(12,18)).equal(6); 
        });

        it('O MDC de 50 e 25 deve retornar 25', function() {
            expect(calcularMDC(25,50)).equal(25); 
        });
    });
});
