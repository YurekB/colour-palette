import styled from "styled-components";

export const InfoButton = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 99;
  transform: scale(1.5);

  filter: grayscale(98%) sepia(16%) brightness(130%) saturate(0%) contrast(153%);
  -webkit-filter: grayscale(98%) sepia(16%) brightness(130%) saturate(0%)
    contrast(153%);
  -moz-filter: grayscale(98%) sepia(16%) brightness(130%) saturate(0%)
    contrast(153%);
`;

interface props {
  info: string;
}

export const Info = styled.div<props>`
  display: ${({ info }) => info === "false" && "none"};
  position: absolute;
  z-index: 99;
  top: 60px;
  left: 20px;
  width: 150px;
  background-color: rgb(167, 167, 167);
  padding: 10px;
  border-radius: 10px;
`;
