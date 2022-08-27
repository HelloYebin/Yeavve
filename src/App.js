import "./App.css";

import Login from "./route/login";
import Home from "./route/Home";
import Join from "./route/Join";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/Yeavve/login" element={<Login />} />
        <Route path="/Yeavve/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
