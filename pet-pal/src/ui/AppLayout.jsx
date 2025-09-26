import { Outlet, Link } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";

export default function AppLayout() {
  const { isPlaying, player } = useSelector((store) => store.game.gamePlay);
  const data = useSelector((store) => store.game.gamePlay);

  function handleSaveGame() {
    localStorage.setItem("petpal", JSON.stringify(data));
  }

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Link to="/pokedex" className={styles.logo}>
          🐾 PetPal
        </Link>
        <nav className={styles.navLinks}>
          {isPlaying ? (
            <Link to="/pokedex">Pokédex</Link>
          ) : (
            <Link to="/">Select player</Link>
          )}
        </nav>
        {isPlaying && (
          <button className={styles.saveButton} onClick={handleSaveGame}>
            Save game
          </button>
        )}
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {isPlaying && (
        <footer className={styles.footer}>
          <div className={styles.currentPlayer}>
            <img src={player.image} alt={player.name} />
            <div>
              <p className={styles.name}>{player.name}</p>
              {/* <p className={styles.stat}>❤️ Hunger: 60%</p> */}
            </div>
          </div>

          <div className={styles.statsContainer}>
            {player.pokemons?.map((pokemon) => (
              <div className={styles.pokemonStat}>
                <img src={pokemon.image} alt={pokemon.name} />
                <div>
                  <p className={styles.name}>{pokemon.name}</p>
                  <p className={styles.stat}>
                    ❤️ hp: {pokemon.stats.find((el) => el.name === "hp").detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </footer>
      )}
    </div>
  );
}
