import React from "react";

import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputFieldProps } from "./InputField.types";
import { AddBlogContainerStyled } from "./InputField.styles";

const InputField: React.FC<InputFieldProps> = ({
  onBlur,
  searchField,
  placeholder,
  value,
  name,
  onChange,
}) => (
  <Box>
    <AddBlogContainerStyled
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      endAdornment={searchField ? <SearchIcon /> : ""}
      placeholder={placeholder}
    />
  </Box>
);

export default InputField;
