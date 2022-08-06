import { Container } from './style';

const Button = ({children, paletaCor, ...rest}) => {
    <Container paletaCor={paletaCor} type = "button" {...rest}>
        {children}
    </Container>
}