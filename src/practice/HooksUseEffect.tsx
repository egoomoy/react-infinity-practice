import React, { useState, useEffect, useCallback } from 'react';

function HooksUseEffect() {
  const [book, setBook] = useState<string>('마션');
  const [mountState, setMountState] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeBookName = (e: any) => {
    setBook(e.target.value);
  };

  const changeBookNameHooks = useCallback((e: any) => {
    setBook(e.target.value);
  }, []);

  useEffect(() => {
    console.log('book name 변경');
    return () => {
      console.log('clean up');
    };
  }, [book]);

  useEffect(() => {
    console.log('최초 마운트 실행');
    setMountState(7);
    return () => {
      console.log('clean up');
    };
  }, []);

  return (
    <div>
      <h1>HooksUseEffect</h1>
      <div>컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 하는 Hooks</div>
      <h2>useEffect Test 01, 특정 값 업데이트 시 실행</h2>
      <input type="text" onChange={changeBookNameHooks} value={book} />
      <div>Book State : {book}</div>

      <h2>useEffect Test 02, 최초 마운트에서만 실행</h2>
      <div>Mount State : {mountState} 최초 마운트에서만 실행(value 0 to 7)</div>
    </div>
  );
}

export default HooksUseEffect;
