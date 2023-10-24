import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";

const App = () => {
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
