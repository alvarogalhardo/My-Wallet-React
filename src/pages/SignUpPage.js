import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const postObj = {
    email,
    password,
    name,
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirme a senha");
      return;
    }
    try {
      await axios.post("http://localhost:5000/sign-up", postObj);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirme a Senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #9154be;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    font-weight: 700;
    font-size: 15px;
  }
`;

const Form = styled.form`
  margin: 20px 25px 35px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    margin-bottom: 10px;
  }
`;
