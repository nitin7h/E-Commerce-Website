import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Shopping from "./pages/Shopping";
import History from "./pages/History";
import Filter from "./pages/Filter";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shopping" element={<Shopping></Shopping>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>

          <Route path="/history" element={<History></History>}></Route>
          <Route path="/filter" element={<Filter></Filter>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
