import { Grid } from "@mui/material";
import restaurants from "../../restaurant-data.json";
import RestaurantCard from "./RestaurantCard";

const RestaurantCardRow = () => {
  return (
    <Grid
      container
      flexWrap="nowrap"
      direction="row"
      spacing={2}
      
      marginTop={10}
    >
      {restaurants.map((restaurant) => (
        <Grid item>
          <RestaurantCard restaurant={restaurant} />
        </Grid>
      ))}
    </Grid>
  );
};
export default RestaurantCardRow;
