// 60 task starts

// var searchMatrix = function (matrix, target) {
//     for (let item of matrix) {
//         item.sort((a,b) => a - b);
//         if ( binarySearch ( item, target)) {
//             return true
//         }
//       return false
//     }
// };


// function binarySearch(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) return true;
//         else if (nums[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return false;
// }

// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));

// 60 task finished 

// 61 task starts 



// 62 task starts 
// function rotateMatrix(matrix) {
//     const n = matrix.length;
//     const result = new Array(n).fill().map(() => new Array(n));
    
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             result[j][n - 1 - i] = matrix[i][j]; 
//         }
//     }
    
//     return result;
// }

// const matrix1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// const matrix2 = [[1,2,3],[4,5,6],[7,8,9]];

// console.log(rotateMatrix(matrix1));
// console.log(rotateMatrix(matrix2));
// 62 task finished 


// 63 task starts 

// let str = "Azamat Ergashev"

// let arr = str.split(" ")
// let result = arr[arr.length -1 ].length

// console.log(result);

// 63 task finished 

// 64 starts 

// function areArraysEqual(a , b) {
//     if (a.length !== b.length) return false; 
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) return false;
//     }
//     return true; 
// }

// console.log(areArraysEqual([1,2,3], [1,2,3])); 
// console.log(areArraysEqual([1,2], [1, false,2])); 
// console.log(areArraysEqual([1,2,1], [1,2,2])); 


// 65 starts

// let obj = {a: 2, b:4, c: 8, d: 9}
// let result = Object.entries(obj).map(([a,b]) => `${a} ${b}`)
// console.log(result);

// 65 finished 


// 66 task starts 


//     let nums1 = [1,2,3]
//     let nums2 = [4,5,5]
//     let num = [...nums1, ...nums2]
//     let midNum = null

//     num.sort((a,b) => a - b)
//     let index = parseInt(num.length / 2)

//     if(num.length % 2 == 0) {
//         midNum = (num[index] + num[index - 1] ) / 2
//     }else{
//         midNum = num[index]
//     }
// console.log(num);
// console.log(midNum);
// 66 task finished 

// 67 task starts

// function moveDuplicates(arr) {
//     let duplicates = {};
//     let result = [];

//     arr.forEach(item => {
//         if (duplicates[item]) {
//             duplicates[item]++;
//         } else {
//             duplicates[item] = 1;
//         }
//     });

//     arr.forEach(item => {
//         if (duplicates[item] > 1) {
//             result.push(item);
//         }
//     });

//     return result;
// }


// const duplicatesArray = moveDuplicates([1,2,3,3,4,2,1]);

// console.log(duplicatesArray);

