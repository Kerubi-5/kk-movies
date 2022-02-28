import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Movie from "../components/Movie";
import { fetchApi } from "../state/movieReducer";
import Loading from "./Loading";

const Movies = () => {
  const movies = useSelector((state) => state.movies.filtered);
  const loading = useSelector((state) => state.movies.loading);

  const dispatch = useDispatch();

  const renderMovies = () => {
    return movies.map((movie) => <Movie movie={movie} key={movie.id} />);
  };

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.section
          layout
          className="overflow-hidden container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-5 text-gray-700 max-w-screen-lg mx-auto pb-5"
        >
          <AnimatePresence>{renderMovies()}</AnimatePresence>
        </motion.section>
      )}
    </>
  );
};

export default Movies;
