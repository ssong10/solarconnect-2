import { Itodo } from "components/todo/TodoService";
import React from "react";
import styled from "styled-components";
import TodoItem from "./item/TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

interface TodoListProps {
  todos: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id:number, obj:Partial<Itodo>) => void;
}

const TodoList = ({ toggleTodo, removeTodo, todos, editTodo }: TodoListProps) => {
  return (
    <TodoListBlock>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
          />
        ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);
