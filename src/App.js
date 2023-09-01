import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Actions/index";
export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment and Decrement Counter</h1>
        <h4>Using React And redux</h4>
        <div className="quantity">
          <a
            className="quantity_button"
            title="Decrement"
            onClick={() => dispatch(decNumber)}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a
            className="quantity_button"
            title="Increment"
            onClick={() => dispatch(incNumber)}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}
