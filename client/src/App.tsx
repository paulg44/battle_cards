import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import HorrorHome from "./components/pages/HorrorHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/horror" element={<HorrorHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
