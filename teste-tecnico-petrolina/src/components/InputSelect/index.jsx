import { Container, SelectInput } from "./style";

function InputSelect({ register, errors, ...rest }) {
  // rest pega itens padrões como o placeholder
  return (
    <Container>
      <h2>Módulo</h2>
      <SelectInput name="status">
        <option selected>Selecione</option>
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </SelectInput>
    </Container>
  );
}

export default InputSelect;
// o erro era que ele recebia uma children que não utilizava aqui
