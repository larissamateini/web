import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';

import { Container, Form, Logo } from "./styles";
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import logoMain from "../../assets/logo.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  function handleSignIn() {
    setLoading(true);

    signIn({ email, password }).finally(() => setLoading(false));
  }

  return (
    <Container>
      <Logo>
        <img src={logoMain} alt="Logo Food Explorer" />
      </Logo>

      <Form>
        <h2>Faça seu login</h2>

        <Section title="Email">
          <Input 
            type="text"
            placeholder="exemplo@exemplo.com.br" 
            onChange={event => setEmail(event.target.value)}
          />
        </Section>

        <Section title="Senha">
          <Input 
            type="password"
            placeholder="No mínimo 6 caracteres" 
            onChange={event => setPassword(event.target.value)}
          />
        </Section>

        <Button 
          title="Entrar" 
          onClick={handleSignIn} 
          loading={loading} 
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  );
}