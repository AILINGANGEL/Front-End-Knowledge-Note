// 冒泡排序: 量量比较,每次把大的放到最后
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([3, 1, 8, 20, 4, 6, 2, 7]))

// 选择排序:遍历自身以后的元素，最小的元素和自身调换位置
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
// console.log(selectionSort([3, 1, 8, 20, 4, 6, 2, 7]))
// 插入排序:将元素插入已排好序的数组中
function insertSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            } else {
                break; // 发现已经排好序之后理解退出内部循环
            }
        }
    }
    return arr;
}
// console.log(insertSort([3, 1, 8, 20, 4, 6, 2, 7]))
//归并排序
function mergeSort(arr, start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        let left = mergeSort(arr, start, mid);
        let right = mergeSort(arr, mid + 1, end);
        return merge(left, right);
    }
    return arr.slice(start, end + 1);
}

function merge(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    if (i === arr1.length) {
        arr.push(...arr2.slice(j));
    }
    if (j === arr2.length) {
        arr.push(...arr1.slice(i));
    }
    return arr;
}

// console.log(mergeSort([3, 1, 8, 20, 4, 6, 2, 7], 0, 7))

//快速排序,找到一个pivot，然后把小于它的值放到它的左边，大于它的值放到它的右边
function quickSort(arr, start, end) {
    if (start < end) {
        let pivotIndex = findPivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}

function findPivot(arr, start, end) {
    let i = start - 1;
    let j = start;
    let pivot = arr[end];
    while (j < end) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        j++;
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}
console.log(quickSort([3, 1, 8, 20, 4, 6, 2, 7], 0, 7))