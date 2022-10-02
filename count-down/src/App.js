import "./App.css";
import { CountDown } from "./components/Counter/CountDown";

function App() {
  return (
    <div className="App">
      <CountDown timeLimit={15} />
    </div>
  );
}

export default App;
