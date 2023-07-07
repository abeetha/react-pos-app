import logo from "./logo.svg";
import "./App.css";
import FoodTypeTile from "./components/FoodTypeTile/FoodTypeTile";
import FoodTileContainer from "./components/FoodTypeTile/FoodTileContainer";
import MainLogo from "./components/NavBar/MainLogo";
import UpperNavBar from "./components/NavBar/UpperNavBar";

function App() {
  return (
    <div className="App">
      <UpperNavBar />
      <FoodTileContainer />
    </div>
  );
}

export default App;
