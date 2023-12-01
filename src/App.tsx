import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Login from "./Login";
import TodosContainer from "./components/TodosContainer";

function App() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("auth");

    setAuthorized(!!token);
  }, []);

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
      {authorized ? <TodosContainer /> : <Login handleSuccess={() => setAuthorized(true)} />}
    </>
  );
}

export default App;
