import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";

interface ICardItemProps {
  header: string;
  body1: string;
  body2: string;
  body3: string;
  image: string;
}
const CardItem: FC<ICardItemProps> = (props) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardMedia
        component="img"
        alt="Restaurant Picture"
        height="140"
        src={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.body1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.body2},
          <br />
          {props.body3}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;

// const CardItem = (props: any) => {
//   const { restName, address, city, priceRange, rating, imageUrl } =
//     props.restaurant;

//   return (
//     <Card sx={{ minWidth: 200 }}>
//       <CardMedia
//         component="img"
//         alt="Restaurant Picture"
//         height="140"
//         src={imageUrl}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {restName}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {rating}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {address},
//           <br />
//           {city}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };
// export default CardItem;
