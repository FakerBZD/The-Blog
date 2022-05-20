import React from "react";

import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import { InputFieldProps } from "./InputField.types";
import { StyledTextField } from "./InputField.styles";

const InputField: React.FC<InputFieldProps> = ({
  onBlur,
  searchField,
  placeholder,
  value,
  name,
  onChange,
}) => (
  <Box>
    <OutlinedInput
      sx={StyledTextField}
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
