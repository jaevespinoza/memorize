import {
  IDuplicatedImage,
  IImage,
} from "../src/interfaces/AppActionsInterface";

/**
 * Function that allows to shuffle an array and then assigns ids to each element
 * @param array Array to be shuffled
 */
const shuffleArrayAndAssignId = (array: IImage[]): IDuplicatedImage[] => {
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

  return newArray.map((item, index) => ({
    id: index,
    ...item,
  }));
};

export default shuffleArrayAndAssignId;
