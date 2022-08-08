import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerHeader, ContainerForm } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect, Link } from "react-router-dom";
import api from "../../services/api";

function Login({ authenticated, setAuthenticated }) {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("nome obrigatório"),
    email: yup
      .string()
      .email("Formato de email errado")
      .required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Minimo de 6 dígitos")
      .max(8, "Máximo de 8 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("/login", user)
      .then((response) => {
        const token = response.token;
        // const userDados = response.data.user;
        
        localStorage.clear();
        localStorage.setItem("@CashUsers:token", token);
        console.log("login response data", token);
        
        setAuthenticated(true);
        return history.push("/Dashboard");
      })
      .catch((err) => console.log(err));
  };

  // if (authenticated === true){
  //   return <Redirect to="/Dashboard" />
  // }

  return (
    <Container>
      <ContainerHeader>
        <h1>FLowCash</h1>
        <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <Input
            register={register}
            label="Email"
            name="email"
            placeholder="Digite aqui seu Email"
            error={errors.email?.message}
          ></Input>
          <Input
            register={register}
            label="Nome"
            name="name"
            placeholder="Digite aqui seu nome"
            error={errors.name?.message}
          ></Input>
          <Input
            register={register}
            label="Senha"
            name="password"
            placeholder="Digite aqui sua senha"
            type="password"
            error={errors.password?.message}
          ></Input>

          <Button type="submit" children="Logar"></Button>
          <span>Ainda não possui uma conta?</span>
          <Button
            onClick={() => history.push("/")}
            children="Cadastrar"
          ></Button>
        </ContainerForm>
      </ContainerHeader>
    </Container>
  );
}

export default Login;

// yarn add yup react-hook-form @hookform/resolvers
