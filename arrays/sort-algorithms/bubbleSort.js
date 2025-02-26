function bubbleSortIterative(arr) {
    let arrayLength = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 1; i < arrayLength; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            };
        };
        arrayLength--;
    } while (swapped);
    return arr;
};

function bubbleSortRecursive(arr, n = arr.length) {

    if (n === 1) return arr;

    for (let i = 0; i < n; i++) {
        if (arr[i - 1] > arr[i]) [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }

    return bubbleSortRecursive(arr, n - 1);
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// console.log("Iterative Bubble Sort:", bubbleSortIterative([...unsortedArray]));
console.log("Recursive Bubble Sort:", bubbleSortRecursive(unsortedArray));