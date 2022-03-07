import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState();
  const { getAccessTokenSilently, user } = useAuth0();

  const renderList = () => {
    return savedMovies.map((item) => {
      return (
        <div>
          Name: {item.name} imgSrc: {item.imgSrc} <br />
        </div>
      );
    });
  };
  useEffect(() => {
    const fetchSavedMoviesApi = async () => {
      const accessToken = await getAccessTokenSilently();

      fetch(`http://localhost:5000/saved?email=${user?.email}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${accessToken}`,
        }),
      })
        .then((data) => data.json())
        .then((resp) => {
          const [x] = resp.results;
          setSavedMovies(x.movies);
        });
    };

    fetchSavedMoviesApi();
  }, [getAccessTokenSilently, user?.email]);

  return <>{user ? renderList() : <Loading />}</>;
};

export default SavedMovies;
