import styled from "styled-components";

export default function MovementData({ movement }) {
  const { date, description, type, value } = movement;
  return (
    <Container>
      <Content>
        <Date>{date}</Date>
        <Description>{description}</Description>{" "}
      </Content>
      <Value type={type}>{value}</Value>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Date = styled.div`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
`;

const Description = styled.h1`
  color: black;
  font-size: 16px;
  font-weight: 400;
`;

const Value = styled.div`
  color: ${(props) => (props.type === "entry" ? "#03AC00" : "#C70000")};
  font-size: 16px;
  font-weight: 400;
`;
