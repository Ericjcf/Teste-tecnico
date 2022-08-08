import styled from "styled-components";

export const Container = styled.div`
  margin: 5px 0 5px 0;
  text-align: left;
  width: 100%;
  height: 80px;
  div{
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  background: var(--grey-0);
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  color: var(--black-1);
  padding: 5px;
  display: flex;
  width: 100%;
  height: 50px;

  input {
    background: transparent;
    flex: 1;
    border: none;
    color: var(--grey-4);
    &::placeholder {
      color: var(--grey-1);
    }
  }
`;
