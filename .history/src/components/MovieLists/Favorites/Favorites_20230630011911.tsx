import { useReadLocalStorage } from "usehooks-ts";
import { MovieList } from "../../MovieList/MovieList";
import { IMovieStorage } from "../../../utils/models";

export const Favorites = () => {
  const favoriteMovies =
    useReadLocalStorage<IMovieStorage[]>("favorite-movies");
  console.log(favoriteMovies);

  return (
    <>
      <MovieList movies={favoriteMovies || []} captionText={"Favorite"} />
    </>
  );
};
