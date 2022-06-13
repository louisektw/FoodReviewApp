import { Grid } from "@mui/material";
import restaurants from "../../../restaurant-data.json";
import RestaurantCard from "../RestaurantCard";

const CardRow = () => {
  return (
    <Grid
      container
      flexWrap="nowrap"
      direction="row"
      spacing={3}
      overflow="auto"
      marginTop={2}
      paddingY={1}

    >
      {restaurants.map((restaurant) => (
        <Grid item >
          <RestaurantCard restaurant={restaurant} />
        </Grid>
      ))}
    </Grid>
  );
};
export default CardRow;
