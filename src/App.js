import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import AboutContainer from "./pages/aboutContainer";
import GearContainer from "./pages/gearContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AboutContainer />} />
            <Route path="/gear" element={<GearContainer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App;
