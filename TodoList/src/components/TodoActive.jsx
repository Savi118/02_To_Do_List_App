import { LuPencil } from "react-icons/lu";
import { FiDelete } from "react-icons/fi";

const TodoActive = () => {
  return (
    <div className="w-[45%]">
      <h2 className="text-lg text-center font-bold text-shadow-blue-400 text-shadow-xs ">
        Active Task
      </h2>
      <div className="border-2 gap-2 items-center p-4 flex max-w-[80%] min-h-[8vh] m-auto rounded-2xl bg-white/100">
        <input
          type="checkbox"
          name="complete"
          id="complete"
          className="w-4 h-4"
        />
        <div className=" w-[75%]">
          <h3 className="">Task Name</h3>
          <p className="text-xs ">DueDate</p>
        </div>
        <button className="p-1 text-xl rounded-md bg-amber-400 text-white">
          <LuPencil />
        </button>
        <button className=" p-1 text-xl rounded-md bg-red-800 text-white">
          <FiDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoActive;
