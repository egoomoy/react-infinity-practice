import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

type todoType = {
  id: number;
  text: string;
  checked: boolean;
};
// FIXME:
function manyData() {
  const array: todoType[] = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `gkfdgkf ${i}`,
      checked: false,
    });
  }
  console.log(array);
  return array;
}

const Todo = () => {
  const nextId = useRef(4);

  //   const [todos, setTodos] = useState([
  //     {
  //       id: 1,
  //       text: '리액트 기초 알아보기',
  //       checked: false,
  //     },
  //     {
  //       id: 2,
  //       text: '도커하기',
  //       checked: true,
  //     },
  //     {
  //       id: 3,
  //       text: '카프카하기',
  //       checked: true,
  //     },
  //   ]);

  const [todos, setTodos] = useState(manyData);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    },
    [todos],
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
};

export default Todo;
