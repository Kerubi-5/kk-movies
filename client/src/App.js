import Header from "./components/Header";
import Movies from "./pages/Movies";
import SavedMovies from "./pages/SavedMovies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/saved" element={<SavedMovies />} />
        <Route path="*" element={"Not found"} />
      </Routes>
    </>
  );
}

export default App;
