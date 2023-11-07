const { expect } = require('chai');
const { contagem } = require('./Algoritimos/Contagem');
const { describe, it } = require('mocha'); 

describe('Contagem de valores inteiros', function() {
    describe('contagem', function() {
        it('O numero de valores inteiros para N = 5 é 4', function() {
            expect(contagem(5)).equal(3); 
        });

        it('O numero de valores inteiros para N = 3 é 1', function() {
            expect(contagem(3)).equal(1); // Remova o ".to" antes de "equal"
        });
    });
});