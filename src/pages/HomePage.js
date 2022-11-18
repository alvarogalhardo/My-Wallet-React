import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { name } = useContext(NameContext);
  return (
    <Container>
      <Title>
        Olá, {name}
        <ion-icon name="exit-outline"></ion-icon>
      </Title>
      <Content></Content>
      <ButtonContainer>
        <MovementButton onClick={() => navigate("/entry")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          Nova entrada
        </MovementButton>
        <MovementButton onClick={() => navigate("/exit")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          Nova saída
        </MovementButton>
      </ButtonContainer>
    </Container>
  );
}

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
  ion-icon {
    cursor: pointer;
  }
`;

const Content = styled.div`
  height: 65%;
  width: 90%;
  background-color: white;
  border-radius: 5px;
`;

const MovementButton = styled.button`
  background-color: #a328d6;
  font-weight: 700;
  font-size: 17px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  height: 100%;
  font-size: 17px;
  padding: 10px;
  ion-icon {
    font-size: 28px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0 12px 0;
  width: 90%;
  height: 18%;
`;
