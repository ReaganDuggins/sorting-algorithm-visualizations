class SelectionSort {

    constructor(unsorted) {
        this.unsorted = unsorted.slice();
        this.steps = [];
        this.iterations = 0;
        this.sorted = unsorted.length > 0 ? this.sortMe(unsorted.slice()) : [];
    }

    sortMe = (numbers) => {
        if(!numbers || numbers.length < 2) {
            return numbers;
        }
        this.steps.push({numbers: numbers.slice(), focusIndices: []});

        for(let i = 0; i < numbers.length; i++) {
            let unselected = numbers.slice(i);
            let nextMin = this.minIndexOf(unselected) + i;
            let holder = numbers[i];
            numbers[i] = numbers[nextMin];
            numbers[nextMin] = holder;
            this.steps.push({
                numbers: numbers.slice(),
                focusIndices: [i, nextMin]
            });
            this.iterations++;
        }

        return numbers;
    }

    minIndexOf = (subList) => {
        let min =  Number.MAX_VALUE;
        let minIndex = 0;
        subList.forEach((current, i) => {
            if(current < min) {
                min = current;
                minIndex = i;
            }
            this.iterations++;
        });

        return minIndex;
    }
}

module.exports = SelectionSort;