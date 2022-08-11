import React from "react";
import * as Styles from "./styles";
import { IPropsModal } from "./interfaces/IPropsModal";
import { IoClose } from "react-icons/io5";

const Modal: React.FC<IPropsModal> = ({
  children,
  headerTitle,
  widthSize,
  heightSize,
  isOpen,
  toggle,
}) => {
  return (
    <Styles.ModalWrapper openModal={isOpen}>
      <Styles.ModalContainer widthSize={widthSize} heightSize={heightSize}>
        <Styles.ModalHeader>
          <Styles.HeaderTitle>{headerTitle}</Styles.HeaderTitle>
        </Styles.ModalHeader>
        <Styles.Modal>{children}</Styles.Modal>
        <IoClose
          onClick={() => {
            toggle(!isOpen);
          }}
        />
      </Styles.ModalContainer>
    </Styles.ModalWrapper>
  );
};

export default Modal;
