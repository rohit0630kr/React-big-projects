import { useState } from "react";
import styles from "./TodoInput.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducer";
import Button from "../../components/UI/Button";

function TodoInput() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const newTodoChangeHandler = function (e) {
    setNewTodo(e.target.value);
  };

  const addTodoHandler = function (e) {
    e.preventDefault();

    dispatch(
      addTodo({
        todo: newTodo,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        isCompleted: false,
        completeDate: undefined,
      })
    );
    setNewTodo("");
  };

  return (
    <div className={styles.inputArea}>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          onChange={(e) => newTodoChangeHandler(e)}
          value={newTodo}
          placeholder="Add a new task..."
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default TodoInput;
