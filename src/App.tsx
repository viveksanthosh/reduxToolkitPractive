import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { actions as counterAction } from "./store/slices/counterSlice";

function App() {
  let pending = false;
  const counter = useSelector((state: RootState) => state.counter.value);
  const disparcher = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={() => disparcher(counterAction.incrementCounter(6))}>
        Vite + React
      </h1>
      <div className="card">
        {pending ? <h2>Loading</h2> : <button>count is {counter}</button>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
