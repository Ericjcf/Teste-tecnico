import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-4);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 16px;
  margin: 5px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  p {
    color: var(--grey-0);
    margin-right: 10px;
  }
`;
