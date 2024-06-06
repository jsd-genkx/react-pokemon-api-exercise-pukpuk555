import axios from "axios";
import { useEffect, useState } from "react";

const PokemonBasicFetchAxios = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // fetch data from api
        const response = await axios(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        console.log(response.data);
        setPokemonData(response.data.results);
        // handle data
      } catch (error) {
        // handle error
        setError("Error");
      } finally {
        // handle loading
        setLoading(false);
      }
    };
    // invoke function
    fetchPokemon();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="font-bold">Pokémon List</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonBasicFetchAxios;
