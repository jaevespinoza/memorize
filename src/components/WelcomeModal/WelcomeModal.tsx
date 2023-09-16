import { useEffect, useState } from "react";
import { Modal, Button, Form, Col, Container } from "react-bootstrap";
import { setName } from "../../actions/GameReducer";
import "./styles.scss";

const WelcomeModal = () => {
  const [nameInput, setNameInput] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const enterKeyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && nameInput.length > 0) {
      setName(nameInput);
      event.preventDefault();
    }
  };

  const onSaveName = () => {};

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
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${show ? "show" : ""}`}
        style={{ display: show ? "block" : "none" }}
      ></div>
    </>
  );

  /*
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      className={styles.welcome_modal}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Welcome to Concentration!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Col>
            To fully enjoy this game, please write your full name on the form
            below:
          </Col>
          <Col>
            <Form.Control
              size="sm"
              value={nameInput}
              onChange={(event) => {
                setNameInput(event.currentTarget.value);
              }}
              onKeyDown={enterKeyHandler}
              type="text"
              placeholder="Write your name here"
            />
          </Col>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => setName(nameInput)}
          disabled={nameInput.length === 0}
        >
          Save name
        </Button>
      </Modal.Footer>
    </Modal>
  ); */
};

export default WelcomeModal;
