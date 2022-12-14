import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10% auto 10% auto;
`;

export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;

  h1,
  h2,
  h3 {
    color: var(--pink-primary);
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
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
  h1,
  h2 {
    margin-bottom: 2rem;
    color: var(--grey-0);
  }
  button{
    margin-top: 15px;
  }
  span {
    margin-top: 1rem;
    font-size: 1rem;
    color: var(--grey-1);
  }
`;
