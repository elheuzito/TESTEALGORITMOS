const { expect } = require('chai');
const { quickSort, calcularMDC } = require('./Algoritimos/Quicksort');
const { describe, it } = require('mocha'); 

const assert = require('assert');

describe('Quicksort Algoritimo', function() {
    describe('quickSort', function() {
        it('O array [5,4,3,2,1] deve retornar [1,2,3,4,5]', function() {
            assert.deepStrictEqual(quickSort([5,4,3,2,1]), [1,2,3,4,5]);
        });

        it('O array [5,7,2,3,8,52,0] deve retornar [1,2,3,4,5]', function() {
            assert.deepStrictEqual(quickSort([5,7,2,3,8,52,0]), [0,2,3,5,7,8,52]);
        });
    });
});