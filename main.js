"use strict";
exports.__esModule = true;
// const arr: number[] = [1, 3, 6, 9] //! False
var arr = [1, 6, 2, 10]; //* True
var sum_8 = function (arr) {
    var flag = false;
    arr.forEach(function (num, idx) {
        while (idx < arr.length) {
            if (num + arr[idx + 1] === 8) {
                console.log(num, '+', arr[idx + 1]);
                flag = true;
            }
            idx++;
        }
    });
    return flag;
};
console.log(sum_8(arr));
