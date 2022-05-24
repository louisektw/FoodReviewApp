import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RestaurantCard = (restaurant: any) => {
  const { restId, restName, address, city, priceRange, rating, imageUrl } =
    restaurant.restaurant;
  console.log(restaurant.restaurant);

  return (
    <Card sx={{ maxWidth: 345 }}>
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
      </CardContent>
    </Card>
  );
};
export default RestaurantCard;
