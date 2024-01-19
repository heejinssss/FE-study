import logo from "./logo.svg";
import "./App.css";
import BabylonBoard from "./pages/babylon";

function App() {
  const pin = 3;

  return (
    <div className="App">
      <BabylonBoard pin={pin} />
    </div>
  );
}

export default App;
