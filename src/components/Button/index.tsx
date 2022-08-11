import React from "react";
import * as Styles from "./styles";
import { IButtonProps } from "./interfaces/IButtonProps";

const Button: React.FC<IButtonProps> = ({
  title,
  onClick,
  color,
  bgColor,
  borderColor,
  disabled,
}) => {
  return (
    <Styles.ButtonWrapper>
      <Styles.Button
        onClick={onClick}
        bgColor={bgColor}
        color={color}
        borderColor={borderColor}
        disabled={disabled}
      >
        {title}
      </Styles.Button>
    </Styles.ButtonWrapper>
  );
};

export default Button;
