import Button from "../../components/Button";
import Input from "../../components/Input";
import ModalAdd from "../../components/ModalAdd";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import {
  Container,
  TecnologiasContainer,
  TecnologiasContainerLista,
  ContainerHeader,
} from "./style";
import Card from "../../components/Card";
import CardLongo from "../../components/CardLongo";
import { toast } from "react-toastify";

function Dashboard({ authenticated, setAuthenticated }) {
  const usuarios = [
    { name: "Jonas", receita: 1000, despesa: 1000, saldo: 1000 },
    { name: "Emanuel", receita: 1000, despesa: 1000, saldo: 1000 },
    { name: "Ana", receita: 1000, despesa: 1000, saldo: 1000 },
    { name: "Diana", receita: 1000, despesa: 1000, saldo: 1000 },
  ];
  const history = useHistory();
  // const dadosUser = JSON.parse(localStorage.getItem("@CashUsers: userDados"));
  // const [tokenx, setTokenx] = useState(
  //   localStorage.getItem("@CashUsers:token")
  // );
  // const [userDadosx, setUserDadosx] = useState(dadosUser);
  // const [tecnologias, setTecnologias] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);

  const ModalClose = () => {
    setmodalOpen(false);
  };

  const logar = () => {
    console.log('retornando ao login page');
    localStorage.clear();
    return history.push("/login");
  };

  // useEffect(() => {
  //   updateTabelas();
  // }, [usuarios]);
  
//   const updateTechs = () => {
//     api
//       .get(`/users/${userDadosx.id}`, {
//         headers: { Authorization: `Bearer ${tokenx}` },
//       })
//       .then((response) => {
//         console.log("response: ", response.data.users);
//         setTecnologias(response.data.users);
//         console.log("executou o update");
//       })
//       .catch(
//         (err) => console.log("executou o update com falha"),
//         toast.error("Erro ao carregar as tecnologias")
//       );
//   };

//   const deleteusers = () => {
//     console.log("teste delete");
//     api
//       .delete(`/users/users/${userDadosx.users.id}`, {
//         headers: { Authorization: `Bearer ${tokenx}` },
//       })
//       .then((_) => {
//         updateusers();
//         console.log("executou delete");
//       })
//       .catch(
//         (err) => console.log("executou delete com falha"),
//         toast.error("Erro ao deletar tecnologia")
//       );
//   };

  if (!authenticated) {
    toast.error("Precisa estar logado!!");
    console.log("Precisa estar logado");
    return history.push("/login");
  }

  return (
    <Container>
      <ContainerHeader>
        <h2>Flow Cash</h2>
        <Button botaomenor funcaoModal={() => logar()}> 
          Deslogar
        </Button>
      </ContainerHeader>

      <TecnologiasContainer>
        <h3>Olá, {usuarios[0].name}</h3>
        <span>Saldo atual: {usuarios[0].saldo}</span>
      </TecnologiasContainer>
      <TecnologiasContainer>  
        <p>Adicionar transação</p>
        <Button
          botaomenor
          botaocinza
          ModalClose
          funcaoModal={() => setmodalOpen(true)}
        >
          +
        </Button>
      </TecnologiasContainer>
      <TecnologiasContainerLista>
        <h2>Histórico de transações</h2>
        {usuarios.map((valor, index) => (
          <li key={index}>
            <Card
              despesa={valor.despesa}
              receita={valor.receita}
              saldo={valor.saldo}
              onclick={() => setmodalOpen(true)}
            ></Card>
          </li>
        ))}
        
      </TecnologiasContainerLista>

      {modalOpen ? (
        <ModalAdd
          ModalClose={() => setmodalOpen(false)}
          updateTechs={() => {}}
        />
      ) : null}
    </Container>
  );
}

export default Dashboard;
