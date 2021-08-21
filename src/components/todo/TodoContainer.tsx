import { useTodo } from "./TodoService";
import TodoTemplate from "./template/TodoTemplate";
import TodoHead from "./template/head/TodoHead";
import TodoList from "./template/list/TodoList";
import TodoCreate from "./template/create/TodoCreate";
import TodoFooter from "./template/footer/TodoFooter";
import TodoController from './template/controller/TodoController'
const TodoContainer = () => {
  const {
    todoState,
    toggleTodo,
    removeTodo,
    createTodo,
    editTodo,
    sortByCreate,
    sortByGoal,
    removeCompletedTodo
  } = useTodo();
  
  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate
          createTodo={createTodo}
        />
        <TodoController
          sortByCreate={sortByCreate}
          sortByGoal={sortByGoal}
          removeCompletedTodo={removeCompletedTodo}
        ></TodoController>
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
          todos={todoState}
        />
        <TodoFooter todos={todoState} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
