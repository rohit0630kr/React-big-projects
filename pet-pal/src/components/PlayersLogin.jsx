import { useState } from "react";
import Selector from "../ui/Selector";
import "./PlayerLogin.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "./../ui/Modal";

import { loadGame, loginPlayer, loadNewGame } from "../store/playersSlice";

function PlayerLogin() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onLoadGame() {
    dispatch(loadGame());
    navigate("/pokedex");
  }

  function handleNewGame() {
    setShowModal(false);
  }

  const players = useSelector((store) => store.game.players).reduce(
    (acc, cur) => [
      ...acc,
      { name: cur.name, id: cur.id, region: cur.region, image: cur.image },
    ],
    []
  );

  function handlePlayerLogin(id) {
    dispatch(loginPlayer(id));
  }

  return (
    <>
      {showModal && (
        <Modal
          message={"Start new game??"}
          onLoadGame={onLoadGame}
          onNewGame={handleNewGame}
        />
      )}
      <div>
        <Selector
          options={players}
          title="Choose your hero"
          onSelect={handlePlayerLogin}
        />
      </div>
    </>
  );
}

export default PlayerLogin;
