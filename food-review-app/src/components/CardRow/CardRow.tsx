import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import { FC } from "react"
import { IRestaurant } from "../../interfaces/irestaurant.interface";

interface ICardRowProps {
  data: IRestaurant[];
};
const CardRow:FC<ICardRowProps> = ({data}) => {

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
      {data.map((item:any) => (
        <Grid item >
          <CardItem header={item.name} body1={item.rating} body2={item.address} body3={item.city}  image={item.imageUrl}/>
        </Grid>
      ))}
    </Grid>
  )
};

export default CardRow;
