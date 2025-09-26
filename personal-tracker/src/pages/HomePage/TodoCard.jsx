import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";

function TodoCard() {
  const { briefData } = useSelector((store) => store);

  return (
    <Card>
      <h3>📝 To-Do</h3>
      <p>
        {briefData.todo.completed.length} tasks completed •{" "}
        {briefData.todo.pending.length} pending
      </p>
    </Card>
  );
}

export default TodoCard;
