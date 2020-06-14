import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import NotFound from "../../Utils/img/no-image-found.png";
import ReactLoading from "react-loading";
import moment from "moment";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

import { getShow, getTrailer, getShowCast } from "../../api/";
import Modal from "./Modal";

const TVDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [credits, setCredits] = useState([]);
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      window.scrollTo(0, 0);
      setData(await getShow(id));
      setTrailer(await getTrailer(id));
      setCredits(await getShowCast(id));
      setTimeout(() => {
        setLoaded(true);
      }, 300);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <DocumentTitle
        title={
          data.name + " (" + moment(data.first_air_date).format("YYYY") + ")"
        }
      />
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
        <>
          <div className='movie-info border-b border-gray-800 '>
            <div className='container mx-auto px-4 py-16 flex flex-col md:flex-row'>
              <img
                style={{ width: "24rem" }}
                src={
                  !data.poster_path
                    ? NotFound
                    : `https://image.tmdb.org/t/p/w500${data.poster_path}`
                }
                alt={data.name}
              />
              <div className='md:ml-24'>
                <h2 className='text-4xl font-semibold'>
                  {data.name} (
                  <Moment format='YYYY'>{data.first_air_date}</Moment>)
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
                    <Moment format='MMM D, YYYY'>{data.first_air_date}</Moment>
                  </span>
                  <span className='mx-2'>|</span>
                  {data.genres &&
                    data.genres.map((genre, i) => {
                      return (
                        <span key={i}>{(i ? ", " : "") + genre.name}</span>
                      );
                    })}
                </div>
                <p className='text-gray-300 mt-8'>{data.overview}</p>

                <div className='mt-12'>
                  <h4 className='text-white font-semibold'>Featured Cast</h4>
                  <div className='flex mt-4'>
                    {credits.cast &&
                      credits.cast.slice(0, 2).map((credit, i) => {
                        {
                          return i > 0 ? (
                            <div className={`${i < 1} ml-8`}>
                              {credit.character}
                              <div className='text-sm text-gray-400'>
                                <Link to={`/actor/${credit.id}`}>
                                  {credit.name}
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <div>
                              {credit.character}
                              <div className='text-sm text-gray-400'>
                                <Link to={`/actor/${credit.id}`}>
                                  {credit.name}
                                </Link>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </div>
                </div>

                {/* <div className='mt-12'>
                  <button
                    disabled={!trailer.length}
                    onClick={onClick}
                    className={` ${
                      !trailer.length
                        ? "cursor-not-allowed bg-red-600"
                        : "bg-orange-500 hover:bg-orange-600 transition ease-in-out duration-150"
                    }
                flex items-center text-gray-900 rounded font-semibold px-5 py-4  focus:outline-none focus:shadow-outline`}
                  >
                    <svg
                      className='w-6 fill-current'
                      id='icon-play2'
                      viewBox='0 0 32 32'
                    >
                      {trailer.length ? (
                        <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z'></path>
                      ) : (
                        <path d='M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 0.895 2 2s-0.895 2-2 2-2-0.895-2-2 0.895-2 2-2zM10 8c1.105 0 2 0.895 2 2s-0.895 2-2 2-2-0.895-2-2 0.895-2 2-2zM22.003 24.398c-1.224-2.036-3.454-3.398-6.003-3.398s-4.779 1.362-6.003 3.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855s6.827 1.946 8.576 4.855l-2.573 1.544z'></path>
                      )}
                    </svg>
                    <span className='ml-2'>
                      {trailer.length ? "Play Trailer" : "No Trailer "}
                    </span>
                  </button>
                </div> */}
              </div>
            </div>

            <div className='movie-cast border-t border-gray-800'>
              <div className='container mx-auto px-4 py-16'>
                <h2 className='text-4xl font-semibold'>Cast</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                  {credits.cast &&
                    credits.cast.map((credit) => (
                      <Link to={`/actor/${credit.id}`}>
                        <div className='mt-8'>
                          <img
                            alt='Placeholder'
                            className='hover:opacity-75 transition ease-in-out duration-150'
                            src={
                              !credit.profile_path
                                ? NotFound
                                : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${credit.profile_path}`
                            }
                            alt={data.title}
                          />
                          <div className='mt-2'>
                            <div className='text-gray-400'>{credit.name}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* end movie-info */}
        </>
      )}
      {modal && <Modal onClick={onClick} trailer={trailer} />}
    </>
  );
};

export default TVDetail;
