import React, { Fragment } from "react";

type CounterProps = {
  value: number;
  diff: number;
  onIncrease: () => void;
  onDiffNumPlus: (diff: number) => void;
};

function Counter({ value, diff, onIncrease, onDiffNumPlus }: CounterProps) {
  return (
    <Fragment>
      <h1>{value}</h1>
      <h1>{diff}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={() => onDiffNumPlus(diff)}>+diff</button>
    </Fragment>
  );
}

export default Counter;
