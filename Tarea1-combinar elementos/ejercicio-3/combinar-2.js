'use strict';
let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
    let result = '';
    for (let j = i + 1; j < nums.length; j++) {
        result += `${nums[i]}${nums[j]} `
    }
    if (result.length) {
        alert(result);
    }
}