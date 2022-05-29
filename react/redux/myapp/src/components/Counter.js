import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../demo-redux";



const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);

  const dispatch = useDispatch();






  ////////////////////////////////////

  const handleIncrement = () => {
    dispatch(counterAction.increment())
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement())
  };

  const handleIncrement5 = () => {
    dispatch(counterAction.increase(5))
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter ())
  };

  ////////////////////////////////////





  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement5}>Increment by 5</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
