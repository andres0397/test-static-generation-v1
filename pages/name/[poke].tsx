import { Pokemon } from "@/interfaces/pokemonFull";
import pokeApi from "@/services/pokeApi";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layouts/Layout";
import PokemonFull from "@/components/ui/PokemonFull/PokemonFull";
import { PokemonByNameResponse, SmallPokemonByName } from "@/interfaces";

type Props = {
  pokemon: Pokemon;
};

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <div className="flex flex-col items-center mt-5 px-5">
        <PokemonFull pokemon={pokemon} />
      </div>
    </Layout>
  );
};

export default PokemonPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { poke } = params as { poke: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${poke}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonByNameResponse>(
    "/pokemon?limit=151"
  );

  const { results } = data;

  return {
    paths: results.map((pokemon: SmallPokemonByName) => ({
      params: { poke: pokemon.name },
    })),

    fallback: false,
  };
};
