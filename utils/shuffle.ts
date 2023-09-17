import {
  IDuplicatedImage,
  IImage,
} from "../src/interfaces/AppActionsInterface";

/**
 * Function that allows to shuffle an array and then assigns ids to each element
 * @param array Array to be shuffled
 */
const shuffleArrayAndAssignId = (array: IImage[]): IDuplicatedImage[] => {
  // If the array is empty, we return an empty array
  if (!array) return [];
  // We create a new array that duplicates the amount of content in it
  const newArray = [...array, ...array];
  let currentIndex = newArray.length;
  let randomIndex, tempValue;

  // We shuffle the values in the array in order O(n) by using the
  // Fisher–Yates shuffle (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = tempValue;
  }

  return newArray.map((item, index) => ({
    id: index,
    ...item,
  }));
};

export default shuffleArrayAndAssignId;
