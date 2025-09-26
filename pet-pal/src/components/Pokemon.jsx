import { useNavigate, useParams } from "react-router-dom";
import "./Pokemon.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPokemon } from "../store/playersSlice";

import { proxy } from "../utils/API";
import LoadingSpinner from "./LoadingSpinner";

export default function Pokemon() {
  const navigate = useNavigate();
  const { isPlaying } = useSelector((store) => store.game.gamePlay);

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchPokemon() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `${proxy}https://pokeapi.co/api/v2/pokemon/${id}/`
          );
          const data = await res.json();
          const customData = {
            experienceToGrow: data.base_experience,
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            types: data.types.reduce(
              (acc, cur) => ` ${cur.type.name}, ` + acc,
              ""
            ),
            abilities: data.abilities.reduce(
              (acc, cur) => `${cur.ability.name} ` + acc,
              ""
            ),
            stats: data.stats.map((s) => {
              return {
                name: s.stat.name,
                detail: s.base_stat,
              };
            }),
          };
          setPokemon(customData);
        } catch (err) {
          console.log("hello");
        } finally {
          setIsLoading(false);
        }
      }
      fetchPokemon();
    },
    [id]
  );

  function handleAddPokemon() {
    dispatch(addPokemon(pokemon));
  }

  if (!isPlaying) return navigate("/");

  return isLoading || !pokemon ? (
    <LoadingSpinner />
  ) : (
    <div className="pokemon-detail-container">
      <div className="pokemon-card-detail">
        <img
          className="pokemon-image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="pokemon-name"
        />
        <h1 className="pokemon-name">{pokemon.name}</h1>

        <div className="pokemon-info">
          <div>
            <strong>Type:</strong>
            {pokemon.types}
          </div>
          <div>
            <strong>Height:</strong> {pokemon.height}
          </div>
          <div>
            <strong>Weight:</strong> {pokemon.weight}
          </div>
          <div>
            <strong>Abilities:</strong> {pokemon.abilities}
          </div>
        </div>

        <div className="pokemon-stats">
          <h2>Stats</h2>
          <ul>
            {pokemon.stats.map((s) => (
              <li>
                {s.name}: {s.detail}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleAddPokemon}>Add</button>
      </div>
    </div>
  );
}
