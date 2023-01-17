import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0a0e21;
  padding-top: 60px;
  padding-bottom: 80px;
  min-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1d1e33;
  width: 90%;
  border-radius: 8px;
  padding: 30px 35px;
  max-width: 500px;
`;

export const MeasurementsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MeasurementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  margin-right: 20px
  border-radius: 8px;
  padding: 30px;
`;

export const Measurement = styled.p`
  color: #4ade80;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 15px;
`;

export const MeasurementValue = styled.p`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 52px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Unit = styled.span`
  font-size: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Button = styled.button`
  text-align: center;
  color: #ffffff;
  background-color: #1d1e33;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
  outline: none;
`;

export const ResultContent = styled.p`
  color: #4ade80;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const ResultText = styled.span`
color: #ffffff
  font-size: 56px;
  font-weight: 700;
`;

export const DateContainer = styled.div`
  padding-left: 9px;
`;
