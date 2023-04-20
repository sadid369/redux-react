import "./App.css";
import { incNumber, decNumber } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Increment / Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div>
          <a onClick={() => dispatch(decNumber())}>-</a>
          <input value={myState} />
          <a onClick={() => dispatch(incNumber())}>+</a>
        </div>
      </div>
    </>
  );
}

export default App;
