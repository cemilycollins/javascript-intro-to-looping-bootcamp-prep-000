function forLoop(array) {
  for (let i = 0; i < 26; i++) {
    if(i === 1) {
       array[i] = "I am ${i} strange loop.";
    }
    else {
       array[i] = "I am $(i) strange loops.";
    }
  }
  return array;
}