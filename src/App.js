import "./style.scss";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
    </div>
  );
};

export default App;
