import { useAuth0 } from "@auth0/auth0-react";
const SavedMovies = () => {
  const { getAccessTokenSilently, user } = useAuth0();

  const publicRoute = async () => {
    const accessToken = await getAccessTokenSilently();

    fetch(`http://localhost:5000/saved?email=${user.email}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      }),
    })
      .then((data) => data.json())
      .then((resp) => console.log(resp));
  };

  return (
    <>
      <h1>Saved Movies</h1>

      <button className="p-4 border-2" onClick={publicRoute}>
        Public
      </button>
    </>
  );
};

export default SavedMovies;
