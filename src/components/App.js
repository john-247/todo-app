import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, todo: doc.data().todo };
          })
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </FormControl>
      <Button
        disabled={!input}
        variant="contained"
        color="primary"
        type="submit"
        onClick={addTodo}
      >
        Add Todo
      </Button>

      <ul>
        {todos.map((todo) => {
          return <Todo id={todo.id} todo={todo.todo} />;
        })}
      </ul>
    </div>
  );
};
export default App;
