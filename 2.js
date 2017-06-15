const nums = process.argv.slice(2);

const sum = nums.reduce((acc, cur) => +acc + +cur , 0);

console.log(sum)
