import { useDispatch, useSelector } from "react-redux";
import { updateSadhna } from "../../store/reducer";
import styles from "./SadhnaInput.module.css";

function SadhnaInput() {
  const dispatch = useDispatch();
  const todayData = new Date().toLocaleDateString();

  const { sadhnaData } = useSelector((store) => store);
  const todaySadhna = sadhnaData.find((el) => el.date === todayData);

  if (!todaySadhna) return <div></div>;

  const {
    isChantingDone,
    isReadingDone,
    readingTopic,
    isHearingDone,
    hearingTopic,
  } = todaySadhna;

  const readingToggleHandler = function () {
    dispatch(
      updateSadhna({
        type: "toggleIsReading",
        data: {
          date: todayData,
        },
      })
    );
  };

  const hearingToggleHandler = function () {
    dispatch(
      updateSadhna({
        type: "toggleIsHearing",
        data: {
          date: todayData,
        },
      })
    );
  };

  const chantingToggleHandler = function () {
    dispatch(
      updateSadhna({
        type: "toggleIsChantingDone",
        data: {
          date: todayData,
        },
      })
    );
  };

  const hearingTopicChangeHandler = function (e) {
    dispatch(
      updateSadhna({
        type: "typeHearingTopic",
        data: {
          date: todayData,
          hearingTopic: e.target.value,
        },
      })
    );
  };

  const readingTopicChangeHandler = function (e) {
    dispatch(
      updateSadhna({
        type: "typeReadingTopic",
        data: {
          date: todayData,
          readingTopic: e.target.value,
        },
      })
    );
  };

  return (
    <div>
      <h2 className={styles.title}> Daily </h2>

      <div className={styles.checklist}>
        <div className={styles.item}>
          <label>
            <input
              type="checkbox"
              checked={isReadingDone}
              onChange={readingToggleHandler}
            />
            Reading
          </label>
          <input
            value={readingTopic}
            type="text"
            onChange={readingTopicChangeHandler}
            placeholder="Today's reading topic..."
            className={styles.topicInput}
          />
        </div>

        <div className={styles.item}>
          <label>
            <input
              type="checkbox"
              checked={isHearingDone}
              onChange={hearingToggleHandler}
            />
            Hearing
          </label>
          <input
            value={hearingTopic}
            onChange={hearingTopicChangeHandler}
            type="text"
            placeholder="Today's hearing topic..."
            className={styles.topicInput}
          />
        </div>

        <label className={styles.item}>
          <input
            type="checkbox"
            checked={isChantingDone}
            onChange={chantingToggleHandler}
          />
          {""}
          16 Round
        </label>
      </div>
    </div>
  );
}

export default SadhnaInput;
