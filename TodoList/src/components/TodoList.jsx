import TodoActive from "./TodoActive";
import TodoComplete from "./TodoComplete";

const TodoList = ({ tasks, onToggle, onDelete, onEdit }) => {
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="p-4 w-[90%] m-auto mt-4 flex justify-evenly">
      <TodoActive
        tasks={activeTasks}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />

      {/* 3️⃣ Completed tasks */}
      <TodoComplete
        tasks={completedTasks}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default TodoList;
