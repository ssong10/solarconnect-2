import React, { useState } from "react";
import "antd/dist/antd.css";
import TodoContainer from "./components/todo/TodoContainer";
import TodoLogin from './components/todo/TodoLogin'

function App() {
  //@TODO login
  const [ isLogged , setIsLogged ] = useState(false)
  return (
    isLogged ? 
      <TodoContainer /> :
      <TodoLogin setIsLogged={setIsLogged}/>
  ) 
}

export default App;
