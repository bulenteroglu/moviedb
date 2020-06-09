import axios from "axios";

export const getUpcoming = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );

    return results;
  } catch (error) {
    console.log(error);
  }
};
