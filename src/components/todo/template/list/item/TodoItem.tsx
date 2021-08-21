import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, DatePicker } from "antd";
import { Itodo } from "components/todo/TodoService";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import moment from 'moment'
import { errorInfo } from "components/common/Modal";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;
const DateString = styled.div<{ done: boolean }>`
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
  margin-right: 20px;
`
const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
const EditInput = styled(Input)`
  flex: 1;
`
interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
  editTodo: (id:number,obj:Partial<Itodo>)=> void;
}

const TodoItem = ({ toggleTodo, removeTodo, todo ,editTodo }: TodoItemProps) => {
  const { id, text, done, expirationDate } = todo
  const [ isEdit, setEdit ] = useState(false) 
  const [ isDateEdit, setDateEdit ] = useState(false)
  const handleToggle = () => {
    toggleTodo(id)
  };
  const handleRemove = () => {
    removeTodo(id)
  };
  const toggleEdit = () => setEdit(prev => !prev)
  const toggleEditDate = () => setDateEdit(prev => !prev)
  const closeEdit = () => {
    setEdit(false)
    setDateEdit(false)
  }
  
  const handlerKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      toggleEdit()
    }
  }
  const handlerEnter = (e:React.SyntheticEvent<HTMLInputElement,KeyboardEvent>) => {
    editTodo(id, {text:e.currentTarget.value})
    setEdit(false)
  }
  const handlerDate = (date:moment.Moment | null, dateString:string)=> {
    if (date) {
      editTodo(id, { expirationDate : dateString})    
      setDateEdit(false)
    } else {
      errorInfo('목표 날짜를 입력해 주세요')
    }
  }

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <CheckOutlined />}
      </CheckCircle>
      { 
        isEdit ?
          <EditInput autoFocus onKeyDown={handlerKeyPress} onPressEnter={handlerEnter} defaultValue={text} onBlur={closeEdit}/> :
          <Text done={done} onDoubleClick={toggleEdit}>{text}</Text>
      }
      { 
        isDateEdit ?
          <DatePicker autoFocus onChange={handlerDate} defaultValue={moment(expirationDate ,'YYYY-MM-DD')} onBlur={closeEdit}/> :
          <DateString done={done} onDoubleClick={toggleEditDate}>~ {expirationDate}</DateString> 
      }
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
