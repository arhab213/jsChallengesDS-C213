function VowelRemover(Word) {
  let Vowel = ["a", "e", "i", "o", "u", "y"];
  let a = Word.toLowerCase().split("");
  for (elem1 of Vowel) {
    for (key in a) {
      if (a[key] == elem1) {
        a.splice(key, 1);
      }
    }
  }
  return a.join("");
}
console.log(VowelRemover("HeLLoWorld"));
