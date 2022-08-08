import { Container, InputContainer } from "./style";

function Input( { label, name, register, type } ) {
  // rest pega itens padrões como o placeholder
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        <input type={type} {...register(name)} />
      </InputContainer>
    </Container>
  );
}

export default Input;
// o erro era que ele recebia uma children que não utilizava aqui
