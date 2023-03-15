import styled from "styled-components";

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
  p {
    color: black;
  }
  :hover {
    cursor: pointer;
    background-color: #e7e6e6;
    padding: 12.5px 35px;
  }
`;
