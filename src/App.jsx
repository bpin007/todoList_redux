import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo("");
  };

  const { todos } = Todo;

  console.log(Todo);

  const removeHanler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <>
      <p className="text-3xl text-purple-950 font-bold ">
        Todo List using Redux
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center  gap-2 mx-auto  mt-3">
          <input
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border-2 border-solid border-black p-1 rounded-lg"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-3 rounded-lg"
          >
            go
          </button>
        </div>
      </form>
      <div>
        {todos &&
          todos.map((items) => {
            return (
              <>
                <div className="flex justify-between p-4 items-center gap-2 bg-cyan-400 md:w-[20%] mx-auto rounded-2xl mt-3">
                  <p className="text-white font-bold text-lg"> {items.todo}</p>
                  <button
                    onClick={() => removeHanler(items)}
                    className="bg-red-700 text-white px-3 rounded-lg"
                  >
                    delete
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
