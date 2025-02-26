const orderedArray = Array.from({ length: 1000 }, (_, index) => index + 1);

function jumpSearch(arr, target) {
    const arrayLength = arr.length;
    let step = Math.floor(Math.sqrt(arrayLength));
    let prev = 0;

    while (arr[Math.min(step, arrayLength) - 1] < target) {
        prev = step;

        if (prev >= arrayLength) return - 1;

        step += Math.floor(Math.sqrt(arrayLength));
    };

    for (let index = prev; index < Math.min(step, arrayLength); index++) {
        if (arr[index] === target) return index;
    };
    return -1;
};

const target = 900
const indexFound = jumpSearch(orderedArray, target);

if (indexFound !== -1) console.log(`Target ${target} found at index: ${indexFound}`);
else console.log(`Target ${target} not found in the array`);