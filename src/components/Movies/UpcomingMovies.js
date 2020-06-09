import React, { useEffect, useState } from "react";
import { MovieCard } from "../index";
import { getUpcoming } from "../../api";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await getUpcoming());
    };

    fetchAPI();
  }, []);

  if (!movies.length) return null;

  return (
    <div class='container my-12 mx-auto '>
      <div class='flex flex-wrap'>
        {movies.map((movie, i) => {
          return <MovieCard key={i} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default UpcomingMovies;
