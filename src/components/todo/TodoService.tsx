/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  expirationDate: String;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [ todoState, setTodoState] = useState(initialTodos);
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(todoState)
    saveData();
  }, [todoState]);

  const sortByCreate = () => {
    console.log('created sort')
    setTodoState(prevState => 
      [...prevState].sort((a,b)=> a.id - b.id)
    )
  }
  const sortByGoal = () => {
    console.log('goal sort')
    setTodoState(prevState => 
      [...prevState].sort((a,b) => a.expirationDate < b.expirationDate ? -1 : 1)
    )
  }
  const removeCompletedTodo = () => {
    setTodoState(prevState => 
      prevState.filter(todo => !todo.done)  
    )
  }
  const toggleTodo = (id: number) => {
    //@
    console.log('toggle',id)
    setTodoState(prevState => 
      prevState.map((todo:Itodo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done : !todo.done
          }
        } 
        return todo
      })
    )
  };

  const removeTodo = (id: number) => {
    console.log('remove',id)
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
    console.log('create',todo)
    setTodoState((prevState) =>
      prevState.concat(todo)
    );
  };

  const loadData = () => {
    let data = localStorage.getItem("todos");
    initialTodos = JSON.parse(data!) || []
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    toggleTodo,
    removeTodo,
    createTodo,
    sortByCreate,
    sortByGoal,
    removeCompletedTodo
  };
};
