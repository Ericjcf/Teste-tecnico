import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: var(--grey-3);
  border: 3px solid #ffff;
  border-radius: 3px;
  margin: auto;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;
export const ContainerHeader = styled.header`
  background-color: var(--grey-3);
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  section {
    display: flex;
    /* aqui indica que a div é filha direta da section */
    /* neste caso ele cuida da parte onde inserimos a atividade */
    > div {
      max-width: 88%;
      flex: 1;
      margin-right: 16px;
    }
    button {
      max-width: 260px;
      height: 60px;
      margin: 0;
    }
  }
`;

export const TecnologiasContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;

  div {
    margin-top: 16px;
    margin-right: 32px;
  }
`;

export const ContainerForm = styled.form`
  background-color: var(--grey-3);
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  h1, h2 {
    margin-bottom: 0.5rem;
  }
  span {
    margin-bottom: 2rem;
    font-size: 12px;
    color: var(--grey-1);
  }
  button {
    margin-top: 20px;
  }
  select {
    background: var(--grey-0);
    border-radius: 5px;
    border: none;
    margin-top: 5px;
    

    padding: 5px;
    display: flex;
    width: 100%;
    height: 50px;
  }
`;
