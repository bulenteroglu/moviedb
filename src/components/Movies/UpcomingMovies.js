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
    window.scrollTo(0, 0);
  };

  const prevButton = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  if (!movies.results) return null;

  return (
    <div class='container mx-auto px-4 pt-16'>
      <div className='upcoming-movies'>
        <h2 className='uppercase tracking-wider text-orange-500 text-lg font-semibold'>
          Upcoming Movies
        </h2>
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {movies.results.map((movie, i) => {
            return <MovieCard key={i} movie={movie} />;
          })}
        </div>
      </div>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
        {currentPage > 1 && (
          <button
            onClick={prevButton}
            class='bg-gray-800 my-6 bg-orange-500 text-gray-900 rounded font-semibold p-2 hover:bg-orange-600 transition ease-in-out duration-150 focus:outline-none focus:shadow-outline'
          >
            Page {currentPage - 1}
          </button>
        )}
        {currentPage !== totalPages && (
          <button
            onClick={nextButton}
            class='bg-gray-800 my-6 bg-orange-500 text-gray-900 rounded font-semibold p-2 hover:bg-orange-600 transition ease-in-out duration-150 focus:outline-none focus:shadow-outline'
          >
            Page {currentPage + 1}
          </button>
        )}
      </div>
    </div>
  );
};

export default UpcomingMovies;
