import React from "react";

const SearchPage = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default SearchPage;
