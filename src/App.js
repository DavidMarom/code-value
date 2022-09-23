import React, { useState } from "react";
import { PageContext } from "./Context";

import TopNav from './components/TopNav/TopNav'
import { Main } from './components/Main/Main'
import { PageComp } from './components/AddItemPage/AddItemPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [value, setValue] = useState("/");

  return (
    <PageContext.Provider value={{ value, setValue }}>

      <div className="overall-layout">
        <Router>
          <TopNav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add" element={<PageComp />} />
          </Routes>
        </ Router>
      </div>
    </PageContext.Provider>
  );
}

export default App;
