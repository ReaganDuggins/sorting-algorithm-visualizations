const assert = require('assert');
const expect = require('chai').expect;
require('chai').should();

const BubbleSort = require('../src/sorting-algorithms/BubbleSort');

describe('Bubble Sort', function() {
    let bubble;

    beforeEach(function() {
        bubble = new BubbleSort();
    });

    describe('when given an empty list', function() {
        it('returns an enpty list', function() {
            let unsorted = [];
            let expectedSort = [];
            let sorted = bubble.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has only one element', function() {
        it('returns original list', function() {
            let unsorted = [128];
            let expectedSort = [128];
            let sorted = bubble.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has two elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1];
            let expectedSort = [1, 2];
            let sorted = bubble.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when list has any number of elements', function() {
        it('sorts the list', function() {
            let unsorted = [2, 1, 7, 3, 4, 8, 6, 5];
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = bubble.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('when the list is reverse sorted', function() {
        it('sorts the list', function() {
            let unsorted = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
            let expectedSort = [1, 2, 3, 4, 5, 6, 7, 8];
            let sorted = bubble.sortMe(unsorted);
            sorted.should.deep.equal(expectedSort);
        });
    });

    describe('Steps', function() {
        it('contains each step of the sort', function() {
            let unsorted = [37, 802, 99999].reverse();
            bubble.sortMe(unsorted);
            let expectedSteps = [
                [
                    99999,
                    802,
                    37
                ],
                [
                    802,
                    99999,
                    37
                ],
                [
                    802,
                    37,
                    99999
                ],
                [
                    37,
                    802,
                    99999
                ]
            ];
            bubble.steps.should.deep.equal(expectedSteps);
        });
    });

    describe('Iterations', function() {
        it('counts the iterations needed to perform the search', function() {
            let unsorted = [1, 4, 2];
            bubble.sortMe(unsorted);
            let expectedIterations = 4;
            bubble.iterations.should.deep.equal(expectedIterations);
        });
    });
});