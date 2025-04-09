import styled from "styled-components";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  cursor: pointer;
  -webkit-transition: 0.5s all;
  transition: 0.5s all;

  &:hover {
    background-color: #00aeef;
    color: #ffffff;
  }
`;

export default BaseButton;
