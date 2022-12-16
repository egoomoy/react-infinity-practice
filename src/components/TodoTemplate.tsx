import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const TodoTemplateWapper = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  overflow: hidden;
`;

const TodoAppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TodoAppContent = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <TodoTemplateWapper>
      <TodoAppTitle>투두투두투둘기야</TodoAppTitle>
      <TodoAppContent>{children}</TodoAppContent>
    </TodoTemplateWapper>
  );
};

export default TodoTemplate;
