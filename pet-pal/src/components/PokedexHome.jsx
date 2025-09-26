import { useDispatch, useSelector } from "react-redux";
import styles from "./PokedexHome.module.css";
import { removePokemon } from "../store/playersSlice";
import { useNavigate } from "react-router-dom";

function getHealthClass(health) {
  if (health >= 75) return styles.highHealth;
  if (health >= 40) return styles.midHealth;
  return styles.lowHealth;
}

export default function PokedexHome() {
  const { isPlaying, player } = useSelector((store) => store.game.gamePlay);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const pokemons = player.pokemons;

  function handleRemovePokemon(id) {
    dispatch(removePokemon(id));
  }

  console.log(isPlaying);

  if (!isPlaying) return navigate("/");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Pokémon Base</h1>
      <div className={styles.grid}>
        {pokemons?.map((poke) => (
          <div
            className={`${styles.card} ${getHealthClass(poke.health)}`}
            key={poke.id}
          >
            <div className={styles.imageWrapper}>
              <img src={poke.image} alt={poke.name} className={styles.image} />
              <span className={styles.levelBadge}>Lv {poke.level}</span>
            </div>
            <h2 className={styles.name}>{poke.name}</h2>
            <div className={styles.stats}>
              <div className={styles.statRow}>
                <span>❤️ Health</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.healthFill}
                    style={{
                      width: `${
                        100 *
                        (poke.health /
                          poke.stats.find((el) => el.name === "hp").detail)
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className={styles.statRow}>
                <span>⭐ XP</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.expFill}
                    style={{
                      width: `${
                        100 * (poke.experience / poke.experienceToGrow)
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className={styles.commonStats}>
                {poke.stats.map((s) => (
                  <p className={styles.stamina}>
                    {s.name}: {s.detail}
                  </p>
                ))}
              </div>
            </div>
            <button onClick={() => handleRemovePokemon(poke.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
