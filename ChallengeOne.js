function EvenFinder(arr) {
  let evenArr = [];
  for (key of arr) {
    if (key % 2 == 0) {
      evenArr.push(key);
    }
  }
  return `the array with even numbers : ${evenArr}`;
}
console.log(EvenFinder([4, 2, 6, 6, 4, 22, 2, 2, 5, 1, 7]));
