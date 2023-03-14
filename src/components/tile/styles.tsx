import styled, { keyframes } from "styled-components";

interface props {
  red: number;
  green: number;
  blue: number;
  timing: number;
  display: string;
}

const cardAnimation = keyframes`
  0%{
width: 0px;
border: 0px;
height: calc(25vh + 2px)
  }
  1%{
border: 1px solid black;
height: calc(25vh)


  }

  100%{
width: calc(20vw - 2px);
border: 1px solid black;
height: calc(25vh)


  }
`;

export const TileContainer = styled.div<props>`
  width: 0px;
  height: calc(25vh + 2px);
  border: 0;
  position: relative;
  background-color: ${({ red, green, blue }) =>
    `rgb(${red}, ${green}, ${blue})`};

  animation-name: ${cardAnimation};
  animation-duration: 0.3s;
  animation-delay: ${({ timing }) => `${timing}s`};
  animation-fill-mode: forwards;

  :hover {
    cursor: pointer;
    z-index: 2;
    -webkit-box-shadow: 0px 0px 9px 5px #4d4d4d;
    box-shadow: 0px 0px 9px 5px #4d4d4d;
    transition: 0.1s linear;
  }

  p {
    opacity: ${({ display }) => display === "false" && "0%"};

    transition: 0.1s linear;
    position: absolute;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    transform: translateX(-50%) translateY(-50%);
    background-color: #f4f3f364;
    padding: 5px 10px;
    border-radius: 10px;
  }
`;
