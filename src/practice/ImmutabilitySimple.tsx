import React, { Fragment } from 'react';

const array = [13, 4, 5, 3];
const immutabiltyArray = array;

const array2 = [1, 2, 3];
const goodArray = [...array2];

const to = [{ id: 1, name: 'te' }];
const nextto = [...to];

nextto[0].id = 1;
console.log(to[0] === nextto[0]);
console.log(to === nextto);

function ImmutabilitySimple() {
  return (
    <Fragment>
      <h1>SimpleImmutability</h1>
      <div>불변성을 알아보자 ...data(전개연산자, 스프레드연산자) </div>
      <h3>{array === immutabiltyArray ? 'array === immutabiltyArray return true' : '다름'}</h3>
      <h3>{array2 === goodArray ? '같음' : 'array2 === badArray return false'}</h3>
    </Fragment>
  );
}

export default ImmutabilitySimple;
