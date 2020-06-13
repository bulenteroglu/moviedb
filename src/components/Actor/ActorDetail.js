import React, { useEffect, useState } from "react";
import NotFound from "../../Utils/img/no-image-found.png";
import DocumentTitle from "react-document-title";
import ReactLoading from "react-loading";
import { getPerson } from "../../api";
import ActorModal from "./ActorModal";

const ActorDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      window.scrollTo(0, 0);
      setData(await getPerson(id));
      setTimeout(() => {
        setLoaded(true);
      }, 300);
    };

    fetchAPI();
  }, []);

  console.log(data);

  //   console.log(data.biography.length);

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

                {data.biography.length < 700 ? (
                  <p className='text-gray-300 mt-8'>{data.biography}</p>
                ) : (
                  <div>
                    <p className='text-gray-300 mt-8'>
                      {data.biography.substring(0, 900) + "....."}
                    </p>
                    <div className='mt-2'>
                      <button
                        onClick={onClick}
                        className='text-blue-600 rounded text-sm focus:outline-none '
                      >
                        <span>Read More</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className='flex flex-wrap mt-8 items-center '>
                  <span className='font-semibold'>Birth Location: </span>
                  <p className='ml-2'>{data.place_of_birth}</p>
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
