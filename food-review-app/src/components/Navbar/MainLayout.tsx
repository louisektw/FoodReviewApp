import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export interface IMainLayoutProps {}
const MainLayout: React.FunctionComponent<IMainLayoutProps> = (props) => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Outlet />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainLayout;
