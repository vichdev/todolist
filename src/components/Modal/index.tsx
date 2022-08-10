import React from "react";
import * as Styles from "./styles";
import { IPropsModal } from "./interfaces/IPropsModal";
import { useTask } from "../../context/TaskContext";
import { IoClose } from "react-icons/io5";

const Modal: React.FC<IPropsModal> = ({
  children,
  headerTitle,
  widthSize,
  heightSize,
}) => {
  const { openModal, setOpenModal } = useTask();
  return (
    <Styles.ModalWrapper openModal={openModal}>
      <Styles.ModalContainer widthSize={widthSize} heightSize={heightSize}>
        <Styles.ModalHeader>
          <Styles.HeaderTitle>{headerTitle}</Styles.HeaderTitle>
        </Styles.ModalHeader>
        <Styles.Modal>{children}</Styles.Modal>
        <IoClose onClick={() => setOpenModal(false)} />
      </Styles.ModalContainer>
    </Styles.ModalWrapper>
  );
};

export default Modal;
