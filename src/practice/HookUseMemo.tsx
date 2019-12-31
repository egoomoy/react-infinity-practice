import React, { useState, useMemo, Fragment } from 'react';

function HookUseMemo() {
  const [mynum, setMynum] = useState<number>(0);
  const [List, setList] = useState<number[]>([]);

  const onChange = (e: any) => {
    setMynum(e.target.value);
  };

  const onClickAdd = () => {
    const nextList = List.concat([mynum]);
    setList(nextList);
  };

  const getAvg = (numbers: number[]) => {
    if (numbers.length === 0) return 0;
    else {
      let sum = 0;
      numbers.map(row => sum + row);
      return sum / numbers.length;
    }
  };
  return (
    <Fragment>
      <h1>UseMemo</h1>
      <input value={mynum} onChange={onChange}></input>
      <button onClick={onClickAdd}>add</button>
      <ul>
        {List.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default HookUseMemo;
