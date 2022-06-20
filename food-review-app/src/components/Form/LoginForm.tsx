import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SecondaryButton from "components/Button/SecondaryButton";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import "./formStyles.css";
import RegisterForm from "./RegisterForm";

const headerStyle = {
  marginBottom: "1rem",
};

interface ILoginFormProps {}

const LoginForm: FC<ILoginFormProps> = () => {
  const { t } = useTranslation();
  return (
    <Paper className="paperStyle" elevation={0}>
      <Avatar sx={{ bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <h2 style={headerStyle}>
        {t("header", {
          ns: namespaces.pages.signin,
        })}
      </h2>

      <Box component="form">
        <TextField
          id="standard-basic"
          label={t("labelEmail", {
            ns: namespaces.pages.signin,
          })}
          type="email"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label={t("labelPassword", {
            ns: namespaces.pages.signin,
          })}
          type="password"
          variant="standard"
          fullWidth
          required
        />
      </Box>
      <FormControlLabel
        control={<Checkbox color="secondary" />}
        label={t("labelRememberMe", {
          ns: namespaces.pages.signin,
        })}
      ></FormControlLabel>
      <SecondaryButton
        type="submit"
        buttonText={t("buttons.signin", {
          ns: namespaces.pages.signin,
        })}
        onClickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Typography>
        <Link href="#">
          {t("links.forgotPassword", {
            ns: namespaces.pages.signin,
          })}
        </Link>
      </Typography>
      <Typography>
        {t("noAccount", {
          ns: namespaces.pages.signin,
        })}
        <Link
          onClick={() => {
            <RegisterForm />;
          }}
        >
          {t("links.register", {
            ns: namespaces.pages.signin,
          })}
        </Link>
      </Typography>
    </Paper>
  );
};

export default LoginForm;
