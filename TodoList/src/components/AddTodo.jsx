const AddTodo = () => {
  return (
    <div className=" mt-10 w-[70%] m-auto p-2 flex justify-evenly items-center">
      <input
        type="text"
        placeholder="Enter Your Task"
        className="border-2 w-[50%] text-center p-2 text-xl rounded-md bg-white"
      />
      <input
        type="date"
        name="dueDate"
        id="dueDate"
        className="border-black border-2 p-2 bg-white rounded-md w-[20%] text-center text-xl "
      />
      <button className="border-black border-2 rounded-md w-[15%] text-2xl p-1 bg-blue-200 text-orange-500 ">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
