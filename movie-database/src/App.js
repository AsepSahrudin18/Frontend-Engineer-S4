/**
 * import this component
 */

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/Movie/Create";
import Playing from "./pages/Playing/Playing";
import Popular from "./pages/Popular/Popular";
import TopRatedMovie from "./pages/TopReted/TopRated";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/now" element={<Playing />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
