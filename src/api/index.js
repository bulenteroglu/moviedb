import axios from "axios";

export const getUpcoming = async (currentPage) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopRated = async (currentPage) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTrailer = async (id) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
