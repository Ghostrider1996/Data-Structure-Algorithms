let orderedArray = Array.from({ length: 1000 }, (_, index) => index + 1);
let start = 0;
let end = orderedArray.length - 1;

function binarySearch(arr, start, end, target) {
    console.log(arr.slice(start, end));
    if (start > end) return "Target does not exist in the array";
    let middleIndex = Math.floor((start + end) / 2);

    if (arr[middleIndex] === target) return `Target ${arr[middleIndex]} found at Index: ${middleIndex}`

    if (arr[middleIndex] > target) return binarySearch(arr, start, middleIndex - 1, target)
    else if (arr[middleIndex] < target) return binarySearch(arr, middleIndex + 1, end, target);
}

// console.log(binarySearch(orderedArray, start, end, 100));
console.log(binarySearch(orderedArray, start, end, 1000));
// console.log(binarySearch(orderedArray, start, end, 2));
