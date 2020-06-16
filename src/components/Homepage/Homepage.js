import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { getTrendingMoviesToday, getTrendingTvToday } from "../../api";
import NotFound from "../../Utils/img/no-image-found.png";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import DocumentTitle from "react-document-title";

const Homepage = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeItemIndexTv, setActiveItemIndexTv] = useState(0);

  const [trendingMoviesToday, setTrendingMoviesToday] = useState([]);
  const [trendingShowsToday, setTrendingShowsToday] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const chevronWidth = 40;

  useEffect(() => {
    const fetchAPI = async () => {
      setTrendingMoviesToday(await getTrendingMoviesToday());
      setTrendingShowsToday(await getTrendingTvToday());
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <DocumentTitle title='Bulent Eroglu | Movies' />
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
        <div className='px-5 py-5'>
          <div className='recommend mb-12 mt-5'>
            <h2 className='ml-10 text-gray-500 mb-5'>Movies Trending Today</h2>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                gutter={20}
                leftChevron={
                  <button>
                    <svg
                      id='icon-arrow-right2'
                      viewBox='0 0 32 32'
                      className='fill-current text-gray-500 w-4'
                    >
                      <path d='M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z'></path>
                    </svg>
                  </button>
                }
                rightChevron={
                  <button>
                    {" "}
                    <svg
                      id='icon-arrow-right2'
                      viewBox='0 0 32 32'
                      className='fill-current text-gray-500 w-4'
                    >
                      <path d='M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z'></path>
                    </svg>
                  </button>
                }
                outsideChevron
                chevronWidth={chevronWidth}
              >
                {trendingMoviesToday.length &&
                  trendingMoviesToday.map((movie, i) => (
                    <Link key={i} to={`/movie/${movie.id}`}>
                      <div className='flex items-center flex-col transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100'>
                        <img
                          className='object-contain h-64 w-full'
                          src={
                            !movie.poster_path
                              ? NotFound
                              : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          }
                          alt={movie.title}
                        />
                        <p className='text-sm'>{movie.title}</p>
                      </div>
                    </Link>
                  ))}
              </ItemsCarousel>
            </div>
          </div>
          <div className='recommend mb-12 mt-12'>
            <h2 className='ml-10 text-gray-500 mb-5'>
              TV Shows Trending Today
            </h2>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
              <ItemsCarousel
                requestToChangeActive={setActiveItemIndexTv}
                activeItemIndex={activeItemIndexTv}
                numberOfCards={5}
                gutter={20}
                leftChevron={
                  <button>
                    <svg
                      id='icon-arrow-right2'
                      viewBox='0 0 32 32'
                      className='fill-current text-gray-500 w-4'
                    >
                      <path d='M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z'></path>
                    </svg>
                  </button>
                }
                rightChevron={
                  <button>
                    {" "}
                    <svg
                      id='icon-arrow-right2'
                      viewBox='0 0 32 32'
                      className='fill-current text-gray-500 w-4'
                    >
                      <path d='M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z'></path>
                    </svg>
                  </button>
                }
                outsideChevron
                chevronWidth={chevronWidth}
              >
                {trendingShowsToday.length &&
                  trendingShowsToday.map((show, i) => (
                    <Link key={i} to={`/tv/${show.id}`}>
                      <div className='flex items-center flex-col transition-opacity duration-1000 ease-out opacity-50 hover:opacity-100'>
                        <img
                          className='object-contain h-64 w-full'
                          src={
                            !show.poster_path
                              ? NotFound
                              : `https://image.tmdb.org/t/p/w500${show.poster_path}`
                          }
                          alt={show.original_name}
                        />
                        <p className='text-sm'>{show.original_name}</p>
                      </div>
                    </Link>
                  ))}
              </ItemsCarousel>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
