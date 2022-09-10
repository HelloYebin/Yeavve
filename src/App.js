import "./App.css";

import Login from "./route/login";
import Home from "./route/Home";
import Join from "./route/Join";
import Header from "./component/header";
import Footer from "./component/footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Detail from "./component/detail";

function App({}) {
  const [log, setLog] = useState(false);
  const changeLog = (value) => {
    setLog(value);
  };

  return (
    <div>
      <BrowserRouter>
        <Header logState={log} changeLog={changeLog} />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route
            path="/Yeavve/login"
            element={<Login changeLog={changeLog} />}
          />
          <Route path="/Yeavve/join" element={<Join />} />
          <Route path="/Yeavve/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
