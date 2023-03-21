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
`;

interface props {
  direction: string;
}

export const Logo = styled.h1<props>`
  margin: 0 15px;
  font-size: 80px;
  animation-name: ${({ direction }) =>
    (direction === "left" && leftAni) || (direction === "right" && rightAni)};
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const SubHeader = styled.h2`
  animation: ${slideUp} 0.7s ease-out 1.25s 1 forwards;
  opacity: 0%;
`;

export const Button = styled.button`
  margin-top: 100px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  opacity: 0%;
  animation: ${buttonAni} 0.5s linear 2.5s 1 forwards;
  transition: 0.2s linear;
  pointer-events: none;
  :hover {
    margin-top: 95px;
    margin-bottom: 5px;
    cursor: pointer;
    background-color: #e9e9e9;
  }
`;
