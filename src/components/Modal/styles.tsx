import styled from "styled-components";

export const ModalWrapper = styled.div<{ openModal: boolean }>`
  width: 100vw;
  height: 100%;
  display: ${(props) => (props.openModal ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: absolute;
  top: 0;
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);
  border-radius: 0.75rem;
  background-color: #f8f8f8;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.25rem;
`;

export const ModalContainer = styled.div<{
  heightSize?: string;
  widthSize?: string;
}>`
  width: ${(props) => (props.widthSize ? props.widthSize : "35%")};
  max-width: 31.25rem;
  position: relative;
  height: ${(props) => (props.heightSize ? props.heightSize : "50%")};
  max-height: 31.25rem;
  background-color: white;
  border-radius: 0.75rem;
`;

export const Modal = styled.div`
  width: 100%;
  height: 90%;
  padding: 1rem;
`;

export const CloseWrapper = styled.div`
  svg {
    font-size: 1.5rem;
    position: absolute;
    color: black;
    top: 0.75rem;
    right: 1rem;
  }
`;
