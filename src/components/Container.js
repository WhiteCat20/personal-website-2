import Hero from "./Hero";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";

function Container() {
  return (
    <>
      <div className="Container min-h-screen bg-sky-900">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default Container;
