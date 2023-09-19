import React, { useState } from "react";

const TodoModel = ({ setModel, addTodo }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <section className="todo-model">
        <h2 className="title">Add a Task</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            onChange={({ target }) => setCompleted(target.value)}
          >
            <option value={false}>Incompleted</option>
            <option value={true}>Finished</option>
          </select>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={() => {
              addTodo(title, completed);
              setModel(false);
            }}
          >
            Add
          </button>

          <button className="btn-cancel" onClick={() => setModel(false)}>
            Cancel
          </button>
        </div>
      </section>
      <div className="background" />
    </>
  );
};

export default TodoModel;
