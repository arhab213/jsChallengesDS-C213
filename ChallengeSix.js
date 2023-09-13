function UniqueFinder() {
  let NumArr = [1, 2, 2, 3, 3, 4, 4, 4, 4, 5];
  let newArr = [];
  for (elem of NumArr) {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}
console.log(UniqueFinder());
