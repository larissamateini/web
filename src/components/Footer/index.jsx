import { Container, LogoFooter, FooterC } from "./styles";
import logo from "../../assets/logo-footer.svg";

export function Footer() {
  return (
    <Container>
      <LogoFooter>
        <img src={logo} alt="Logo" />
      </LogoFooter>

      <FooterC>
        © 2024 - Todos os direitos reservados.
      </FooterC>
    </Container>
  );
}