import React from "react";
import * as Styles from "./styles";
import { IButtonProps } from "./interfaces/IButtonProps";

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <Styles.ButtonWrapper>
      <Styles.Button {...props}>{props.title}</Styles.Button>
    </Styles.ButtonWrapper>
  );
};

export default Button;
