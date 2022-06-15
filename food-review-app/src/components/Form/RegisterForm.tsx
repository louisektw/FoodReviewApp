import { Grid, Paper } from "@mui/material";
import { FC } from "react";

interface IRegisterFormProps {
  title: string;
}
const RegisterForm: FC<IRegisterFormProps> = ({ title }) => {
  return (
    <Grid>
      <Paper elevation={5}>
        <h1>{title}</h1>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
