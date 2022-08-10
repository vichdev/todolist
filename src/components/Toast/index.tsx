import React from "react";
import { useTask } from "../../context/TaskContext";
import * as Styles from "./styles";
import { IoCloseSharp } from "react-icons/io5";

const Toast: React.FC = () => {
  const { toast, setToast } = useTask();
  return (
    <Styles.ToastWrapper setOpen={toast.display}>
      <Styles.ToastHeader isSucess={toast.status}>
        <Styles.ToastTitle>{toast.title}</Styles.ToastTitle>
        <IoCloseSharp onClick={() => setToast({ display: false })} />
      </Styles.ToastHeader>
      <Styles.ToastSpan>{toast.description}</Styles.ToastSpan>
    </Styles.ToastWrapper>
  );
};

export default Toast;
