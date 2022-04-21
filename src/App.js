import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Canvas from './Modules/Canvas'
import Home from "./Modules/Home/Home";
import "./Styles/main.css"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="weather/:location" element={<Canvas />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return <Canvas />
}

export default App
