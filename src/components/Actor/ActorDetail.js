import React, { useEffect, useState } from "react";
import NotFound from "../../Utils/img/no-image-found.png";
import DocumentTitle from "react-document-title";
import ReactLoading from "react-loading";
import { getPerson, getPersonMovies } from "../../api";
import ActorModal from "./ActorModal";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const ActorDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState([]);
  const [actorMovie, setActorMovie] = useState([]);
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [option, setOption] = useState("popularity.desc");

  const onClick = () => {
    setModal(!modal);
  };

  const onClickSort = () => {
    setShowOptions(!showOptions);
  };
  useEffect(() => {
    setTotalPages(actorMovie.total_pages);
  }, [actorMovie]);

  useEffect(() => {
    const fetchAPI = async () => {
      window.scrollTo(0, 0);
      setData(await getPerson(id));
      setActorMovie(await getPersonMovies(id, currentPage, option));
      setTimeout(() => {
        setLoaded(true);
      }, 300);
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      setActorMovie(await getPersonMovies(id, currentPage, option));
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

  useEffect(() => {
    setLoaded(false);
    const fetchAPI = async () => {
      setActorMovie(await getPersonMovies(id, currentPage, option));
      setTimeout(() => {
        setLoaded(true);
      }, 600);
    };

    fetchAPI();
  }, [option]);

  const clickOptions = (value) => {
    switch (value) {
      case "Popularity":
        window.scrollTo(0, 0);
        setOption("popularity.desc");
        setShowOptions(false);
        break;
      case "Votes":
        window.scrollTo(0, 0);
        setOption("vote_average.desc");
        setShowOptions(false);
        break;
      case "Title":
        window.scrollTo(0, 0);
        setOption("original_title.asc");
        setShowOptions(false);
        break;
      case "Release":
        window.scrollTo(0, 0);
        setOption("release_date.desc");
        setShowOptions(false);
        break;
      default:
        setOption("popularity.desc");
        setShowOptions(false);
    }
  };

  const Sortby = () => (
    <div className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg'>
      <div className='rounded-md bg-gray-800 shadow-xs'>
        <div
          className='py-1'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <button
            onClick={(e) => clickOptions(e.target.value)}
            className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '
            role='menuitem'
            value='Popularity'
          >
            Popularity
          </button>
          <button
            onClick={(e) => clickOptions(e.target.value)}
            className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '
            role='menuitem'
            value='Votes'
          >
            Votes Average
          </button>
          <button
            onClick={(e) => clickOptions(e.target.value)}
            className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '
            role='menuitem'
            value='Title'
          >
            Title
          </button>
          <button
            onClick={(e) => clickOptions(e.target.value)}
            className='block px-4 py-2 text-sm leading-5 text-gray-500 hover:text-white focus:outline-none '
            role='menuitem'
            value='Release'
          >
            Release Date
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <DocumentTitle title={data.name} />
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
          <div className='actor-info border-b border-gray-800'>
            <div className='container mx-auto px-4 py-16 flex flex-col md:flex-row'>
              <img
                style={{ width: "24rem" }}
                src={
                  !data.profile_path
                    ? NotFound
                    : `https://image.tmdb.org/t/p/w500${data.profile_path}`
                }
                alt={data.title}
              />
              <div className='md:ml-24'>
                <h2 className='text-4xl font-semibold'>{data.name}</h2>

                {!data.biography && (
                  <p className='mt-2'>There is no biography available...</p>
                )}
                {data.biography.length < 700 ? (
                  <p className='text-gray-300 mt-8'>{data.biography}</p>
                ) : (
                  <div>
                    <p className='text-gray-300 mt-8'>
                      {data.biography.substring(0, 701) + "....."}
                    </p>
                    <div className='mt-2'>
                      <button
                        onClick={onClick}
                        className='text-blue-900 text-sm '
                      >
                        <span>Read More</span>
                      </button>
                    </div>
                  </div>
                )}

                {data.birthday && (
                  <div className='flex flex-wrap mt-8 items-center'>
                    <span className='font-semibold'>Born: </span>
                    <span className='ml-2'>
                      <Moment format='D MMMM YYYY'>{data.birthday}</Moment>
                      {!data.deathday && (
                        <span className='ml-2 text-sm italic'>
                          (
                          <Moment fromNow ago>
                            {data.birthday}
                          </Moment>{" "}
                          old),
                        </span>
                      )}
                    </span>
                    <a
                      href={`https://www.google.com/search?q=${data.place_of_birth}`}
                      target='_blank'
                      className='ml-2 text-blue-600 cursor-pointer underline'
                    >
                      {" "}
                      {data.place_of_birth}
                    </a>
                  </div>
                )}

                {data.deathday && (
                  <div className='flex flex-wrap mt-2 items-center '>
                    <span className='font-semibold'>Death: </span>

                    <span className='ml-2'>
                      {" "}
                      <Moment format='D MMMM YYYY'>{data.deathday}</Moment>
                    </span>
                    <span className='ml-2 text-sm italic'>
                      (
                      <Moment to={data.birthday} ago>
                        {data.deathday}
                      </Moment>{" "}
                      old)
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className='movie-cast border-t border-gray-800'>
              <div className='container mx-auto px-4 py-16'>
                <h2 className='text-4xl font-semibold'>
                  Movies with {data.name}
                </h2>
                <div className='mt-2'>
                  <div className='relative inline-block text-left'>
                    <div>
                      <span className='rounded-md shadow-sm text-gray-500'>
                        <button
                          onClick={onClickSort}
                          type='button'
                          className='inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 text-sm leading-5 font-medium  hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
                          id='options-menu'
                          aria-haspopup='true'
                          aria-expanded='true'
                        >
                          Sort by
                          <svg
                            className='-mr-1 ml-2 h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                          </svg>
                        </button>
                      </span>
                    </div>
                    {showOptions && <Sortby />}
                  </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                  {actorMovie.results.length &&
                    actorMovie.results.map((credit, i) => (
                      <Link key={i} to={`/movie/${credit.id}`}>
                        <div className='mt-8'>
                          <img
                            alt='Placeholder'
                            className='hover:opacity-75 transition ease-in-out duration-150'
                            src={
                              !credit.poster_path
                                ? NotFound
                                : `https://image.tmdb.org/t/p/w600_and_h900_bestv2${credit.poster_path}`
                            }
                            alt={data.title}
                          />
                          <div className='mt-2'>
                            <div className='text-gray-400'>{credit.title}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
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
            </div>
          </div>
        </>
      )}
      {modal && <ActorModal onClick={onClick} bio={data.biography} />}
    </>
  );
};

export default ActorDetail;
