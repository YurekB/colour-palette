import styled from "styled-components";

export const InfoButton = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 5;
  transform: scale(1.5);
`;

interface props {
  info: string;
}

export const Info = styled.div<props>`
  display: ${({ info }) => info === "false" && "none"};
  position: absolute;
  z-index: 5;
  top: 60px;
  left: 20px;
  width: 150px;
  background-color: rgb(243, 243, 243);
  padding: 10px;
  border-radius: 10px;
`;
