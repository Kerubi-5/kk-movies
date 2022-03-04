import { motion } from "framer-motion";
import HoverButton from "./HoverButton";
const Movie = ({ movie }) => {
  const handleClick = (movie) => {
    console.log(movie);
  };
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 1, scale: 0 }}
      className="group"
    >
      <h1 className="font-bold tracking-wide truncate">{movie.title}</h1>
      <div className="relative">
        <img
          alt="gallery"
          className="rounded-lg w-full"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <div className="absolute opacity-0 group-hover:opacity-100 bg-black/75 top-0 bottom-0 left-0 right-0 flex flex-col gap-5 align-middle justify-center cursor-pointer duration-300 rounded-lg">
          <HoverButton
            onClick={() => {
              handleClick(movie);
            }}
          />
          <HoverButton
            onClick={() => {
              handleClick(movie);
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Movie;
