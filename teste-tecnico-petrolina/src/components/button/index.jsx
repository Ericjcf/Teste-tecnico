import { Container } from "./styles"

const Button = ({children, botaoRosa= true, funcaoModal, ...rest}) => {

    return (
        <Container onClick={funcaoModal} botaoRosa={botaoRosa} type="button" {...rest}>
            {children}
        </Container>
    );
}

export default Button;