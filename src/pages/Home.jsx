import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { AppProvider } from "../components/AppContext";

const Home = () => {
  return (
    <AppProvider>
    <>
      <Header />
      <Body />
      <Footer />
    </>
    </AppProvider>
  );
};

export default Home;
