import "./App.css";
import { Navigation } from "./Components";
import { Router } from "./router/Router";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
