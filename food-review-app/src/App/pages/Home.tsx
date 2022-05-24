import { Grid } from "@mui/material";
import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantCardRow from "../components/RestaurantCardRow";

export interface IHomePageProps {}
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Grid container direction="row">
      <Grid item overflow="auto">
        <RestaurantCardRow />
      </Grid>
    </Grid>
  );
};

export default HomePage;
