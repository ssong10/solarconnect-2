import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const SortWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top : 16px;
`
interface TodoSortProps {
  sortByCreate: ()=> void;
  sortByGoal: ()=> void;
  removeCompletedTodo: ()=>void;
}
const TodoController: React.FC<TodoSortProps> = ({sortByCreate,sortByGoal,removeCompletedTodo}) => {
  return (
    <SortWrap>
      <Button onClick={sortByCreate}>생성 순</Button>
      <Button onClick={sortByGoal}>완료시간 순</Button>
      <Button onClick={removeCompletedTodo}>완료 제거</Button>
    </SortWrap>
  )


}
export default TodoController