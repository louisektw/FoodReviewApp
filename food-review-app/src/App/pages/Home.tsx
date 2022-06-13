import { Grid } from "@mui/material";
import React from "react";
import AddButton from "../components/AddButton";
import RestaurantCardRow from "../components/RestaurantCardRow";

export interface IHomePageProps {}
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <AddButton buttonText="Lägg till review"/>
      </Grid>
      <Grid item xs={12}>
        <RestaurantCardRow />
      </Grid>
      <Grid item xs={12}>
        <RestaurantCardRow />
      </Grid>
    </Grid>
  );
};

export default HomePage;
