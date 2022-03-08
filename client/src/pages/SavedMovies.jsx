import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const SavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState();
  const { getAccessTokenSilently, user, isLoading } = useAuth0();

  const renderList = () => {
    return savedMovies?.map((item) => {
      return (
        <div key={item.id} className="rounded-lg">
          <img
            className="rounded-lg"
            src={`https://image.tmdb.org/t/p/w500/${item.imgSrc}`}
            alt={"fave movies"}
          />
          <p className="text-sm capitalize text-slate-500">{item.name}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    const fetchSavedMoviesApi = async () => {
      const accessToken = await getAccessTokenSilently();

      fetch(`https://kk-movies.herokuapp.com/saved?email=${user?.email}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${accessToken}`,
        }),
      })
        .then((data) => data.json())
        .then((resp) => {
          const [x] = resp?.results ?? [];
          console.log(resp);
          console.log(x);

          setSavedMovies(x?.movies);
        });
    };

    if (!isLoading) fetchSavedMoviesApi();
  }, [getAccessTokenSilently, isLoading, user]);

  if (isLoading) return <Loading />;

  return (
    <>
      {user ? (
        <div className="border rounded-lg shadow-lg m-2 p-5">
          <div className="grid place-content-center text-center mb-5">
            <img className="rounded-full" src={user?.picture} alt="Profile" />
            <h4 className="">{user?.nickname}</h4>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">Favorite Movies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {renderList()}
            </div>
          </div>
        </div>
      ) : (
        "no user"
      )}
    </>
  );
};

export default SavedMovies;
