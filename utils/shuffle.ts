import { IImageField } from "../src/reducer/AppActionsInterface";

/**
 * Function that allows to shuffle an array without creating a new one,
 * optimizing memory
 * @param array Array to be shuffled
 */
const shuffleArray = (array: IImageField[]): IImageField[] => {
  if (!array.length) return [];
  const newArray = [...array, ...array];
  let currentIndex = newArray.length;
  let randomIndex, tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = tempValue;
  }

  return newArray;
};

export default shuffleArray;
