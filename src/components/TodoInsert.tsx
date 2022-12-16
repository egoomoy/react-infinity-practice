import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsertForm = styled.form`
  display: flex;
  background: #495057;
`;

const TodoInsertInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const TodoInsertButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = ({ onInsert }: any) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <>
      <TodoInsertForm onSubmit={onSubmit}>
        <TodoInsertInput placeholder="tototodododo" value={value} onChange={onChange} />
        <TodoInsertButton type="submit">
          <MdAdd />
        </TodoInsertButton>
      </TodoInsertForm>
    </>
  );
};

export default TodoInsert;
