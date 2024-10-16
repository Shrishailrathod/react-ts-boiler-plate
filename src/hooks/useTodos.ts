/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { getTodos } from "../services/todos/todos.api";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// well this is just an example, if you'll be using react query you don't need to manage the loading and error state manually, this is just for a demo

// Custom hooks in React are reusable functions that encapsulate stateful logic and allow you to share functionality between components without duplicating code.

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await getTodos();
        setTodos(data);
      } catch (error: any) {
        setError(error.message || "Failed to fetch todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { todos, loading, error };
};
