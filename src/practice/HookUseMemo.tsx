import React, { useState, useMemo, Fragment } from 'react';

function HookUseMemo() {
  const [mynum, setMynum] = useState<number>(0);
  const [List, setList] = useState<number[]>([1, 2]);

  const onChange = (e: any) => {
    console.log('test');
    setMynum(e.target.value);
  };

  const onClickAdd = () => {
    const nextList = List.concat([Number(mynum)]);
    setList(nextList);
  };

  const getAvg = (numbers: number[]) => {
    if (numbers.length === 0) return 0;
    else {
      const sum = numbers.reduce((a, b) => a + b);
      console.log(sum);
      console.log(numbers.length);

      return sum / numbers.length;
    }
  };

  const avg = useMemo(() => getAvg(List), [List]);
  return (
    <Fragment>
      <h1>UseMemo</h1>
      <input value={mynum} onChange={onChange}></input>
      <button onClick={onClickAdd}>add</button>
      <h3>useMemo 적용 전 평균값 계산 : {getAvg(List)}</h3>
      <h3>useMemo 적용 후 평균값 : {avg}</h3>
      <h2>Number List</h2>
      <ul>
        {List.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default HookUseMemo;