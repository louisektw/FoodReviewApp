import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import CardRow from "../components/Layout/CardRow";
import { namespaces } from "../../i18n/i18n.constants";
import "./styles/Home.css";
import { useNavigate } from "react-router-dom";
import { AddIcon } from "../../icons";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate("/add-review");
  };

  return (
    <Grid container direction="row">
      <Grid className="buttonContainer" item xs={12}>
        <PrimaryButton
          buttonText={t("buttons.addNewReview", { ns: namespaces.pages.home })}
          onClickHandler={clickHandler} icon={<AddIcon />}
        />
      </Grid>
      <Grid item xs={12}>
        <CardRow />
      </Grid>
      <Grid item xs={12}>
        <CardRow />
      </Grid>
    </Grid>
  );
};

export default HomePage;
