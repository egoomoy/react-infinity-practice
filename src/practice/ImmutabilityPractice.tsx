import React, { useState, Fragment, useCallback, useRef } from 'react';

function ImmutabilityPractice() {
  const nextid = useRef(1);
  const [form, setForm] = useState({ name: '', bio: '' });
  const [list, setList] = useState<any>({
    array: [],
    useless: null,
  });

  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form],
  );

  const onSubmit = useCallback(
    e => {
      //submit의 새로고침 방지
      e.preventDefault();
      const data = {
        id: nextid.current,
        name: form.name,
        bio: form.bio,
      };

      setList({
        ...list,
        array: list.array.concat(data),
      });

      setForm({
        name: '',
        bio: '',
      });
      nextid.current++;
    },
    [form.bio, form.name, list],
  );

  const onRemove = useCallback(
    id => {
      setList({
        ...list,
        array: list.array.filter((row: any) => row.id !== id),
      });
    },
    [list],
  );

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input name="name" onChange={onChange} value={form.name} />
        <input name="bio" onChange={onChange} value={form.bio} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {list.array.map((row: any) => (
          <li key={row.id} onClick={() => onRemove(row.id)}>
            {row.name}, {row.bio}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default React.memo(ImmutabilityPractice);
