const { expect } = require('chai');
const { fibonacci } = require('./Algoritimos/fibonacci');
const { describe, it } = require('mocha'); 

describe('Teste da sequencia fibonacci', function() {
    describe('fibonacci', function() {
        it('O valor esperado de fibonnaci(10) é uma sequencia que o ultimo valor é 34', function() {
            expect(fibonacci(10)).equal(34); 
        });

        it('O valor esperado de fibonacci(15) é uma sequencia que o ultimo valor é 377', function() {
            expect(fibonacci(15)).equal(377); 
        });
    });
});