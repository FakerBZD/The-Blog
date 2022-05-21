import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

const CustomButton: React.FC<ButtonProps> = ({ onClick, label, sizeType }) => (
  <StyledButton onClick={onClick} sizeType={sizeType}>
    {label}
  </StyledButton>
);

export default CustomButton;
