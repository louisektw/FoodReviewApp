import { Grid } from "@mui/material";
import React from "react";
import RestaurantCardRow from "../components/RestaurantCardRow";

export interface IHomePageProps {}
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Grid container direction="row">
      <RestaurantCardRow />
      <RestaurantCardRow />
    </Grid>
  );
};

export default HomePage;
