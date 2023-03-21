import styled, { keyframes } from "styled-components";
import { buttonAni, leftAni, rightAni, slideUp } from "./animations";

export const IntroPageContainer = styled.div`
  background-color: #e0f2fa;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    margin-bottom: 10px;
  }

  p {
    margin-top: 20px;
    opacity: 0%;
    animation: ${buttonAni} 0.5s linear 2.5s 1 forwards;
  }
`;

interface props {
  direction: string;
}

export const Logo = styled.h1<props>`
  animation-name: ${({ direction }) =>
    (direction === "left" && leftAni) || (direction === "right" && rightAni)};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  font-size: 80px;
  margin: 0 15px;
  @media (max-width: 600px) {
    font-size: 50px;
    margin: 0 10px;
  }
  @media (max-width: 350px) {
    font-size: 30px;
    margin: 0 5px;
  }
`;

export const SubHeader = styled.h2`
  animation: ${slideUp} 0.7s ease-out 1.25s 1 forwards;
  opacity: 0%;
  @media (max-width: 600px) {
    font-size: 22px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin-top: 80px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  opacity: 0%;
  animation: ${buttonAni} 0.5s linear 2.5s 1 forwards;
  transition: 0.2s linear;
  pointer-events: none;
  max-width: 95vw;
  :hover {
    margin-top: 75px;
    margin-bottom: 5px;
    cursor: pointer;
    background-color: #e9e9e9;
  }
`;
