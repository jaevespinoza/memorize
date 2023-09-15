import { useEffect, useState } from "react";
import { Modal, Button, Form, Col, Container } from "react-bootstrap";
import { setName } from "../../actions/GameReducer";

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

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
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
  );
};

export default WelcomeModal;
