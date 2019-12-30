import React from "react";
import Counter from "../components/Counter";
import { RootState } from "../store/modules/index";
import { increase, diffnumplus } from "../store/modules/counter";
import { useSelector, useDispatch } from "react-redux";

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDiffnumplus = (diff: number) => {
    dispatch(diffnumplus(diff));
  };

  return (
    <>
      <Counter
        value={count}
        onIncrease={onIncrease}
        onDiffNumPlus={onDiffnumplus}
      />
    </>
  );
}

export default CounterContainer;
