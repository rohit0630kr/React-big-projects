import { useDispatch, useSelector } from "react-redux";

import styles from "./TodoList.module.css";
import { removeTodo, updateTodoStatus } from "../../store/reducer";

function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todo);

  const removeTodoHandler = function (id) {
    dispatch(removeTodo(id));
  };

  const todoItemStatusChangeHandler = function (id) {
    dispatch(updateTodoStatus(id));
  };

  return (
    <ul className={styles.taskList}>
      {todoList.map((el, index) => (
        <li key={index} className={styles.taskItem}>
          <div className={styles.taskInfo}>
            <span className={styles.taskText}>{el.todo}</span>
            <span className={styles.taskDate}>{el.date}</span>
          </div>
          <input
            checked={el.isCompleted}
            type="checkbox"
            onChange={() => todoItemStatusChangeHandler(el.id)}
          />
          <button
            className={styles.deleteBtn}
            onClick={() => removeTodoHandler(el.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
