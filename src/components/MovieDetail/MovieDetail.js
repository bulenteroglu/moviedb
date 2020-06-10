import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { getMovie } from "../../api/";

const MovieDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await getMovie(id));
    };

    fetchAPI();
  }, []);

  console.log(data);

  return (
    <>
      <div className='movie-info border-b border-gray-800'>
        <div className='container mx-auto px-4 py-16 flex flex-col md:flex-row'>
          <img
            style={{ width: "24rem" }}
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />
          <div className='md:ml-24'>
            <h2 className='text-4xl font-semibold'>
              {data.original_title} (
              <Moment format='YYYY'>{data.release_date}</Moment>)
            </h2>
            <div className='flex flex-wrap items-center text-gray-400 text-sm'>
              <span>
                <svg
                  className='fill-current text-orange-500 w-4'
                  id='icon-star-full'
                  viewBox='0 0 32 32'
                >
                  <path d='M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z'></path>
                </svg>
              </span>
              <span className='ml-1'>{data.vote_average * 10}%</span>
              <span className='mx-2'>|</span>
              <span>
                <Moment format='MMM D, YYYY'>{data.release_date}</Moment>
              </span>
              <span className='mx-2'>|</span>
              {data.genres &&
                data.genres.map((genre, i) => {
                  return <span>{(i ? ", " : "") + genre.name}</span>;
                })}
            </div>
            <p className='text-gray-300 mt-8'>{data.overview}</p>

            <div className='mt-12'>
              <h4 className='text-white font-semibold'>Featured Cast</h4>
              <div className='flex mt-4'>
                <div>
                  <div>Bong Joon-ho</div>
                  <div className='text-sm text-gray-400'>
                    Screenplay, Director, Story
                  </div>
                </div>
                <div className='ml-8'>
                  <div>Han Jin-won</div>
                  <div className='text-sm text-gray-400'>Screenplay</div>
                </div>
              </div>
            </div>
            <div className='mt-12'>
              <button className='flex items-center bg-orange-500 text-gray-900 rounded font-semibold px-5 py-4 hover:bg-orange-600 transition ease-in-out duration-150 focus:outline-none focus:shadow-outline'>
                <svg
                  className='w-6 fill-current'
                  id='icon-play2'
                  viewBox='0 0 32 32'
                >
                  <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z'></path>
                </svg>
                <span className='ml-2'>Play Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='movie-cast border-b border-gray-800'>
        <div className='container mx-auto px-4 py-16'>
          <h2 className='text-4xl font-semibold'>Cast</h2>
          <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
            <div class='mt-8'>
              <img
                alt='Placeholder'
                class='hover:opacity-75 transition ease-in-out duration-150'
                src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/lMqKPig7zBoGfou7wWf88sZEGHo.jpg'
              />
              <div className='mt-2'>
                <div className='text-gray-400'>Ahmet Durmus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
