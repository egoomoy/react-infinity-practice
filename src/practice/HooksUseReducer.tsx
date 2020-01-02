import React, { useReducer, Fragment } from 'react';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INC':
      return {
        value: state.value + 1,
        value2: state.value2 + 3,
      };
    default:
      return false;
  }
};

const inputReducer = (state: any, action: any) => {
  console.log(action);
  return {
    ...state,
    [action.name]: action.value,
  };
};

function HooksUseReducer() {
  const initialState = {
    value: 10,
    value2: 10,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [inputState, inputDispatch] = useReducer(inputReducer, { name: '', bio: '' });
  const { name, bio } = inputState;
  const onChange = (e: any) => {
    inputDispatch(e.target);
  };

  return (
    <Fragment>
      <div style={{ width: '50%', float: 'left' }}>
        <h1>useReducer</h1>
        <div>switch에서 default로 false를 주기 대문에 구문에서 삼항연산자를 한다.</div>
        <div>value1 : {state !== false ? state.value : 1}</div>
        <div>value2 : {state !== false ? state.value2 : 1}</div>
        <br></br>
        <button onClick={() => dispatch({ type: 'INC' })}>+1</button>
      </div>
      <div style={{ width: '50%', float: 'right' }}>
        <h1>useReducer input</h1>
        <div>input을 useReducer로 useState를 안쓰고 간소화하자.</div>
        <input name="name" value={name} onChange={onChange} />
        <input name="bio" value={bio} onChange={onChange} />
        <div>이름 : {name}</div>
        <div>bio : {bio}</div>
      </div>
    </Fragment>
  );
}

export default HooksUseReducer;
