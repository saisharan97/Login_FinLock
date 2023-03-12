import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = () => (
  <div className="background-container">
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </div>
);

export default App;
