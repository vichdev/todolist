import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 8rem;
  height: 3rem;
`;

export const Button = styled.button<{ bgColor: string; color: string }>`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "var(--primary"};
  color: ${(props) => (props.color ? props.color : "var(--white)")};
  &:hover {
    opacity: 0.8;
  }
  font-size: 1rem;
  border-radius: 0.5rem;
`;
