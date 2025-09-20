import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import AppName from "./AppName";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("todoTasks");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("todoTasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
    }
  }, [tasks]);

  const addTasks = (text, dueDate = null) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTask = {
      id: `${Date.now()} - ${Math.floor(Math.random() * 1000)}`,
      text: trimmedText,
      dueDate,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText, newDueDate) => {
    const trimmedText = newText.trim();
    if (!trimmedText) return;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, text: trimmedText, dueDate: newDueDate }
          : task
      )
    );
  };

  return (
    <div className="w-[80vw] p-4 min-h-[90vh] rounded-xl m-10 border bg-green-50 shadow-2xl shadow-black/70 not-last:">
      <AppName />
      <AddTodo addTasks={addTasks} />
      <TodoList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default TodoContainer;
