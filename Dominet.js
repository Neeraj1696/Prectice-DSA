const majorityElement = (nums) => {
  let maj = "";
  let majCount = 0;

  for (const n of nums) {
    if (majCount === 0) {
      maj = n;
      majCount++;
    } else if (maj === n) majCount++;
    else majCount--;
  }
  return maj;
};
nums = [5, 1, 4, 3, 2];
console.log(maj);
