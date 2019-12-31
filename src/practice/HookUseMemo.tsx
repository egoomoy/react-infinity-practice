import React, { useState, useMemo, Fragment } from 'react';

function HookUseMemo() {
  type numberList = { value: number };
  const [mynum, setMynum] = useState<numberList['value']>(0);
  const [List, setList] = useState<numberList[]>([]);

  const onChange = (e: any) => {
    setMynum(e.target.value);
  };

  const onClickAdd = () => {
    const temp = [mynum];
    const nextList = List.concat(temp);
    setList(nextList);
  };

  const getAvg = (numbers: numberList[]) => {
    if (numbers.length === 0) return 0;
    else {
      const sum: number = 0;
      numbers.map(row => console.log());
    }
  };
  return (
    <Fragment>
      <h1>UseMemo</h1>
      <input value={mynum} onChange={onChange}></input>
      <button onClick={onClickAdd}>add</button>
    </Fragment>
  );
}

export default HookUseMemo;
