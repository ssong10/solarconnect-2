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
  const [ nextIdState, setNextIdState ] = useState(1)
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    setNextIdState(prev => prev + 1)
  };

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
    if (initialTodos.length) {
      setNextIdState(initialTodos[initialTodos.length-1].id+1)
    }
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
