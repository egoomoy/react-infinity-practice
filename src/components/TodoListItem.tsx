import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;
const TodoText = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`;
const TodoCheckBox = styled.div.attrs((props: any) => props)`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }

  ${(props: any) => {
    if (props.checked) {
      return css`
        svg {
          color: #22b8cf;
        }
        ${TodoText} {
          margin-left: 0.5rem;
          flex: 1;
          color: #adb5db;
          text-decoration: line-through;
        }
      `;
    }
  }};
`;

const TodoRemoveButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }: any) => {
  const { id, text, checked } = todo;
  return (
    <>
      <TodoListItemWrapper>
        <TodoCheckBox checked={checked} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <TodoText>{text}</TodoText>
        </TodoCheckBox>
        <TodoRemoveButton onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </TodoRemoveButton>
      </TodoListItemWrapper>
    </>
  );
};

export default TodoListItem;
