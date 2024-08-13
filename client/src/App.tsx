import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Landing from "./components/pages/Landing";
import HorrorHome from "./components/pages/HorrorHome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/horror" element={<HorrorHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
