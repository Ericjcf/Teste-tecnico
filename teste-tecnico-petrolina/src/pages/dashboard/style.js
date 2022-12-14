import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 38px;
`;
export const ContainerHeader = styled.header`
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  h2 {
    color: var(--pink-primary);
  }
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  section {
    display: flex;
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
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;

  div {
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    margin-right: 32px;
  }
`;
export const TecnologiasContainerLista = styled.div`
  background-color: var(--grey-3);
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 100%;
  li {
    text-align: center;
    width: 100%;
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
  h1 {
    margin-bottom: 2rem;
  }
  span {
    margin-bottom: 2rem;
    font-size: 1rem;
    color: var(--grey-1);
  }
`;
