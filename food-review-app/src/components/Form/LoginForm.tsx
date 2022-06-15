import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import SecondaryButton from "components/Button/SecondaryButton";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import "./formStyles.css";
import FormTextField from "./FormTextField";

interface ILoginFormProps {}

const LoginForm: FC<ILoginFormProps> = () => {
  const { t } = useTranslation();
  return (
    <Paper className="paperStyle" elevation={0}>
      <Avatar sx={{ bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <h2>
        {t("title", {
          ns: namespaces.pages.signin,
        })}
      </h2>

      <Box component="form">
        <FormTextField
          label={t("labelUser", {
            ns: namespaces.pages.signin,
          })}
        />
        <FormTextField
          label={t("labelPassword", {
            ns: namespaces.pages.signin,
          })}
          type="password"
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
    </Paper>
  );
};

export default LoginForm;
