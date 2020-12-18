class InsertionSort {

    constructor(unsorted) {
        console.log(unsorted);
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

        for(let i = 1; i < numbers.length; i++) {
            let alreadySorted = true;
            let right = i;
            let left = i - 1;
            while(numbers[right] < numbers[left] && left >= 0) {
                let holder = numbers[right];
                numbers[right] = numbers[left];
                numbers[left] = holder;
                this.steps.push({numbers: numbers.slice(), focusIndices: [left, right]});
                left--;
                right--;
                this.iterations++;
            }
            this.iterations++;
        }

        return numbers;
    }
}

module.exports = InsertionSort;