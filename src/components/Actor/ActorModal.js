import React from "react";

const ActorModal = ({ onClick, bio }) => {
  return (
    <div
      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
      className='fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto'
    >
      <div className='container mx-auto lg:px-32 rounded-lg overflow-y-auto'>
        <div className='bg-gray-900 rounded'>
          <div className='flex justify-end pr-4 pt-2'>
            <button
              onClick={onClick}
              className='text-2xl leading-none hover:text-gray-300'
            >
              x
            </button>
          </div>
          <div className='modal-body px-8 py-8'>
            <div className='responsive-container overflow-hidden relative'>
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorModal;
