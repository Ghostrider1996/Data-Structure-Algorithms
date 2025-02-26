function interpolationSearchRecursive(array, low, high, target) {
    // Base condition: search space is valid and x is within the range of the current subarray.
    if (low <= high && target >= array[low] && target <= array[high]) {
        // Avoid division by zero when all values are equal.
        if (array[high] === array[low]) return array[low] === target ? low : - 1;
    };
    // Estimate the position using interpolation formula.
    const pos = low + Math.floor(((target - array[low]) * (high - low)) / (array[high] - array[low]));
    console.log(`Guess pos: ${pos} - Element: ${array[pos] || "Not Found"}`);

    // If element is found, return its index.
    if (array[pos] === target) return pos;

    // If the element is larger, it is in the upper part.
    if (array[pos] < target) return interpolationSearch(array, pos + 1, high, target);
    // Else the element is in the lower part.
    if (array[pos] > target) return interpolationSearch(array, low, pos - 1, target);

    // Element not found.
    return -1;
}

function interpolationSearchIterative(array, target) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && target >= array[low] && target <= array[high]) {

        if (array[high] === array[low]) return array[low] === x ? low : -1;

        const pos = low + Math.floor(((target - array[low]) * (high - low)) / (array[high] - array[low]));
        console.log(`Guess pos: ${pos} - Element: ${array[pos] || "Not Found"}`);

        if (array[pos] === target) return pos;

        if (array[pos] < target) low = pos + 1;
        else if (array[pos] > target) high = pos - 1;

    };
    return -1;
};

// Example usage:
const sortedArr = Array.from({ length: 2000 }, (_, index) => index + 1);
const target = 1500;
console.log(`Found/NotFound: ${target} at Index: `, interpolationSearchIterative(sortedArr, target));
// console.log(`Found/NotFound: ${target} at Index: `, interpolationSearchRecursive(sortedArr, 0, sortedArr.length - 1, target));