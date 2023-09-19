import { useState } from "react";
import AddTodoModel from "./components/TodoModel";

function App() {
  const [todos, setTodos] = useState([]);
  const [isModelOpen, setModel] = useState(false);

  const handleAddTodo = (title, completed, id) => {
    setTodos([...todos, { id, title, completed }]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <>
      <h1 className="title">Todo App</h1>
      <div className="main-menu">
        <button onClick={() => setModel(true)}>Add Task</button>
        {isModelOpen && (
          <AddTodoModel setModel={setModel} addTodo={handleAddTodo} />
        )}
        {todos.length === 0 ? (
          <p>No Todos</p>
        ) : (
          <ul>
            {todos?.map((todo) => {
              return (
                <>
                  <li key={todo.id} className="todo">
                    {todo.completed ? (
                      <del>{todo.title}</del>
                    ) : (
                      <span>{todo.title}</span>
                    )}

                    <button
                      className="btn-delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      delete
                    </button>
                    <button
                      className="btn-complete"
                      onClick={() => completeTodo(todo.id)}
                    >
                      {todo.completed ? "incomplet" : "complete"}
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
