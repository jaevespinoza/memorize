/**
 * Function that allows to shuffle an array without creating a new one,
 * optimizing memory
 * @param array Array to be shuffled
 */
const shuffleArray = (array) => {
  if (!array.length) return [];
  let currentIndex = array.length;
  let randomIndex, tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
};

export default shuffleArray;
