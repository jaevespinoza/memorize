import "./styles.scss";

interface IWelcomeModalFooter {
  onSaveName: () => void;
  enabledButton: boolean;
}

/**
 * Content of the footer that will be in the welcome dialog
 * @param onSaveName Function to be executed when clicking the button
 * @param enabledButton Boolean that determines whether the button is enabled or not
 */
const WelcomeModalFooter = ({
  onSaveName,
  enabledButton,
}: IWelcomeModalFooter) => {
  return (
    <button
      type="button"
      className="btn btn-primary welcome-modal__footer__button"
      disabled={!enabledButton}
      onClick={onSaveName}
    >
      Save name
    </button>
  );
};

export default WelcomeModalFooter;
