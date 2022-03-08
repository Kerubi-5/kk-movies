import { motion } from "framer-motion";
import HoverButton from "./HoverButton";
import { useAuth0 } from "@auth0/auth0-react";

const Movie = ({ movie }) => {
  const heartIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    );
  };

  const eyeIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-slate-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    );
  };
  const { getAccessTokenSilently, user } = useAuth0();
  const handleClick = async (movie) => {
    const accessToken = await getAccessTokenSilently();

    let data = {
      email: user.email,
      id: movie.id,
      name: movie.title,
      imgSrc: movie.poster_path,
    };

    let request = new Request("https://kk-movies.herokuapp.com/saved", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      }),
    });

    fetch(request)
      .then((data) => data.json())
      .then((resp) => console.log(resp));
  };

  const getDetail = (movie) => {
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
        <div className="absolute opacity-0 group-hover:opacity-100 bg-black/75 top-0 bottom-0 left-0 right-0 flex flex-1 flex-col gap-5 align-middle justify-center cursor-pointer duration-300 rounded-lg">
          <HoverButton
            click={() => {
              handleClick(movie);
            }}
            icon={heartIcon}
          >
            Save
          </HoverButton>
          <HoverButton
            click={() => {
              getDetail(movie);
            }}
            icon={eyeIcon}
          >
            Details
          </HoverButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Movie;
