import React, { useState, useMemo, Fragment } from 'react';

function HooksUseMemo() {
  const [mynum, setMynum] = useState<number>(0);
  const [List, setList] = useState<number[]>([1, 2]);

  const onChange = (e: any) => {
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
      return sum / numbers.length;
    }
  };

  const avg = useMemo(() => getAvg(List), [List]);

  console.log('랜더링');

  return (
    <Fragment>
      <h1>UseMemo</h1>

      <input value={mynum} onChange={onChange}></input>
      <button onClick={onClickAdd}>add</button>
      <h3>useMemo가 적용되지 않는 계산 값은 Input 박스의 값이 변경될 떄도 렌더링이 진행된다</h3>
      <div>useMemo 적용 전 평균값 계산 : {getAvg(List)}</div>
      <h3>useMemo가 적용되어 List가 바뀔 때만 렌더링이 진행된다</h3>
      <div>useMemo 적용 후 평균값 : {avg}</div>
      <h2>Number List</h2>
      <ul>
        {List.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default HooksUseMemo;
