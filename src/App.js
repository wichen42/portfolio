import "./style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
