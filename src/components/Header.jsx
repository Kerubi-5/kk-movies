import { useDispatch } from "react-redux";
import { filterMovies } from "../state/movieReducer";

const Header = () => {
  const dispatch = useDispatch();
  const handleSearch = (val) => {
    dispatch(filterMovies(val));
  };
  return (
    <nav className="sticky top-0 z-[1000] flex justify-between items-center mx-auto mb-10 px-4 h-16 shadow-lg hover:bg-white duration-300">
      <div className="flex items-center">
        <h1 className="text-3xl">KK</h1>
        <div className="flex items-center bg-gray-200 p-2 rounded-full ml-2">
          <i className="bx bx-search-alt-2 text-gray-600 ml-2"></i>
          <input
            className="flex items-center mx-2 bg-transparent outline-none"
            type="text"
            placeholder="Search KK Movies"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex gap-5 over">
        <a
          className="border-transparent border-b-2 hover:border-b-slate-600 duration-300"
          href="/movies"
        >
          Movies
        </a>
        <a
          className="border-transparent border-b-2 hover:border-b-slate-600 duration-300"
          href="saved"
        >
          Saved List
        </a>
        <button className="border-transparent border-b-2 hover:border-b-slate-600 duration-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
