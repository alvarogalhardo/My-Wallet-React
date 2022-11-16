import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUpPage() {
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme a Senha" />
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
