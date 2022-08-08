import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 80%;
  padding: 16px;
  margin: 5px 5px;
  border: 3px solid #ffff;
  color: var(--black);

  h2{
    align-self: left;
  }
  span{
    margin: 5px 0;
  }
  span.saldo{
    color: #57B9F2;
  }
  span.receita{
    color: #FA6505;
  }
  span.despesa{
    color: #A0CD60;
  }
  div{
    display: flex;
    justify-content: space-between;
  }
  button {
    margin-top: 80px;
    align-self: flex-end;
  }
`;
