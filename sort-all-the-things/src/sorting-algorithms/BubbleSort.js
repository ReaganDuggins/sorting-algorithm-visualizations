class BubbleSort {

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
            let alreadySorted = true;
            for(let j = 0; j < numbers.length-1; j++) {
                if(numbers[j] > numbers[j+1]) {
                    let holder = numbers[j];
                    numbers[j] = numbers[j+1];
                    numbers[j+1] = holder;
                    alreadySorted = false;
                }
                this.steps.push({
                    numbers: numbers.slice(),
                    focusIndices: [j, j+1]
                });
                this.iterations++;
            }
            if(alreadySorted) {
                return numbers;
            }
        }

        return numbers;
    }
}

module.exports = BubbleSort;