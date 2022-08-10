import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {right: -500rem}
to {right: 2.5rem; top: 2.5rem}
`;

export const ToastWrapper = styled.div<{ setOpen?: boolean }>`
  display: ${(props) => (props.setOpen ? "flex" : "none")};
  width: 20rem;
  height: 5rem;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  justify-content: space-between;
  color: var(--text);
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  border-radius: 0.5rem;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;
export const ToastHeader = styled.div<{ isSucess?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => (props.isSucess ? "var(--green)" : "var(--red)")};
  svg {
    font-size: 1.5rem;
  }
`;
export const ToastSpan = styled.span`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 300;
`;
export const ToastTitle = styled.h1`
  font-size: 1.5rem;
`;
