import { Container } from "./style";
import Button from "../Button";

function CardLongo({ title, status, onclick }) {
  return (
    <Container>
      <p>Tecnologia{title}</p>
      <div>
        <p>Status{status}</p>
        <Button botaoquadrado botaocinza funcaoModal={onclick}>
          X
        </Button>
      </div>
    </Container>
  );
}

export default CardLongo;
