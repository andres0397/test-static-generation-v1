import { Pokemon, Ability } from "@/interfaces/pokemonFull";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { localFavorites } from "@/utils";

type Props = {
  pokemon: Pokemon;
};

const PokemonFull: FC<Props> = ({ pokemon }) => {
  const { name, sprites, abilities } = pokemon;

  const [isInFavorites, setisInFavorites] = useState(
    localFavorites.existInLibrary(pokemon.id)
  );

  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites);
  };

  if (!isMounted) return null;

  return (
    <>
      <h1 className="text-3xl mb-9"> {name} </h1>
      <section className="flex flex-col mb-9">
        <article className="relative w-60 h-60">
          <Image
            className="p-4"
            src={sprites.other!.dream_world.front_default}
            fill
            alt="main pokemon"
            priority
          />
        </article>
      </section>

      <section>
        <h2 className="text-3xl mb-4"> Abilities </h2>
        <ul>
          {abilities.map((value: Ability, index) => {
            return (
              <li className="mb-2" key={index}>
                {value.ability.name}
              </li>
            );
          })}
        </ul>
      </section>

      <div className="w-full text-center">
        <button
          onClick={onToggleFavorite}
          className="bg-green-800 text-white p-3 rounded-lg mt-6 "
        >
          {isInFavorites ? "Remove from library" : "Add to Library"}
        </button>
      </div>
    </>
  );
};

export default PokemonFull;
