const ConvertSingle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9) {
      arr[i] = add(arr[i]);
    }
  }
  return arr;
};

const add = (num) => {
  while (num > 9) {
    let tempNum = 0;
    while (num > 0) {
      tempNum += num % 10;

      num = Math.trunc(num / 10);
    }
    num = tempNum;
  }
  return num;
};

const n = parseInt(readline());
for (let i = 1; i <= n; i++) {
  let inp = readline()
    .split(" ")
    .map((item) => parseInt(item));
  let op = ConvertSingle(inp);
  console.log(op.join(" "));
}
