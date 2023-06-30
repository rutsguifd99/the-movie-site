import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ISearchResponse, Result } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

interface IMovieListProps {
  getMovies: (page: number) => Promise<ISearchResponse>;
  captionText: string;
}

export const MovieList: FC<IMovieListProps> = ({ getMovies, captionText }) => {
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [movieList, setMovieList] = useState<Result[]>([]);

  const fetchMovies = async () => {
    const res = await getMovies(page);
    setMovieList((prev) => prev.concat(res.results));
    setTotalResults(res.total_results);
    setPage(page + 1);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movieList);

  return (
    <InfiniteScroll
      dataLength={movieList.length}
      next={fetchMovies}
      hasMore={totalResults !== movieList.length}
      loader={<div>loading</div>}
      endMessage={<div>loading</div>}
    >
      <Typography ml={4} my={2} variant="h6" fontWeight="600">
        {captionText}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnGap={2}
        sx={{ justifyContent: "center" }}
      >
        {movieList?.map((movie) => (
          <Grid item xs="auto" key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
