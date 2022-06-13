import { TextField } from "@mui/material"
import { FC } from "react"

interface IFormTextFieldProps {
    label: string
    value: string
    placeholder: string
};
const FormTextField:FC<IFormTextFieldProps> = props => {
  return (
    <TextField placeholder={props.placeholder}></TextField>
  )
};

export default FormTextField;
