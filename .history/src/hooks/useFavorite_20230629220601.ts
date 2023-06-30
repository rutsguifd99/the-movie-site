import { useLocalStorage } from "usehooks-ts";
import { IMovieDetails, Result } from "../store/responses/SearchResponse";
import { useEffect, useState } from "react";
import { IMovieStorage } from "../utils/models";
import { filmAPI } from "../store/services/FilmService";

export const useFavorite = (movie: IMovieDetails | Result) => {
  const [favoriteMovie, setFavoriteMovie] = useLocalStorage<IMovieStorage[]>(
    "favorite-movies",
    []
  );

  const { data } = filmAPI.useGetMovieDetailsQuery(movie?.id?.toString());
  const storageMovie = data ? data : ({} as IMovieStorage);
  const [isFavorite, setIsFavorite] = useState<boolean>();
  const favoriteClickHandler = () => {
    if (!isFavorite) {
      setFavoriteMovie((prev) => prev.concat(storageMovie));
    } else {
      setFavoriteMovie((prev) => prev.filter((mov) => mov.id !== movie.id));
    }
  };

  useEffect(() => {
    if (favoriteMovie.find((mov) => mov.id === movie.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteMovie, movie.id]);
  return { isFavorite, favoriteClickHandler };
};
