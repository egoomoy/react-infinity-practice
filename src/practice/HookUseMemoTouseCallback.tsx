import React, { useState, useMemo, Fragment, useCallback } from 'react';

function HookUseMemo() {
  const [mynum, setMynum] = useState<number>(0);
  const [List, setList] = useState<number[]>([2]);

  // const onChange = (e: any) => {
  //   setMynum(e.target.value);
  // };

  const onChange = useCallback((e: any) => {
    setMynum(e.target.value);
  }, []);

  // const onClickAdd = () => {
  //   const nextList = List.concat([Number(mynum)]);
  //   setList(nextList);
  // };

  const onClickAdd = useCallback(() => {
    const nextList = List.concat([Number(mynum)]);
    setList(nextList);
  }, [List, mynum]);

  const getAvg = (numbers: number[]) => {
    if (numbers.length === 0) return 0;
    else {
      const sum = numbers.reduce((a, b) => a + b);
      return sum / numbers.length;
    }
  };

  const avg = useMemo(() => getAvg(List), [List]);
  return (
    <Fragment>
      <h1>UseCallback</h1>
      <div>
        onChange나 onInput이나 등등 e.target.value로 부르는 것과 기능은 같지만, Render를 할 때 함수를 재생성하지 않는 점에 있어서 무조건 이걸
        사용해야함
      </div>
      <br></br>
      <input value={mynum} onChange={onChange}></input>
      <button onClick={onClickAdd}>add</button>
      {/* <h3>useMemo 적용 전 평균값 계산 : {getAvg(List)}</h3> */}
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
