import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  Avatar,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import SecondaryButton from "components/Button/SecondaryButton";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import "./formStyles.css";

const headerStyle = {
  marginBottom: "1rem",
};

const formControlStyle = {
  marginTop: "1rem",
};

interface IRegisterFormProps {}
const RegisterForm: FC<IRegisterFormProps> = () => {
  const { t } = useTranslation();

  return (
    <Paper className="paperStyle" elevation={0}>
      <Avatar sx={{ bgcolor: "secondary.main" }}>
        <AddCircleOutlineOutlinedIcon />
      </Avatar>
      <h2 style={headerStyle}>
        {t("header", {
          ns: namespaces.pages.register,
        })}
      </h2>
      <Typography variant="caption" gutterBottom>
        {t("caption", {
          ns: namespaces.pages.register,
        })}
      </Typography>
      <Box component="form">
        <TextField
          id="standard-basic"
          label={t("labelFirstName", {
            ns: namespaces.pages.register,
          })}
          type="text"
          variant="standard"
          required
        />
        <TextField
          id="standard-basic"
          label={t("labelLastName", {
            ns: namespaces.pages.register,
          })}
          type="text"
          variant="standard"
          required
        />
        <TextField
          id="standard-basic"
          label={t("labelEmail", {
            ns: namespaces.pages.register,
          })}
          type="text"
          variant="standard"
          required
          fullWidth
        />
        <TextField
          id="standard-basic"
          label={t("labelPhone", {
            ns: namespaces.pages.register,
          })}
          type="text"
          variant="standard"
          required
          fullWidth
        />
      </Box>
      <FormControl style={formControlStyle}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {t("gender", {
            ns: namespaces.pages.register,
          })}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value={t("radioBtn.female", {
              ns: namespaces.pages.register,
            })}
            control={<Radio />}
            label={t("radioBtn.female", {
              ns: namespaces.pages.register,
            })}
          />
          <FormControlLabel
            value={t("radioBtn.male", {
              ns: namespaces.pages.register,
            })}
            control={<Radio />}
            label={t("radioBtn.male", {
              ns: namespaces.pages.register,
            })}
          />
          <FormControlLabel
            value={t("radioBtn.other", {
              ns: namespaces.pages.register,
            })}
            control={<Radio />}
            label={t("radioBtn.other", {
              ns: namespaces.pages.register,
            })}
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id="standard-basic"
        label={t("labelPassword", {
          ns: namespaces.pages.register,
        })}
        type="password"
        variant="standard"
        required
        fullWidth
      />
      <TextField
        id="standard-basic"
        label={t("labelConfirmPassword", {
          ns: namespaces.pages.register,
        })}
        type="password"
        variant="standard"
        required
        fullWidth
      />
      <FormControlLabel
        control={<Checkbox name="checked" />}
        label={t("terms", {
          ns: namespaces.pages.register,
        })}
      />
      <SecondaryButton
        type="submit"
        buttonText={t("buttons.register", {
          ns: namespaces.pages.register,
        })}
        onClickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Paper>
  );
};

export default RegisterForm;
