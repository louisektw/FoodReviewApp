import { TextField } from "@mui/material";
import { FC } from "react";

interface IFormTextFieldProps {
  label: string;
  type?: string;
}
const FormTextField: FC<IFormTextFieldProps> = ({ label, type }) => {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      type={type}
      fullWidth
      required
    />
  );
};

export default FormTextField;
