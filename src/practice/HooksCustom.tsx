import React, { Fragment } from 'react';
import useInputs from '../utils/useInput';
// 커스텀 훅을 정의해본다.

function HooksCustom() {
  const initialState = {
    name: '',
    nickname: '',
  };

  const [state, onChange] = useInputs(initialState);
  const { name, nickname } = state;

  return (
    <Fragment>
      <h1>HooksCustom</h1>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>

      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </Fragment>
  );
}

export default HooksCustom;
