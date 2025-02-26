function selectionSortIterative(array) {
    let arr = array.slice();
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minElementIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minElementIndex]) minElementIndex = j;
        }

        if (minElementIndex !== i) [arr[i], arr[minElementIndex]] = [arr[minElementIndex], arr[i]];

    }
    return arr;
}

function selectionSortRecursive(arr, start = 0) {
    if (start >= arr.length - 1) return arr;

    let minIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) minIndex = i;
    }

    if (minIndex !== start) [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];

    return selectionSortRecursive(arr, start + 1);
}

const unsortedArray = [64, 25, 12, 22, 11];
// console.log("Iterative Selection Sort:", selectionSortIterative([...unsortedArray]));
console.log("Recursive Selection Sort:", selectionSortRecursive([...unsortedArray]));