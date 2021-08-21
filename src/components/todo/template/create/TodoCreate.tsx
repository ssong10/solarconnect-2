import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import { errorInfo } from 'components/common/Modal'
import { DatePicker } from 'antd';
import moment from 'moment';
type MomentDate = moment.Moment | null
const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;
const DateSelector = styled(DatePicker)`
  width:30%;
`
const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

interface TodoCreateProps {
  createTodo: (todo: Itodo) => void;
}

const TodoCreate = ({
  createTodo,
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [expirationDate, setExpirationDate] = useState<MomentDate>(moment());
  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const momentToString = (date:MomentDate) => {
    return date ? date.format('YYYY-MM-DD') : ""
  }
  const handleChangeDate = (date:any, dateString:string) => {
    setExpirationDate(date)
  }
  const validation = () => {
    if (!value.trim()) {
      errorInfo('할 일을 입력해 주세요')
      return false
    }
    if (!expirationDate) {
      errorInfo('목표 날짜를 입력해 주세요')
      return false
    }
    return true
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    if (validation()) {
      createTodo({
        id: moment.now(),
        text: value,
        expirationDate: momentToString(expirationDate),
        done: false
      });  
      setValue(""); // input 초기화
      setExpirationDate(moment())
      setOpen(false); // open 닫기
    }
  }
  
  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
          <DateSelector
            onChange={handleChangeDate}
            placeholder="Target Date"
            value={expirationDate}
          />
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
