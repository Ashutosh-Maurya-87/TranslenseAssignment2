import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Component/Navbar/Index";
import Home from "./Component/Home/Index";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
