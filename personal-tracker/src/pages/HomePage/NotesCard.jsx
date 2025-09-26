import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";

function NotesCard() {
  const { briefData } = useSelector((store) => store);

  return (
    <Card>
      <h3>✍️ Notes</h3>
      <p>{briefData.notesWrittenToday.length} reflections written today</p>
    </Card>
  );
}

export default NotesCard;
