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
        let currentIndex = 0;
        let currentValue = numbers[0];
        for(let i = 0; i < numbers.length; i++) {
            let sortTo = this.correctIndexOf(numbers[currentIndex], numbers);
            let newCurrent = numbers[sortTo];
            numbers[sortTo] = numbers[currentIndex];
            currentValue = newCurrent;
            currentIndex = sortTo;
            
            
            this.steps.push({numbers: numbers.slice(), focusIndices: [sortTo, currentIndex]});
        }
        return numbers;
    }

    correctIndexOf = (number, numbers) => {
        let correctIndex = 0;
        numbers.forEach((current) => {
            if(current < number) {
                correctIndex++;
            }
        });
        console.log("**********", correctIndex, " are less than ", number);
        return correctIndex;
    }
}

module.exports = CombSort;