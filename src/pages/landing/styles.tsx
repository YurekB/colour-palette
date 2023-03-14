import styled from "styled-components";

export const LandingPageContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export const TileContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
`;

export const RefreshButton = styled.button`
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 10px 30px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #f1f1f1;
  transition: 0.1s linear;
  :hover {
    cursor: pointer;
    background-color: #e7e6e6;
    padding: 12.5px 35px;
  }
`;

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

export const InfoSection = styled.div<props>`
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
