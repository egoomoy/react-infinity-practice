import React, { useRef, Fragment, useState } from 'react';

function HooksRef() {
  const ref = useRef(0);
  const setRef = (n: number) => {
    ref.current = n;
  };
  const ref_random = () => {
    let rand = Math.random() * 10;
    setRef(rand);
  };

  const [state, setstate] = useState(1);
  const onClike = () => {
    let rand = Math.random() * 10;
    setstate(rand);
  };
  const printRef = () => {
    console.log(ref.current);
  };

  console.log('============랜더링============');

  return (
    <Fragment>
      <h1>useRef</h1>
      <div>ref 변수는 값이 바뀌어도 랜더링이 안됨 즉 아래의 ref.current 는 log를 확인하면 변하지만, 화면에서는 변하지 않음</div>
      <button onClick={printRef}>ref.current : {ref.current}</button>
      <button onClick={ref_random}>ref_random</button>
      <button onClick={onClike}>state : {state}</button>
    </Fragment>
  );
}

export default HooksRef;
