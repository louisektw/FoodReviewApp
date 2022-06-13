import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RestaurantCard = (props: any) => {
  const { restName, address, city, priceRange, rating, imageUrl } =
    props.restaurant;

  return (
    <Card sx={{ minWidth: 200 }}>
      <CardMedia
        component="img"
        alt="Restaurant Picture"
        height="140"
        src={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {restName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address},
          <br />
          {city}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default RestaurantCard;
