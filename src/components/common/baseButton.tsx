import styled from "styled-components";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #ffffff;
  color: #0e0e0e;
  border: 2px solid #0e0e0e;
  text-align: center;
  cursor: pointer;
  -webkit-transition: 0.5s all;
  transition: 0.5s all;

  &:hover {
    background: #00aeef;
    color: #0e0e0e;
  }
`;

export default BaseButton;
