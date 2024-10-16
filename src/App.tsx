import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTodos } from "./services/todos/todos.api";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { useDataStoreContext } from "./context/DataStore.context";
import "./styles/globals/_styles.scss";
import viteLogo from "/vite.svg";
function App() {
  const [count, setCount] = useState(0);
  const { isVisible, setIsVisible } = useDataStoreContext();

  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => await getTodos(),
    queryKey: ["todo"], //key for cache
  });
  if (isLoading) {
    return <span>is loading...</span>;
  }

  if (isError) console.log("Error While fetching Data", error);
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
      <h1>Vite + React {data?.length}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {isVisible && (
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      )}

      <button
        onClick={() => {
          setIsVisible((prevState) => !prevState);
        }}
      >
        {!isVisible ? "Show" : "Hide"} Docs
      </button>
    </>
  );
}

export default App;
