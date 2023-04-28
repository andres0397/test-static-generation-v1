import { SmallPokemon } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";

type Props = {
  pokemon: SmallPokemon;
};

const PokeCard: FC<Props> = ({ pokemon }) => {
  const { id, name, url, img } = pokemon;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${name}`);
  };
  return (
    <li
      onClick={handleClick}
      key={id}
      className="bg-black cursor-pointer relative w-full md:w-auto h-60 flex flex-col items-center justify-center rounded-2xl border-gray-200 border-opacity-20 border-4 shadow-xl"
    >
      <span className="absolute top-0 left-0 ml-4 mt-4">{id}</span>
      <div className="relative w-full h-1/2">
        <Image src={img} alt="pokemon image" fill priority />
      </div>
      <p className="mt-2"> {name} </p>
    </li>
  );
};

export default PokeCard;
