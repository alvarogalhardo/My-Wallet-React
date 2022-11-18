import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Button from "../components/Button"

export default function ExitPage() {
  const [value, setValue] = useState();
  const [desciption, setDescription] = useState();

  async function handleSubmit(){

  }
  return (
    <Container>
      <Title>Nova saída</Title>
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
      <Button type="submit">Salvar saída</Button>
      </Form>
    </Container>
  );
}

const Form = styled.form`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
button{
    width: 90%;
}
`

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
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  width: 90%;
`;

const InputMovement = styled.input`
width: 90%;
height: 58px;
border-radius: 5px;
margin-bottom: 15px;
::placeholder{
    padding-left: 5px;
    color: black;
    font-size: 20px;
    font-weight: 400;
}
`
