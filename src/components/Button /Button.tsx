import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

const CustomButton: React.FC<ButtonProps> = ({ onClick, label }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default CustomButton;
