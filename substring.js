function lenghtOfSubstring(str) {
  if (str == "") {
    return 0;
  }

  let result = lenghtOfSubstring(str.substring(1));

  return result + 1;
}

console.log(lenghtOfSubstring("Relevel"));
