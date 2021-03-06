import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchMovie } from "../../api";
import NotFound from "../../Utils/img/no-image-found.png";
import "./Navbar.css";

export function Navbar({ handleChange }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showOptionsShow, setShowOptionsShow] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const onClickMovies = () => {
    setShowOptions(!showOptions);
    setShowOptionsShow(false);
    setSearchOpen(false);
  };

  const onClickShow = (e) => {
    setShowOptions(false);
    setShowOptionsShow(!showOptionsShow);
    setSearchOpen(false);
  };

  const search = (e) => {
    setQuery(e.target.value);

    if (query.length > 1) {
      setSearchOpen(true);
      const fetchAPI = async () => {
        if (!e.target.value.length < 1) {
          setData(await searchMovie(e.target.value));
        }
      };

      fetchAPI();
    }
  };

  const clickSearch = (e) => {
    setShowOptionsShow(false);
    setShowOptions(false);
  };

  const MoviesOption = () => (
    <div
      className='origin-top-right absolute items-center mt-2  rounded-md shadow-lg'
      style={{ left: "17.5px", width: "10rem", zIndex: "202" }}
    >
      <div className='rounded-md bg-gray-800 shadow-xs'>
        <div
          className='py-1 '
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <Link to='/discover/upcoming'>
            <button
              onClick={(e) => onClickMovies(false)}
              className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '
            >
              Upcoming Movies
            </button>
          </Link>
          <Link to='/discover/top-rated'>
            <button
              onClick={(e) => onClickMovies(false)}
              className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '
            >
              Top Rated
            </button>
          </Link>
          <Link to='/discover/now-playing'>
            <button
              onClick={(e) => onClickMovies(false)}
              className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '
            >
              Now Playing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  const TVShowOption = () => (
    <div
      className='origin-top-right absolute items-center mt-2  rounded-md shadow-lg'
      style={{ left: "27.5px", width: "10rem", zIndex: "202" }}
    >
      <div className='rounded-md bg-gray-800 shadow-xs'>
        <div
          className='py-1 '
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <Link
            to='/discover/tv/airing-today'
            onClick={(e) => setShowOptionsShow(false)}
          >
            <button className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '>
              Airing Today
            </button>
          </Link>
          <Link
            to='/discover/tv/popular'
            onClick={(e) => setShowOptionsShow(false)}
          >
            <button className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '>
              Popular
            </button>
          </Link>
          <Link
            to='/discover/tv/top-rated'
            onClick={(e) => setShowOptionsShow(false)}
          >
            <button className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '>
              Top Rated
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <nav className='border-b border-gray-800'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between px-4 py-6'>
        <ul className='flex flex-col md:flex-row items-center'>
          <Link to='/'>
            <svg
              onClick={clickSearch}
              className='w-32'
              viewBox='0 0 489.04 35.4'
              style={{ fill: "url(#linear-gradient)" }}
            >
              <linearGradient
                id='linear-gradient'
                y1='17.7'
                x2='489.04'
                y2='17.7'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stopColor='#90cea1' />
                <stop offset='0.56' stopColor='#3cbec9' />
                <stop offset='1' stopColor='#00b3e5' />
              </linearGradient>
              <path
                className='cls-1'
                d='M293.5,0h8.9l8.75,23.2h.1L320.15,0h8.35L313.9,35.4h-6.25Zm46.6,0h7.8V35.4h-7.8Zm22.2,0h24.05V7.2H370.1v6.6h15.35V21H370.1v7.2h17.15v7.2H362.3Zm55,0H429a33.54,33.54,0,0,1,8.07,1A18.55,18.55,0,0,1,443.75,4a15.1,15.1,0,0,1,4.52,5.53A18.5,18.5,0,0,1,450,17.8a16.91,16.91,0,0,1-1.63,7.58,16.37,16.37,0,0,1-4.37,5.5,19.52,19.52,0,0,1-6.35,3.37A24.59,24.59,0,0,1,430,35.4H417.29Zm7.81,28.2h4a21.57,21.57,0,0,0,5-.55,10.87,10.87,0,0,0,4-1.83,8.69,8.69,0,0,0,2.67-3.34,11.92,11.92,0,0,0,1-5.08,9.87,9.87,0,0,0-1-4.52,9,9,0,0,0-2.62-3.18,11.68,11.68,0,0,0-3.88-1.88,17.43,17.43,0,0,0-4.67-.62h-4.6ZM461.24,0h13.2a34.42,34.42,0,0,1,4.63.32,12.9,12.9,0,0,1,4.17,1.3,7.88,7.88,0,0,1,3,2.73A8.34,8.34,0,0,1,487.39,9a7.42,7.42,0,0,1-1.67,5,9.28,9.28,0,0,1-4.43,2.82v.1a10,10,0,0,1,3.18,1,8.38,8.38,0,0,1,2.45,1.85,7.79,7.79,0,0,1,1.57,2.62,9.16,9.16,0,0,1,.55,3.2,8.52,8.52,0,0,1-1.2,4.68,9.42,9.42,0,0,1-3.1,3,13.38,13.38,0,0,1-4.27,1.65,23.11,23.11,0,0,1-4.73.5h-14.5ZM469,14.15h5.65a8.16,8.16,0,0,0,1.78-.2A4.78,4.78,0,0,0,478,13.3a3.34,3.34,0,0,0,1.13-1.2,3.63,3.63,0,0,0,.42-1.8,3.22,3.22,0,0,0-.47-1.82,3.33,3.33,0,0,0-1.23-1.13,5.77,5.77,0,0,0-1.7-.58,10.79,10.79,0,0,0-1.85-.17H469Zm0,14.65h7a8.91,8.91,0,0,0,1.83-.2,4.78,4.78,0,0,0,1.67-.7,4,4,0,0,0,1.23-1.3,3.71,3.71,0,0,0,.47-2,3.13,3.13,0,0,0-.62-2A4,4,0,0,0,479,21.45,7.83,7.83,0,0,0,477,20.9a15.12,15.12,0,0,0-2.05-.15H469Zm-265,6.53H271a17.66,17.66,0,0,0,17.66-17.66h0A17.67,17.67,0,0,0,271,0H204.06A17.67,17.67,0,0,0,186.4,17.67h0A17.66,17.66,0,0,0,204.06,35.33ZM10.1,6.9H0V0H28V6.9H17.9V35.4H10.1ZM39,0h7.8V13.2H61.9V0h7.8V35.4H61.9V20.1H46.75V35.4H39ZM80.2,0h24V7.2H88v6.6h15.35V21H88v7.2h17.15v7.2h-25Zm55,0H147l8.15,23.1h.1L163.45,0H175.2V35.4h-7.8V8.25h-.1L158,35.4h-5.95l-9-27.15H143V35.4h-7.8Z'
              />
            </svg>
          </Link>

          <div className='relative inline-block text-left movies-navbar '>
            <div>
              <span className='md:ml-8 mt-3 md:mt-0 hover:text-gray-300 rounded-md shadow-sm text-gray-500'>
                <button
                  onClick={onClickMovies}
                  type='button'
                  className='inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm leading-5 font-medium  hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
                  id='options-menu'
                  aria-haspopup='true'
                  aria-expanded='true'
                >
                  Movies
                  <svg
                    className='ml-2 h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                  </svg>
                </button>
              </span>
              {showOptions && <MoviesOption />}
            </div>
          </div>

          <div className='ml-5 relative inline-block text-left movies-navbar'>
            <div>
              <span className='md:ml-8 mt-3 md:mt-0 hover:text-gray-300 rounded-md shadow-sm text-gray-500'>
                <button
                  onClick={onClickShow}
                  type='button'
                  className='inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm leading-5 font-medium  hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
                  id='options-menu'
                  aria-haspopup='true'
                  aria-expanded='true'
                >
                  TV Shows
                  <svg
                    className='mr-1 ml-2 h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                  </svg>
                </button>
              </span>
              {showOptionsShow && <TVShowOption />}
            </div>
          </div>
        </ul>
        <div className='flex items-center'>
          <div className='relative mt-3 md:mt-0'>
            <input
              type='text'
              className='bg-gray-800 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline'
              placeholder='Search'
              onChange={search}
              value={query}
              onClick={(e) => clickSearch()}
            />
            <div className='absolute top-0'>
              <svg
                className='fill-current text-gray-500 w-4 mt-2 ml-2'
                viewBox='0 0 32 32'
              >
                <path d='M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z'></path>
              </svg>
            </div>

            {searchOpen && (
              <div>
                {!query.length < 1 && query.length > 2 && (
                  <div
                    className='absolute bg-gray-800 text-sm rounded w-64 mt-4'
                    style={{ zIndex: "100" }}
                  >
                    <ul>
                      {data.results &&
                        data.results.slice(0, 15).map((movie, i) => (
                          <li className='border-b border-gray-700' key={i}>
                            <div
                              className='block hover:bg-gray-700 px-3 py-3'
                              onClick={(e) => setSearchOpen(false)}
                            >
                              <Link
                                onClick={(e) => setQuery("")}
                                to={`/movie/${movie.id}`}
                                className='block hover:bg-gray-700 px-3 py-3 flex items-center'
                              >
                                <img
                                  src={
                                    !movie.poster_path
                                      ? NotFound
                                      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                  }
                                  alt='poster'
                                  className='w-8'
                                />
                                <span className='ml-4'>{movie.title}</span>
                              </Link>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
