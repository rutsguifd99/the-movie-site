import { useReadLocalStorage } from "usehooks-ts";
import { MovieList } from "../../MovieList/MovieList";
import { IMovieDetails } from "../../../store/responses/SearchResponse";

export const Favorites = () => {
  const favoriteMovies =
    useReadLocalStorage<IMovieDetails[]>("favorite-movies");
  console.log(favoriteMovies);

  return (
    <>
      <MovieList
        sm={4}
        movies={favoriteMovies || []}
        captionText={"Favorite"}
      />
    </>
  );
};
