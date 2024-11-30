import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import { Container, Form, Logo } from "./styles";
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import logoMain from "../../assets/logo.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Por favor, preencha todos os campos!");
    }

    if (password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres!");
    }

    setLoading(true);

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        console.error('Erro no cadastro:', error);
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar usuário.");
        }
      })
      .finally(() => setLoading(false));
  }

  return (
    <Container>
      <Logo>
        <img src={logoMain} alt="Logo Food Explorer" />
      </Logo>

      <Form>
        <h2>Crie sua conta</h2>

        <Section title="Nome">
          <Input 
            type="text"
            placeholder="Maria da Silva" 
            onChange={event => setName(event.target.value)}
          />
        </Section>

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
          title="Criar conta" 
          onClick={handleSignUp} 
          loading={loading} 
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  );
}