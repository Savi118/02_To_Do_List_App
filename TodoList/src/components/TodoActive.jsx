
import Todo from "./Todo";

const TodoActive = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div className="w-full md:w-[45%]">
      <h2 className="text-lg text-center font-bold text-shadow-blue-400 text-shadow-xs ">
        Active Task
      </h2>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoActive;
