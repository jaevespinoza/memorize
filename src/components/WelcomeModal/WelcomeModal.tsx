import { useEffect, useState } from "react";
import { setName } from "../../actions/GameReducer";
import "./styles.scss";

/**
 * Dialog that shows the input for the user's name.
 * This should only appear once when the user enters the page. After,
 * the name should be saved somewhere (localStorage or cookie)
 */
const WelcomeModal = () => {
  const [nameInput, setNameInput] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    // If the name already exists in the local storage, the dialog should not appear
    const fullName = localStorage.getItem("full-name");
    if (fullName) setName(fullName);
    else setShow(true);
  }, []);

  /**
   * Upon pressing the "Enter" key, the name should be saved.
   * It also makes sure that the name input exists
   * @param event Key press event
   */
  const enterKeyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && nameInput.length > 0) {
      onSaveName();
      event.preventDefault();
    }
  };

  /**
   * Upon clicking the button, the name should be saved on the state and local
   * storage, it should make the modal disappear, and also reset the input
   */
  const onSaveName = () => {
    setName(nameInput);
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
              <h5 className="modal-title">Welcome to Memorize!</h5>
            </div>
            <div className="modal-body welcome-modal__body">
              <p>
                To ensure a better experience, please write your name in the
                field below:
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    onChange={(event) =>
                      setNameInput(event.currentTarget.value)
                    }
                    onKeyDown={enterKeyHandler}
                    className="form-control"
                    id="fullName"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer welcome-modal__footer">
              <button
                type="button"
                className="btn btn-primary welcome-modal__footer__button"
                disabled={nameInput.length === 0}
                onClick={onSaveName}
              >
                Save name
              </button>
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
