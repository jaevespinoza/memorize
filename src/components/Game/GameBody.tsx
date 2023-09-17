import { useSelector } from "react-redux";
import {
  IDuplicatedImage,
  ISelectedImage,
} from "../../interfaces/AppActionsInterface";
import GameCard from "./GameCard";
import "./styles.scss";
import { RootState } from "../../../config/store";
import GameNav from "./GameNav";
import SuccessAlert from "./AlertComponent";
import { useEffect, useRef } from "react";

/**
 * Function that determines whether an id exists on either the selected or found list of cards
 * @param id Id to find
 * @param selected Selected cards at the moment
 * @param found Found cards at the moment
 * @returns Boolean that says whether the id exists
 */
const doesIdExistInArrays = (
  id: number,
  selected: ISelectedImage[],
  found: ISelectedImage[]
) => {
  return (
    selected.some((item) => item.id === id) ||
    found.some((item) => item.id === id)
  );
};

/**
 * Component that renders the various animal cards responsively to
 * play the game.
 * @param data Array of shuffled and repeated cards to play the game
 */
const GameBody = ({ data }: { data: IDuplicatedImage[] }) => {
  const selectedCards = useSelector(
    (state: RootState) => state.game.selectedCards
  );

  const foundCards = useSelector((state: RootState) => state.game.foundCards);

  const cards = useRef([]);
  const gameContainer = useRef(null);

  useEffect(() => {
    // Get all the cards and convert them to an array
    if (cards) {
      cards.current = Array.from(document.querySelectorAll(".card-content"));
      console.log(cards);
    }
  }, [cards]);

  console.log(cards);

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusNextCard();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusPreviousCard();
    }
  };

  const focusNextCard = () => {
    const focusedIndex = cards.current.findIndex(
      (card) => card === document.activeElement
    );
    const nextIndex = (focusedIndex + 1) % cards.current.length;
    cards.current[nextIndex].focus();
  };

  const focusPreviousCard = () => {
    const focusedIndex = cards.current.findIndex(
      (card) => card === document.activeElement
    );
    const previousIndex =
      focusedIndex === 0 ? cards.current.length - 1 : focusedIndex - 1;
    cards.current[previousIndex].focus();
  };

  return (
    <div className="game-container">
      <GameNav />
      <div className="container game-container__body" onKeyDown={handleKeyDown}>
        {data.map((item) => (
          <div
            className="col-lg-1 col-md-2 col-sm-3 col-3 m-1 game-container__card"
            key={item.id}
          >
            <GameCard
              id={item.id}
              revealed={doesIdExistInArrays(item.id, selectedCards, foundCards)}
              url={item.url}
              uuid={item.uuid}
              title={item.title}
              content_type={item.content_type}
            />
          </div>
        ))}
      </div>
      <div className="container notification">
        <SuccessAlert />
      </div>
    </div>
  );
};

export default GameBody;
