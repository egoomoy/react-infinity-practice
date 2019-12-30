import React, { Fragment, useState } from "react";

type CounterProps = {
  value: number;
  onIncrease: () => void;
  onDiffNumPlus: (diff: number) => void;
};

function Counter({ value, onIncrease, onDiffNumPlus }: CounterProps) {
  const [diffNum, setDiffNum] = useState(7);
  const changeDiffNum = (e: any) => {
    setDiffNum(e.target.value);
  };
  return (
    <Fragment>
      <input type="text" onChange={changeDiffNum} value={diffNum} />
      <h1>{value}</h1>
      <h1>{diffNum}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={() => onDiffNumPlus(diffNum)}>+diff</button>
    </Fragment>
  );
}

export default Counter;
