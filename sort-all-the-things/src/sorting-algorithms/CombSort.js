class CombSort {

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
        let gap = numbers.length > 2 ? numbers.length - 2 : 1;
        for(let i = 0; i < numbers.length; i++) {
            for(let j = 0; j + gap < numbers.length; j++) {
                if(numbers[j] > numbers[j+gap]) {
                    let holder = numbers[j];
                    numbers[j] = numbers[j+gap];
                    numbers[j+gap] = holder;
                }
                this.steps.push({
                    numbers: numbers.slice(),
                    focusIndices: [j, j + gap]
                });
                this.iterations++;
            }
            if(gap > 1) gap--;
        }

        return numbers;
    }
}

module.exports = CombSort;