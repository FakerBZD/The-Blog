import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

const CustomButton: React.FC<ButtonProps> = ({
  label,
  sizeType,
  onClick,
  type,
}) => (
  <StyledButton onClick={onClick} sizeType={sizeType} type={type}>
    {label}
  </StyledButton>
);

export default CustomButton;
