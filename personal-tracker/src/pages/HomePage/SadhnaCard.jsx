import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";

function SadhnaCard() {
  const { sadhnaData } = useSelector((store) => store);
  const today = new Date().toLocaleDateString();
  const todaySadhna = sadhnaData.find((el) => el.date === today);
  if (!todaySadhna) return <div></div>;

  const { isReadingDone, isHearingDone, isChantingDone } = todaySadhna;

  const NO = "❌";
  const YES = "✅";

  return (
    <Card>
      <h3>📚 Sadhna</h3>
      <p>Reading:{isReadingDone ? YES : NO}</p>
      <p>Hearing: {isHearingDone ? YES : NO}</p>
      <p>16 rounds chanting : {isChantingDone ? YES : NO}</p>
    </Card>
  );
}

export default SadhnaCard;
