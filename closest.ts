export function closest(nums: number[], target: number): number {
  if (nums.length <= 3) {
    return nums.reduce((acc, val) => {
      return acc + val;
    });
  }
  const arrs = [];
  for (let a = 0; a <= nums.length - 2; a++) {
    for (let b = a + 1; b < nums.length - 1; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        arrs.push([nums[a], nums[b], nums[c]]);
      }
    }
  }
  const reduceAdd = arrs.map((arr) => {
    return arr.reduce((a, b) => {
      return a + b;
    });
  });
  if (reduceAdd.includes(target)) {
    return target;
  }
  const compare = reduceAdd.map((num) => Math.abs(target - num));
  const sort = compare.slice().sort((a, b) => a - b);
  const index = compare.indexOf(sort[0]);
  return reduceAdd[index];
}

module.exports = { closest };
