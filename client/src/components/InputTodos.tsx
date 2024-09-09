import React, { useState } from "react";

const InputTodos : React.FC = () => {
  
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <div className="h-screen flex flex-col bg-gradient-to-br from-green-200 to-white">
        <h1 className="text-5xl font-bold flex justify-center pt-10 pb-2 text-green-500">Listly</h1>
        <form className="flex justify-center mt-12">
          <div className="relative w-4/12">
            <input
              type="text"
              placeholder="Enter your todo"
              className="outline-none w-full py-3 px-3 rounded-3xl"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bg-green-500 px-3 py-2 rounded-3xl"
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InputTodos;
