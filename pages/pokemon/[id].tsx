import { Pokemon } from "@/interfaces/pokemonFull";
import pokeApi from "@/services/pokeApi";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "@/components/Layouts/Layout";
import PokemonFull from "@/components/ui/PokemonFull/PokemonFull";

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
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map((id) => ({
      params: { id },
    })),

    fallback: false,
  };
};
