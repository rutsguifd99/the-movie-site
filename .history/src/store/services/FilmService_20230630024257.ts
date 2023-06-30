import { api } from ".";
import { IGenresResponse, IKeywordSearchResponse } from "../../utils/models";
import {
  IMovieDetails,
  ISearchResponse,
  SearchQuery,
} from "../responses/SearchResponse";

export const filmAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieByKeyword: build.query<IKeywordSearchResponse, string>({
      query: (searchQuery) => `search/keyword?query=${searchQuery}&page=1`,
    }),
    getMovieBySearch: build.query<ISearchResponse, SearchQuery>({
      query: ({ searchQuery, page = 1 }) =>
        `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}`,
    }),
    getTrendingMovies: build.query<ISearchResponse, number>({
      query: (page) => `trending/movie/day?language=en-US&page=${page}`,
    }),
    getPopularMovies: build.query<ISearchResponse, number>({
      query: (page) => `movie/popular?language=en-US&page=${page}`,
    }),
    getUpcomingMovies: build.query<ISearchResponse, number>({
      query: (page) => `movie/upcoming?language=en-US&page=${page}`,
    }),
    getGenresList: build.query<IGenresResponse, void>({
      query: () => `genre/movie/list?language=en`,
    }),
    getRecommendations: build.query<
      ISearchResponse,
      { id: number; page: number }
    >({
      query: ({ id, page }) =>
        `movie/${id}/recommendations?language=en-US&page=${page}`,
    }),
    getMovieDetails: build.query<IMovieDetails, string>({
      query: (id) => `movie/${id}?language=en-US`,
    }),

    getMoviesByGenre: build.query<
      ISearchResponse,
      { id: string; page: number }
    >({
      query: ({ id, page }) =>
        `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genre=${id}`,
    }),
  }),
});
