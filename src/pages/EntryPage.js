import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";

export default function EntryPage() {
  const navigate = useNavigate()
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const { auth } = useContext(AuthContext);

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${auth}`
    }
  }

  const postOBJ = {
    value,
    description,
    type: "entry"
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if(!value){
      alert("Insira um valor válido")
    }
    if(!description){
      alert("Insira uma descrição válida")
    }
    try{
      const promisse = await axios.post("http://localhost:5000/movements/entry", postOBJ,CONFIG)
      if(promisse.data === "OK"){
        alert("Movimentação feita com sucesso!")
        navigate("/home")
      }
    } catch (err){
      console.log(err);
    }
  }
  return (
    <Container>
      <Title>
        Nova entrada
        <Link to="/home">
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </Link>
      </Title>
      <Form onSubmit={handleSubmit}>
        <InputMovement
          type="number"
          placeholder="Valor"
          onChange={(e) => setValue(e.target.value)}
        />
        <InputMovement
          type="text"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Salvar entrada</Button>
      </Form>
    </Container>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  button {
    width: 90%;
  }
`;

const Container = styled.div`
  background-color: #9154be;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.header`
  color: #ffffff;
  font-weight: 700;
  font-size: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 90%;
`;

const InputMovement = styled.input`
  width: 90%;
  height: 58px;
  border-radius: 5px;
  margin-bottom: 15px;
  ::placeholder {
    padding-left: 5px;
    color: black;
    font-size: 20px;
    font-weight: 400;
  }
`;
