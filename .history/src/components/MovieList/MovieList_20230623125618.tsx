import { Grid } from "@mui/material";
import { FC } from "react";
import { ISearchResponse } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";

interface IMovieListProps {
  movieList?: ISearchResponse;
}

export const MovieList: FC<IMovieListProps> = ({ movieList }) => {
  console.log(movieList);

  return (
    <Grid container>
      {movieList?.results.map((movie) => (
        <Grid item key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
