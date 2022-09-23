import React, { useState } from "react";
import { PageContext } from "./Context";

import TopNav from './components/TopNav/TopNav'
import { PageComp } from './components/PageComp/PageComp'
import { PageComp01 } from './components/PageComp01/PageComp01'
import { PageComp02 } from './components/PageComp02/PageComp02'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [value, setValue] = useState("/");

  return (
    <PageContext.Provider value={{ value, setValue }}>

      <div className="overall-layout">
        <Router>
          <TopNav />
          <Routes>
            <Route path="/page00" element={<PageComp />} />
            <Route path="/page01" element={<PageComp01 />} />
            <Route path="/page02" element={<PageComp02 />} />
          </Routes>
        </ Router>
      </div>
    </PageContext.Provider>
  );
}

export default App;
