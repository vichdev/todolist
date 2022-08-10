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
  justify-content: space-between;
  align-items: center;
  color: var(--text);
  background-color: #f8f8f8;
  padding: 2rem;
  svg {
    font-size: 1.5rem;
  }
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
  height: ${(props) => (props.heightSize ? props.heightSize : "50%")};
  max-height: 31.25rem;
  background-color: white;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
`;
