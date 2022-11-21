import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { NameContext } from "../contexts/NameContext";
import { AuthContext } from "../contexts/AuthContext";
import MovementData from "../components/MovementData";

export default function HomePage() {
  const navigate = useNavigate();
  const { name } = useContext(NameContext);
  const [content, setContent] = useState([]);
  const { auth, setAuth } = useContext(AuthContext);
  const [balance, setBalance] = useState();
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };

  function findBalance(entries, exits) {
    const positive = entries.reduce((a, b) => a + b, 0);
    const negative = exits.reduce((a, b) => a + b, 0);
    const balance = positive - negative;
    setBalance(balance);
  }

  function logout() {
    setAuth(null);
    navigate("/");
  }

  useEffect(() => {
    const fetchData = async () => {
      const promisse = await axios.get(
        "http://localhost:5000/movements",
        CONFIG
      );
      setContent(promisse.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const entries = content
      .filter((c) => c.type === "entry")
      .map((c) => Number(c.value));
    const exits = content
      .filter((c) => c.type === "exit")
      .map((c) => Number(c.value));
    findBalance(entries, exits);
  }, [content]);

  return (
    <Container>
      <Title>
        Olá, {name}
        <ion-icon name="exit-outline" onClick={logout}></ion-icon>
      </Title>
      <Content>
        <BalanceArea>
          {content.length === 0 ? (
            <NoContent>Não há registros de entrada ou saída</NoContent>
          ) : (
            content.map((movement) => (
              <MovementData movement={movement} key={movement._id} />
            ))
          )}
        </BalanceArea>
        {content.length === 0 ? (
          null
        ) : <Balance balance={balance}>
        <h1>Saldo</h1>
        <h2>{balance}</h2>
      </Balance>}
      </Content>
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

const NoContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #868686;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  text-align: center;
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
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BalanceArea = styled.div`
  overflow-y: scroll;
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: black;
    font-size: 17px;
    font-weight: 700;
  }
  h2 {
    color: ${(props) => (props.balance > 0 ? "#03AC00" : "#C70000")};
  }
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
