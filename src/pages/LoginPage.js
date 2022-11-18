import axios from "axios";
import styled from "styled-components";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {setAuth} = useContext(AuthContext);
  const postObj = {
    email,
    password,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      alert("Insira um e-mail válido");
    }
    if (!password) {
      alert("Insira uma senha");
    }
    try {
      const token = await (await axios.post("http://localhost:5000/log-in", postObj)).data;
      setAuth(token);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
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
