import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { FiDelete } from "react-icons/fi";

const Todo = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editDueDate, setEditDueDate] = useState(task.dueDate || "");

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (!trimmedText) return;
    onEdit(task.id, trimmedText, editDueDate || null);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
    setEditDueDate(task.dueDate || "");
  };

  return (
    <div className="border-2 gap-2 items-center p-4 flex flex-col sm:flex-row max-w-full min-h-[8vh] m-auto rounded-2xl bg-white/100 mb-4">
      <input
        type="checkbox"
        checked={task.completed}
        className="w-4 h-4"
        onChange={() => onToggle(task.id)}
      />

      <div className="w-[75%]">
        {isEditing ? (
          <div className="flex flex-col gap-1">
            <input
              type="text"
              className="border p-1 rounded"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <input
              type="date"
              className="border p-1 rounded"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <h3
              className={`${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </h3>
            <p className="text-xs">{task.dueDate}</p>
          </div>
        )}
      </div>

      {isEditing ? (
        <>
          <button
            className="p-1 text-xl rounded-md bg-green-500 text-white"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="p-1 text-xl rounded-md bg-gray-500 text-white"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <button
            className="w-full sm:w-auto p-1 text-xl rounded-md bg-amber-400 text-white"
            onClick={() => setIsEditing(true)}
          >
            <LuPencil />
          </button>
          <button
            className="w-full sm:w-auto p-1 text-xl rounded-md bg-red-800 text-white"
            onClick={() => onDelete(task.id)}
          >
            <FiDelete />
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
