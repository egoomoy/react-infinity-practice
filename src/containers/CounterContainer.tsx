import React, { useState } from 'react';
import Counter from '../components/Counter';
import { RootState } from '../store/modules/index';
import { increase, diffnumplus } from '../store/modules/counter';
import { useSelector, useDispatch } from 'react-redux';

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [diffNum, setDiffNum] = useState(5);

  const changeDiffNum = (e: any) => {
    setDiffNum(e.target.value);
  };

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDiffnumplus = (diff: number) => {
    dispatch(diffnumplus(diff));
  };

  return (
    <>
      <Counter value={count} diff={diffNum} onIncrease={onIncrease} onDiffNumPlus={onDiffnumplus} />
      <input type="text" onChange={changeDiffNum} value={diffNum} />
    </>
  );
}

export default CounterContainer;
