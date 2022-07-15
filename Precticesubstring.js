// function lengthOfdata(str) {
//   if (str == "") {
//     return 0;
//   }

//   let result = lengthOfdata(str.substring(1));

//   return result + 1;
// }
// console.log(lengthOfdata("RelevelsWorrior"));

function data(str) {
  if (str == "") {
    return 0;
  }
  let result = data(str.substring(1));

  return result + 1;
}

console.log(data("Relevel"));
