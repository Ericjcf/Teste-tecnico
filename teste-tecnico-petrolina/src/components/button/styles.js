import styled from "styled-components";

export const Container = styled.button`
  background: var(--pink-primary);
  color: var(--grey-0);
  height: 50px;
  border: none;
  border-radius: 5px;
  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  width: 100%;
  transition: 0.2s;
  margin: 0 5px;
  :hover {
    border: 3px solid var(--grey-0);
  }
  background: ${(props) =>
    props.botaocinza ? "var(--grey-2)" : "var(--pink-primary)"};
  width: ${(props) => (props.botaomenor ? "100px" : null)} ;
  width: ${(props) => (props.botaoquadrado ? "40px" : null)} ;
  height: ${(props) => (props.botaoquadrado ? "40px" : null)} ;
`;
