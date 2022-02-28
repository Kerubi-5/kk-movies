import { motion } from "framer-motion";
const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 1, scale: 0 }}
    >
      <h1 className="font-bold tracking-wide truncate">{movie.title}</h1>
      <img
        alt="gallery"
        className="rounded-lg w-full"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
    </motion.div>
  );
};

export default Movie;
