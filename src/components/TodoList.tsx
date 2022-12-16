import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
  border: 1px solid #dee2e6;
`;

type todoType = {
  id: number;
  text: string;
  checked: boolean;
};

const TodoList = ({ todos, onRemove, onToggle }: any) => {
  return (
    <>
      <TodoListWrapper>
        {todos.map((todo: todoType) => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </TodoListWrapper>
    </>
  );
};

export default TodoList;
