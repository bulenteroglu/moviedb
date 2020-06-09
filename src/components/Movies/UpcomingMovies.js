import React, { useEffect, useState } from "react";
import { MovieCard } from "../index";
import { getUpcoming } from "../../api";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await getUpcoming(currentPage));
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    setTotalPages(movies.total_pages);
  }, [movies]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await getUpcoming(currentPage));
    };

    fetchAPI();
  }, [currentPage]);

  const nextButton = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevButton = () => {
    setCurrentPage(currentPage - 1);
  };

  if (!movies.results) return null;

  return (
    <div class='container my-12 mx-auto '>
      <div class='flex flex-wrap'>
        {movies.results.map((movie, i) => {
          return <MovieCard key={i} movie={movie} />;
        })}
      </div>
      {currentPage !== totalPages && (
        <button
          onClick={nextButton}
          class='float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Page {currentPage + 1}
        </button>
      )}
      {currentPage > 1 && (
        <button
          onClick={prevButton}
          class=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Page {currentPage - 1}
        </button>
      )}
    </div>
  );
};

export default UpcomingMovies;
