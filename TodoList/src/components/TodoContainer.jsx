import AddTodo from "./AddTodo";
import AppName from "./AppName";
import TodoList from "./TodoList";

const TodoContainer = () => {
  return (
    <div className="w-[80vw] p-4 min-h-[90vh] rounded-xl m-10 border bg-green-50 shadow-2xl shadow-black/70 not-last:">
      <AppName />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
