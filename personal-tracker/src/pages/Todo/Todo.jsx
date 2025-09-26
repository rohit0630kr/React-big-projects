import styles from "./Todo.module.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className={styles.todo}>
      <h2 className={styles.heading}>📝 To-Do List</h2>

      {/* Input */}
      <TodoInput />

      {/* Task List */}

      <TodoList />
      {/* Empty message */}
      {/* <p className={styles.empty}>No tasks yet!</p> */}
    </div>
  );
}

export default Todo;
