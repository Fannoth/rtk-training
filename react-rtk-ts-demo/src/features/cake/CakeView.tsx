import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { ordered, restocked } from "./cakeSlice";
const CakeView = () => {
  const [value, setValue] = useState(1);
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      ></input>
      <button onClick={() => dispatch(restocked(value))}>Restore cakes</button>
    </div>
  );
};

export default CakeView;
