import React from "react";
import { useTask } from "../../context/TaskContext";
import * as Styles from "./styles";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const Toast: React.FC = () => {
  const { toast, setToast } = useTask();
  return (
    <Styles.ToastWrapper setOpen={toast.display}>
      <Styles.ToastHeader isSucess={toast.status}>
        <Styles.ToastHeaderWrapper>
          {toast.status ? (
            <AiFillCheckCircle color="var(--green)" />
          ) : (
            <AiFillCloseCircle color="var(--red)" />
          )}
          <Styles.ToastTitle>{toast.title}</Styles.ToastTitle>
        </Styles.ToastHeaderWrapper>
        <IoCloseSharp onClick={() => setToast({ display: false })} />
      </Styles.ToastHeader>
      <Styles.ToastSpan>{toast.description}</Styles.ToastSpan>
    </Styles.ToastWrapper>
  );
};

export default Toast;
