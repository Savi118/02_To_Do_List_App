import TodoActive from "./TodoActive";
import TodoComplete from "./TodoComplete";

const TodoList = () => {
  return (
    <div className="p-4 w-[90%] m-auto mt-4 flex justify-evenly">
        <TodoActive />
        <TodoComplete />
      
    </div>
  );
};

export default TodoList;
