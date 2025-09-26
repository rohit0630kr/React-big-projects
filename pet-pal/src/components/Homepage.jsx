import { Link, useNavigate } from "react-router-dom";
import "./Homepage.css";
import { useSelector } from "react-redux";

export default function HomePage() {
  const navigate = useNavigate();
  const { isPlaying } = useSelector((store) => store.game.gamePlay);
  if (!isPlaying) return navigate("/");

  return (
    <>
      <div className="homepage-container">
        <h1 className="homepage-title">Welcome to PokéWorld</h1>
        <div className="card-wrapper">
          <Link to="home" className="card">
            <h2>🏠 Home</h2>
            <p>Return to your Pokémon base</p>
          </Link>
          <Link to="explore" className="card">
            <h2>🔍 Explore Pokémons</h2>
            <p>Discover and meet new Pokémon</p>
          </Link>
        </div>
      </div>
    </>
  );
}
