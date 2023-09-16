import { useGetImagesQuery } from "../../actions/GameApi";
import { Container, Row, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

const GameBody = ({ data }) => {
  return (
    <Container className={styles.game_body}>
      <Row>Memorize!</Row>
    </Container>
  );
};

export default GameBody;
