import React, { Fragment } from 'react';

type CounterProps = {
  value: number;
  diff: number;
  onIncrease: () => void;
  onDiffNumPlus: (diff: number) => void;
};

function Counter({ value, diff, onIncrease, onDiffNumPlus }: CounterProps) {
  return (
    <Fragment>
      <h1>react-redux</h1>
      <div>store - container - component</div>
      <h2>{value}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={() => onDiffNumPlus(diff)}>+{diff} jump Number</button>
    </Fragment>
  );
}

export default Counter;
