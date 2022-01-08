import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "../Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Todo = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [input, setInput] = useState("");

  const UpdateTodo = () => {
    //update the todos with the new input text
    db.collection("todos").doc(props.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>i'm a modal</h1>
          <input
            placeholder={props.todo}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button onClick={UpdateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo} secondary="Todo" />
        </ListItem>
        <Button
          onClick={(e) => {
            db.collection("todos").doc(props.id).delete();
          }}
        >
          <DeleteIcon />
          DELETE ME
        </Button>
        <button onClick={(e) => setOpen(true)}>EDIT ME</button>
      </List>
    </>
  );
};
export default Todo;
