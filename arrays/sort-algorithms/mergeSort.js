const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        };
    };
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
};


const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
};


const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 124, 45, 5, 55, 9, 234, 92];
console.log(mergeSort(testArray));


