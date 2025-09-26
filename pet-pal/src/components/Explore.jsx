import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { getPokemons, proxy } from "../utils/API";

import "./Explore.css";
import { useSelector } from "react-redux";

export default function Explore() {
  const { isPlaying } = useSelector((store) => store.game.gamePlay);
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);

  useEffect(function () {
    async function fetchPokemon() {
      const url = `${proxy}${getPokemons}`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const pokeList = data.results.map((pokemon, index) => {
        const pokeId = index + 1;
        return {
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`,
          id: pokeId,
        };
      });
      setPokemons(pokeList);
    }
    fetchPokemon();
  }, []);

  if (!isPlaying) return navigate("/");
  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore Pokémons</h1>
      <div className="pokemon-grid">
        {pokemons.map((poke, index) => (
          <Link to={`${poke.id}`} className="pokemon-card" key={index}>
            <img src={poke.image} alt={poke.name} />
            <h3>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
