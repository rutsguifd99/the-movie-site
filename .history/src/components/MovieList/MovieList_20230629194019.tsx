import { Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ISearchResponse, Result } from "../../store/responses/SearchResponse";
import MovieCard from "../MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { filmAPI } from "../../store/services/FilmService";

interface IMovieListProps {
  getMovies: (page: number) => Promise<ISearchResponse>;
  captionText: string;
}

export const MovieList: FC<IMovieListProps> = ({ getMovies, captionText }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movieList, setMovieList] = useState<Result[]>([]);

  const { data: genres } = filmAPI.useGetGenresListQuery();

  const fetchMovies = async () => {
    const res = await getMovies(page);
    setMovieList((prev) => prev.concat(res.results));
    setTotalPages(res.total_pages);
    setPage(page + 1);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <InfiniteScroll
      dataLength={movieList.length}
      next={fetchMovies}
      hasMore={totalPages !== page - 1}
      loader={<div>loading</div>}
      endMessage={<div>ended</div>}
    >
      <Typography ml={4} my={2} variant="h6" fontWeight="600">
        {captionText}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnGap={2}
        sx={{
          justifyContent: "flex-start",
          flexWrap: "nowrap",
          overflowX: "auto",
          maxWidth: "100%",
          paddingX: 0,
        }}
      >
        {movieList?.map((movie) => (
          <Grid item xs="auto" sx={{ overflow: "auto" }} key={movie.id}>
            <MovieCard movie={movie} genresList={genres?.genres || []} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};
