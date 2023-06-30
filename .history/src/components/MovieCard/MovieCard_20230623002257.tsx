import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { filmAPI } from "../../store/services/FilmService";
import { IMAGE_BASE_URL } from "../../utils/constants";

const MovieCard = () => {
  const { data } = filmAPI.useGetTrendingMoviesQuery();
  console.log(data);
  console.log(`${IMAGE_BASE_URL}${data?.results[0].poster_path}`);

  return (
    <Card sx={{ height: "300px" }}>
      <CardMedia
        image={`${IMAGE_BASE_URL}${data?.results[0].poster_path}`}
        title="xd"
      />
      <CardContent>
        <Typography variant="h5">text</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
