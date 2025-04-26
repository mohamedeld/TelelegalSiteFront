import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import socket from "./utilities/socketConnection";
import MainVideoPage from "./pages/MainVideoPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-video" element={<MainVideoPage />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
