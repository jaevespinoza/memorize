import { useEffect, useState } from "react";
import { setName } from "../../actions/GameReducer";
import "./styles.scss";
import { useDispatch } from "react-redux";
import WelcomeModalBody from "./WelcomeModalBody";
import WelcomeModalFooter from "./WelcomeModalFooter";
import { useTranslation } from "react-i18next";

/**
 * Dialog that shows the input for the user's name.
 * This should only appear once when the user enters the page. After,
 * the name should be saved somewhere (localStorage or cookie)
 */
const WelcomeModal = () => {
  const [nameInput, setNameInput] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation("game");

  useEffect(() => {
    // If the name already exists in the local storage, the dialog should not appear
    const fullName = localStorage.getItem("full-name");
    if (fullName) dispatch(setName(fullName));
    else setShow(true);
  }, []);

  /**
   * Upon clicking the button, the name should be saved on the state and local
   * storage, it should make the modal disappear, and also reset the input
   */
  const onSaveName = () => {
    dispatch(setName(nameInput));
    localStorage.setItem("full-name", nameInput);
    setShow(false);
    setNameInput("");
  };

  return (
    <>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
        tabIndex={-1}
        role="dialog"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog ">
          <div className="modal-content welcome-modal__content">
            <div className="modal-header">
              <h5 className="modal-title">{t("welcome.title")}</h5>
            </div>
            <div className="modal-body welcome-modal__body">
              <WelcomeModalBody {...{ setNameInput, nameInput, onSaveName }} />
            </div>
            <div className="modal-footer welcome-modal__footer">
              <WelcomeModalFooter
                enabledButton={nameInput.length > 0}
                {...{ onSaveName }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
      />
    </>
  );
};

export default WelcomeModal;
