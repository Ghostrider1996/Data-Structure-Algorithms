function quickSort(array) {
    if (array.length < 1) return array;

    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (const el of array.slice(0, array.length - 1))
        el < pivot ? leftArray.push(el) : rightArray.push(el);

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

function generateRandomArray(n, min, max) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

const bigRandomArray = generateRandomArray(1000, 1, 10000);

console.log("Unsorted Array:", bigRandomArray);
console.log("Sorted Array:", quickSort(bigRandomArray));