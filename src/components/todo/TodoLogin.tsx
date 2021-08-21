import React, { useState } from "react";
import TodoTemplate from "./template/TodoTemplate";
import Spinner from "components/common/Spinner";
import { Button,Input } from "antd";
import styled from 'styled-components'
import { errorInfo } from "components/common/Modal";
const Header = styled.div`
  font-size: 36px;
  margin: 50% 0;
  color: #119955;
`
const Center = styled.div`
  display:flex;
  height:100%;
  justify-content:center;
`
const PasswordInput = styled(Input)`
  width:100%;
  margin-bottom: 12px;
`
const LoginContainer = styled.form`
  height: 100%;
  text-align: center;
`
const fetchLogin = (password: string):Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      if (password === PASSWORD) {
        resolve(true)
      } else {
        resolve(false)
      }
    },500)
  })
}

interface LoginProps {
  setIsLogged: (state:boolean)=> void
}

const PASSWORD = 'a1'
const TodoLogin:React.FC<LoginProps> = ({ setIsLogged }) => {
  const [ isLoading , setIsLoading ] = useState(false)
  const [ password, setPassword ] = useState('')
  const login = async () => {
    setIsLoading(true)
    const isLogin = await fetchLogin(password)
    if (isLogin) {
      setIsLoading(false)
      setIsLogged(isLogin)
    } else {
      errorInfo(`비밀번호가 틀렸습니다\n비밀번호는 ${PASSWORD}입니다`)
      setIsLoading(false)
      setPassword('')
    }
  }
  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlerSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    login()
  }
  const LoginLayout = (
    <LoginContainer onSubmit={handlerSubmit}>
      <Header>
        <span>TodoList</span>
      </Header>
      <PasswordInput placeholder="암호를 입력해주세요" type="password" value={password} onChange={handlerChange}/>
      <Button onClick={handlerSubmit}>로그인</Button>
    </LoginContainer>
  )
  return (
    <TodoTemplate>
      <Center>
        {isLoading ? <Spinner /> : LoginLayout}
      </Center>
    </TodoTemplate>
  )
}

export default TodoLogin