const assert = require('assert');
const expect = require('chai').expect;
require('chai').should();

const InsertionSort = require('../src/sorting-algorithms/InsertionSort');

describe('Insertion Sort', function() {
    let insertion;

    beforeEach(function() {
        insertion = new InsertionSort([]);
    });

    describe('when given an empty list', function() {
        it('returns an enpty list', function() {
            let unsorted = [];
            let expectedSort = [];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has only one element', function() {
        it('returns original list', function() {
            let unsorted = [128];
            let expectedSort = [128];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has two elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1];
            let expectedSort = [1, 2];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has any number of elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1, 7, 3, 4, 8, 6, 5];
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when the list is reverse sorted', function() {
        it('sorts the list', function() {
            let unsorted = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = insertion.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('Steps', function() {
        it('contains each step of the sort', function() {
            let unsorted = [37, 802, 99999].reverse();
            insertion.sortMe(unsorted);
            let expectedSteps = [
                { numbers: [ 99999, 802, 37 ], focusIndices: [] },
                { numbers: [ 802, 99999, 37 ], focusIndices: [ 0, 1 ] },
                { numbers: [ 802, 37, 99999 ], focusIndices: [ 1, 2 ] },
                { numbers: [ 37, 802, 99999 ], focusIndices: [ 0, 1 ] }
            ];
            insertion.steps.should.deep.equal(expectedSteps);
        });
    });

    describe('Iterations', function() {
        it('counts the iterations needed to perform the search', function() {
            let unsorted = [1, 4, 2];
            insertion.sortMe(unsorted);
            let expectedIterations = 3;
            insertion.iterations.should.deep.equal(expectedIterations);
        });
    });
});