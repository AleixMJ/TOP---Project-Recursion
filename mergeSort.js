function mergeSort(arr) {

if (arr.length <= 1) {
    return arr;
}

const mid = Math.floor(arr.length / 2);
const left = arr.slice(0, mid);
const right = arr.slice(mid);

const leftMerged = mergeSort(left);
const rightMerged = mergeSort(right);

return merge(leftMerged, rightMerged);

}

function merge(left, right) {
    const sortedArr = []

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex <right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArr.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return [...sortedArr,
        ...left.slice(leftIndex),
        ...right.slice(rightIndex)
    ];
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));