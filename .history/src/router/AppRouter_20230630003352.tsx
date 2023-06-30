import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import { GenresPage } from "../pages/GenresPage/GenresPage";
import { FavoritePage } from "../pages/FavoritePage/FavoritePage";
import { PopularPage } from "../pages/PopularPage/PopularPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />} />
      <Route path="/genres" element={<GenresPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="/popular" element={<PopularPage />} />
    </Routes>
  );
};

export default AppRouter;
