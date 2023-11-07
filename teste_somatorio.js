const { expect } = require('chai');
const { somatorio } = require('./Algoritimos/somatorio');
const { describe, it } = require('mocha'); 

describe('Somatorio dos numeros de um array', function() {
    describe('somatorio', function() {
        it('O somatorio de um array composto de numeros inteiros [5,7,8,10,15] deve retornar 45', function() {
            expect(somatorio([5,7,8,10,15])).equal(45); 
        });

        it('O somatorio de um array composto de numeros inteiros [4,8,0] deve retornar 12', function() {
            expect(somatorio([4,8,0])).equal(12); // Remova o ".to" antes de "equal"
        });
    });
});