import React from "react";
import MovieList from "../MovieList";
import { useParams } from "react-router-dom";
import { filmAPI } from "../../store/services/FilmService";
import { Box, Container } from "@mui/material";

export const RecommendationsHeader = () => {
  const { id } = useParams();
  const [getRecommendations] = filmAPI.useLazyGetRecommendationsQuery();
  const getMovies = async (page: number) => {
    const res = await getRecommendations({
      id: parseInt(id || "1"),
      page,
    }).unwrap();
    return res;
  };
  return (
    <Container
      disableGutters
      sx={{ width: "100%", overflow: "auto", display: "flex" }}
    >
      <MovieList getMovies={getMovies} captionText="Recommendations" />
    </Container>
  );
};