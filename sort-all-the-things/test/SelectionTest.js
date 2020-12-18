const assert = require('assert');
const expect = require('chai').expect;
require('chai').should();

const SelectionSort = require('../src/sorting-algorithms/SelectionSort');

describe('Selection Sort', function() {
    let selection;

    beforeEach(function() {
        selection = new SelectionSort([]);
    });

    describe('when given an empty list', function() {
        it('returns an enpty list', function() {
            let unsorted = [];
            let expectedSort = [];
            let sorted = selection.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has only one element', function() {
        it('returns original list', function() {
            let unsorted = [128];
            let expectedSort = [128];
            let sorted = selection.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has two elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1];
            let expectedSort = [1, 2];
            let sorted = selection.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has any number of elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1, 7, 3, 4, 8, 6, 5];
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = selection.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when the list is reverse sorted', function() {
        it('sorts the list', function() {
            let unsorted = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = selection.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('Steps', function() {
        it('contains each step of the sort', function() {
            let unsorted = [37, 802, 99999].reverse();
            selection.sortMe(unsorted);
            console.log('------------------\n',selection.steps,'\n--------------------');
            let expectedSteps = [
                { numbers: [ 99999, 802, 37 ], focusIndices: [] },
                { numbers: [ 37, 802, 99999 ], focusIndices: [ 0, 2 ] },
                { numbers: [ 37, 802, 99999 ], focusIndices: [ 1, 1 ] },
                { numbers: [ 37, 802, 99999 ], focusIndices: [ 2, 2 ] }
              ];
            selection.steps.should.deep.equal(expectedSteps);
        });
    });

    describe('Iterations', function() {
        it('counts the iterations needed to perform the search', function() {
            let unsorted = [1, 4, 2];
            selection.sortMe(unsorted);
            let expectedIterations = 9;
            selection.iterations.should.equal(expectedIterations);
        });
    });

    describe('minOf', function() {
        it('finds the index of the minimum value of an array', function() {
            let list = [1, 4, 2, 88, 3, 7];
            let minIndex = selection.minIndexOf(list);
            minIndex.should.equal(0)

            list = [5, 4, 3, 7, 1];
            minIndex = selection.minIndexOf(list);
            minIndex.should.equal(4)

            list = [4, 2, 88, 3, 7];
            minIndex = selection.minIndexOf(list);
            minIndex.should.equal(1)
        });
    });
});