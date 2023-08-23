import "./style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;
