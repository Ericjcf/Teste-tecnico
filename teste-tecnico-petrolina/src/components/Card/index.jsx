import { Container } from "./style";
import Button from "../Button";

function Card({ despesa, receita, saldo, onclick }) {
  return (
    <Container>
      <div>
        <span>Despesa</span>
        <span className="despesa">R$: {despesa}</span>
      </div>
      <div>
        <span>Receita</span>
        <span className="receita">R$: {receita}</span>
      </div>
      <div>
        <span>Saldo</span>
        <span className="saldo">R$: {saldo}</span>
      </div>
      <div>
        <span>Saldo final</span>
        <span>R$: {saldo}</span>
      </div>
      
    </Container>
  );
}

export default Card;
