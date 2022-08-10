import React from "react";
import * as Styles from "./styles";
import { IButtonProps } from "./interfaces/IButtonProps";

const Button: React.FC<IButtonProps> = ({ title, onClick, color, bgColor }) => {
  return (
    <Styles.ButtonWrapper>
      <Styles.Button onClick={onClick} bgColor={bgColor} color={color}>
        {title}
      </Styles.Button>
    </Styles.ButtonWrapper>
  );
};

export default Button;
