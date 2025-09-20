import { useState } from "react";

const AddTodo = ({ addTasks }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    addTasks(trimmedText, dueDate || null);

    setText("");
    setDueDate("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="mt-10 w-full md:w-[70%] m-auto p-2 flex flex-col md:flex-row justify-evenly items-center gap-2">
      <input
        type="text"
        placeholder="Enter Your Task"
        className="border-2 w-full md:w-[50%] text-center p-2 text-xl rounded-md bg-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        type="date"
        name="dueDate"
        id="dueDate"
        className="border-black border-2 p-2 bg-white rounded-md w-full md:w-[20%] text-center text-xl "
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button
        onClick={handleAdd}
        disabled={!text.trim()}
        className="border-black border-2 rounded-md w-full md:w-[15%] text-2xl p-1 bg-blue-200 text-orange-500 "
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
