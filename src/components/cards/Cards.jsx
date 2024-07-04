import {
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

function Cards({ data, titulo }) {
  return (
    <>
      <Container sx={{ my: "20px" }}>
        <Typography variant="h1" sx={{ mt: "100px" }}>
          {titulo}
        </Typography>
        <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
      </Container>
    </>
  );
}

export default Cards;
