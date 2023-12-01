import { useState } from "react";
import TodoItem from "./TodoItem";

const TodosContainer = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [hasError, setHasError] = useState(false);

  const onAddTodo = (todo: string) => {
    if (todo === "") {
      setHasError(true);
      return;
    }

    console.log(window.localStorage.getItem("auth"));

    setHasError(false);
    setTodos((currentTodos) => [...currentTodos, todo]);
    setText("");
  };

  const onDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, idx) => index !== idx));
  };
  return (
    <>
      <div className="card">
        <p>Add in a todo and click enter</p>
        <div>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button onClick={() => onAddTodo(text)}>Add</button>
        </div>
        {hasError && <div style={{ color: "red" }}>Cannot add empty todo</div>}
      </div>
      <div className="todo-item-container">
        {todos.map((todo, index) => (
          <TodoItem
            key={`todo-key-${index}`}
            todo={todo}
            index={index}
            handleDelete={onDeleteTodo}
          />
        ))}
      </div>
    </>
  );
};

export default TodosContainer;
