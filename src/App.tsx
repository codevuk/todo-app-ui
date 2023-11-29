import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [hasError, setHasError] = useState(false);

  const onAddTodo = (todo: string) => {
    if(todo === "") {
      setHasError(true);
      return;
    }

    setHasError(false);
    setTodos((currentTodos) => [ ...currentTodos, todo]);
    setText("");
  }

  const onDeleteTodo = (index: number) => {
    setTodos(todos.filter((todo, idx) => index !== idx));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Todo App</h1>
      <div className="card">
        <p>Add in a todo and click enter</p>
        <div>
          <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
          <button onClick={() => onAddTodo(text)}>Add</button>
        </div>
        {hasError && <div style={{ color: "red" }}>Cannot add empty todo</div>}
      </div>
      <div className='todo-item-container'>
        {todos.map((todo, index) => <TodoItem key={`todo-key-${index}`} todo={todo} index={index} handleDelete={onDeleteTodo} />)}
      </div>
    </>
  )
}

export default App
