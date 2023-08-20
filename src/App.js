import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import AddMovies from "./pages/AddMovies";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path={`/details/:id`} element={<Details />} />
          <Route path="/add" element={<AddMovies />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
