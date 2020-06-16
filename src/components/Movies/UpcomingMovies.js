import React, { useEffect, useState } from "react";
import { MovieCard } from "../index";
import { getUpcoming } from "../../api";
import ReactLoading from "react-loading";

import DocumentTitle from "react-document-title";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    };

    fetchAPI();
  }, [currentPage]);

  const nextButton = () => {
    setLoaded(false);
    setCurrentPage(currentPage + 1);
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    window.scrollTo(0, 0);
  };

  const prevButton = () => {
    setLoaded(false);
    setCurrentPage(currentPage - 1);
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    window.scrollTo(0, 0);
  };

  if (!movies.results) return null;

  return (
    <>
      <DocumentTitle title='Upcoming Movies' />
      {!loaded ? (
        <div className='flex justify-center items-center h-screen'>
          <ReactLoading
            className='bg-gray-900'
            type='spinningBubbles'
            color='#696969'
            height={200}
            width={200}
          />
        </div>
      ) : (
        <div className='container mx-auto px-4 pt-16'>
          <div className='upcoming-movies'>
            <h2 className='uppercase tracking-wider text-orange-500 text-lg font-semibold'>
              Upcoming Movies
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
              {movies.results.map((movie, i) => {
                return <MovieCard key={i} movie={movie} />;
              })}
            </div>
          </div>
          <div className='container flex items-center justify-center mt-8'>
            {currentPage > 1 && (
              <div className='items-center mr-auto'>
                <button
                  onClick={prevButton}
                  className='flex y-6 bg-orange-500 text-gray-900 rounded font-semibold p-2 hover:bg-orange-600 transition ease-in-out duration-150 focus:outline-none focus:shadow-outline'
                >
                  <svg
                    className='w-6 fill-current'
                    id='icon-arrow-left2'
                    viewBox='0 0 32 32'
                  >
                    <path d='M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z'></path>
                  </svg>
                  <span className='ml-2'>Page {currentPage - 1}</span>
                </button>
              </div>
            )}
            {currentPage !== totalPages && (
              <div className='items-center ml-auto'>
                <button
                  onClick={nextButton}
                  className='flex my-6 bg-orange-500 text-gray-900 rounded font-semibold p-2 hover:bg-orange-600 transition ease-in-out duration-150 focus:outline-none focus:shadow-outline'
                >
                  <span> Page {currentPage + 1}</span>
                  <svg
                    className='ml-2 w-6 fill-current'
                    id='icon-arrow-right2'
                    viewBox='0 0 32 32'
                  >
                    <path d='M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z'></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingMovies;
