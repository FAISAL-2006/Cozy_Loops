import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
// have to edit completely 
//This car is to display Additional items like Chaat items , juices , and anything else 
import type {HomePageProducts} from "../types/homeproducts";

type props={
   Products:HomePageProducts;
};
export default function homecard2({Products}:props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        className="h-24 w-24"
          component="img"
          image={Products.img}
          alt={Products.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Products.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
