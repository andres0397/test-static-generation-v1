import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "components/Layouts/Layout";
import pokeApi from "services/pokeApi";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import PokeCard from "@/components/ui/PokeCard/PokeCard";

interface Props {
  pokemons: SmallPokemon[];
}

export default function Home({ pokemons }: Props) {
  return (
    <>
      <Layout title="Pokemon List">
        <ul className="grid grid-cols-1 grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {pokemons.map((pokemon: SmallPokemon, index: number) => {
            return <PokeCard key={index} pokemon={pokemon} />;
          })}
        </ul>
      </Layout>
    </>
  );
}

/* 

You should use getStaticProps if:
The data required to render the page is available at build time ahead of a user’s request
The data comes from a headless CMS
The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
The data can be publicly cached (not user-specific). This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path.
-GetStaticProps is execute at build time, when we are in dev it executes every request
but, in production it's only at build time --> npm run build

  name: string;
  url: string;
  id: number;
  img: string;
*/

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

export const getStaticProps: GetStaticProps = async (ctx) => {
  //fetch data here
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map(
    (pokemon: SmallPokemon, i: number) => {
      return {
        name: pokemon.name,
        url: pokemon.url,
        id: i + 1,
        img: `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          i + 1
        }.svg`,
      };
    }
  );

  return {
    props: {
      pokemons,
    },
  };
};
