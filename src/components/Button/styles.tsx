import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 10rem;
  height: 3rem;
`;

export const Button = styled.button<{ bgColor: string; color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "var(--primary"};
  color: ${(props) => (props.color ? props.color : "var(--white)")};
`;
