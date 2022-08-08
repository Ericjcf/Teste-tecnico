import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, ContainerHeader, ContainerForm } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect, Link } from "react-router-dom";
import api from "../../services/api";

function Home({ authenticated, setAuthenticated }) {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Formato de email errado")
      .required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Minimo de 6 dígitos")
      .max(8, "Máximo de 8 digitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirme a senha por favor"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({
    email,
    name,
    password,
  }) => {
    const user = { email, name, password };
    
    api
      .post("/register", user)
      .then((response) => {
        console.log("Sucesso ao Cadastrar, seu id é: " + response.data.id);
        return history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const logar = () => {
    return history.push("/login");
  };

  // if (authenticated === true) {
  //   return <Redirect to={"/Dashboard"} />;
  // }

  return (
    <Container>
      <ContainerHeader>
        <header>
          <h2>FlowCash</h2>
          <Button
            botaomenor
            botaocinza
            children={"Login"}
            funcaoModal={() => logar()}
          ></Button>
        </header>
        <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Crie sua conta</h1>
          <span>rápido e grátis, vamos nessa</span>
          <Input
            register={register}
            label={"Nome"}
            name={"name"}
            placeholder={"Digite aqui seu nome"}
            error={errors.name?.message}
          ></Input>
          <Input
            register={register}
            label={"Email"}
            name={"email"}
            placeholder={"Digite aqui seu Email"}
            error={errors.email?.message}
          ></Input>
          <Input
            register={register}
            type="password"
            label={"Senha"}
            name={"password"}
            placeholder={"Digite aqui sua senha"}
            error={errors.password?.message}
          ></Input>
          <Input
            register={register}
            type="password"
            label={"Confirme senha"}
            name={"confirmPassword"}
            placeholder={"Digite novamente a sua senha"}
            error={errors.confirmPassword?.message}
          ></Input>
          <br/>
         
          <Button type="submit" children="Cadastrar"></Button>
          <Button funcaoModal={() => logar()} children="Logar"></Button>
          <span>Já tem cadastro? faça o login</span>
        </ContainerForm>
      </ContainerHeader>
    </Container>
  );
}

export default Home;
// o erro estava no email que estava sendo cadastrado, ele já existia, leia no console o erro no response.
// erro 1: um dos inputs estava usando a função register, mas no form ele não passava o register por parametro para ser usado.
