import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../components/Button/PrimaryButton";
import CardRow from "../components/CardRow/CardRow";
import { namespaces } from "../i18n/i18n.constants";
import "./styles/Home.css";
import { useNavigate } from "react-router-dom";
import { AddIcon } from "../icons";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { IDataContext } from "../contexts/DataContext";
import FormModal from "../components/Form/FormModal";

const HomePage = () => {
  const { restaurants } = useContext(DataContext) as IDataContext;


  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const clickHandler = () => {

  };

  return (
    <Grid container direction="row">
      <Grid className="buttonContainer" item xs={12}>
        <PrimaryButton
          buttonText={t("buttons.addNewReview", { ns: namespaces.pages.home })}
          onClickHandler={clickHandler}
          icon={<AddIcon />}
        />
      </Grid>
      <Grid item xs={12}>
        <CardRow data={restaurants} />
      </Grid>
      <Grid item xs={12}>
        <CardRow data={restaurants} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
