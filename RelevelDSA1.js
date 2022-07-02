let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}
function main() {
  //write code here
  let L = +readline();
  let A = readline()
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);
  let B = readline()
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);
  A.pop();
  B.pop();

  let count = 0;
  while (
    A.sort((a, b) => a - b).toString() != B.sort((a, b) => a - b).toString()
  ) {
    let ADubli = findDuplicates(A);
    let BDubli = findDuplicates(B);
    B.push(A.splice(ADubli, 1));
    count++;
    A.push(B.splice(BDubli, 1));
    count++;
    A.push(L);
    B.push(L);
    count++;
  }
  console.log(count);
}

function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) return arr.indexOf(arr[i]);
    }
  }
}
