import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0 auto;

  div {
    h3 {
      color: var(--pink-primary);
    }
  }
`;

export const ContainerHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;

  h1 {
    color: var(--grey-0);
  }
  h2,
  h3 {
    color: var(--pink-primary);
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin-bottom: 0.5rem;
  }
  button {
    margin-top: 5px;
  }
  span {
    margin-top: 5px;
    margin-bottom: 1rem;
    font-size: 14px;
    color: var(--grey-1);
  }
  label {
    align-self: left;
  }
  select {
    background: var(--grey-0);
    border-radius: 5px;
    border: none;
    margin-top: 5px;
    margin-bottom: 20px;

    padding: 5px;
    display: flex;
    width: 100%;
    height: 50px;
  }
`;
