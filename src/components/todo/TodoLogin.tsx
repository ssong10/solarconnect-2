import React, { useState } from "react";
import TodoTemplate from "./template/TodoTemplate";
import Spinner from "components/common/Spinner";
import { Button,Input } from "antd";
import styled from 'styled-components'
import { errorInfo } from "components/common/Modal";
const Center = styled.div`
  display:flex;
  height:100%;
  justify-content:center;
  align-items:center;
`
const PasswordInput = styled(Input)`
  width:100%;
  margin-bottom: 12px;
`
const LoginContainer = styled.form`
  text-align: center;
`
const fetchLogin = ():Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve(true)
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

  const validation = () => password === PASSWORD
  const login = async () => {
    if (validation()){
      setIsLoading(true)
      const isLogin = await fetchLogin()
      setIsLoading(false)
      setIsLogged(isLogin)
    } else {
      errorInfo(`비밀번호가 틀렸습니다\n비밀번호는 ${PASSWORD}입니다`)
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