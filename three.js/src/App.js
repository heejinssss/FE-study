import "./App.css";
import ThreeBoard from "./pages/three";

function App() {
  const pin = 3;

  return (
    <div className="App">
      <ThreeBoard pin={pin} />
    </div>
  );
}

export default App;
