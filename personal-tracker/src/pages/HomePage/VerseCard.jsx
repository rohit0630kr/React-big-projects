import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";

function VerseCard() {
  const { verses } = useSelector((store) => store);

  const listedVerses = verses.length;
  const countRememberedVerses = verses.filter((el) => el.isRemembered).length;
  const countUnRememberedVerses = listedVerses - countRememberedVerses;

  return (
    <Card>
      <h3>📖 {listedVerses} Verses listed </h3>
      <p>
        {countRememberedVerses} verses remembered • {countUnRememberedVerses}{" "}
        pending
      </p>
    </Card>
  );
}

export default VerseCard;
