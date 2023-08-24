import "./style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
