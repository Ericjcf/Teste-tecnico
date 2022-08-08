import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { Container, ContainerHeader, ContainerForm } from "./style";
import { toast } from "react-toastify";

function ModalAdd({ ModalClose, updateTechs }) {
  const token = useState(localStorage.getItem("@KenzieHub:token"));

  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    updateTechs();
  }, [token]);

  const onSubmitTech = (data) => {
    console.log(data, token);
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("Cadastrado com sucesso");
        toast.sucess("Tecnologia cadastrada");
        updateTechs();
      })
      .catch((err) => toast.error("Erro ao cadastrar tecnlogia"));
  };

  return (
    <Container>
     
      <ContainerForm onSubmit={handleSubmit(onSubmitTech)}>
      <h2>Nova transação</h2>
        <Input
          register={register}
          label="Descrição "
          name="title"
          placeholder={""}
          error={errors.title?.message}
        ></Input>

        <Input
          register={register}
          label="R$ "
          name="title"
          placeholder={""}
          error={errors.title?.message}
        ></Input>

        <Input
          register={register}
          label="Data "
          name="title"
          placeholder={""}
          error={errors.title?.message}
        ></Input>
        
        <label>Motivo da transação</label>
        <select {...register("status")}>
          <option>Despesa</option>
          <option>Receita</option>
          <option>Extras</option>
        </select>
        <span>{errors.status?.message}</span>
        <div>
        <Button
          botaomenor
          botaocinza
          ModalClose
          funcaoModal={() => ModalClose()}
        >
          Fechar
        </Button>
        <Button botaomenor type="submit">Adicionar</Button>
        </div>
        
      </ContainerForm>
    </Container>
  );
}

export default ModalAdd;
