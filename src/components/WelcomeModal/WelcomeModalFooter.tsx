import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("game");
  return (
    <button
      type="button"
      className="btn btn-primary welcome-modal__footer__button"
      disabled={!enabledButton}
      onClick={onSaveName}
      data-testid="save-button"
    >
      {t("welcome.save")}
    </button>
  );
};

export default WelcomeModalFooter;
