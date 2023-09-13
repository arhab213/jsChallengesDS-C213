function PerOver30() {
  let arrPer = [
    { name: "Joe", age: 32, email: "JoeHappy@gmail.com" },
    { name: "Ilyes", age: 6, email: "Ilyes66@gmail.com" },
    { name: "kris", age: 35, email: "KrissisFunny@gmail.com" },
    { name: "abdou", age: 30, email: "abdouisFunny@gmail.com" },
  ];
  let arr = [];
  for (keys of arrPer) {
    if (keys.age > 30) {
      arr.push(keys);
    }
  }
  return arr;
}
console.log(PerOver30());
