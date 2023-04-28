import Layout from "@/components/Layouts/Layout";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const LibraryPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, []);

  const onFavoriteClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Layout title="Pokemons - Library">
      <>
        {favoritePokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <section className="mt-9 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-9">
            {favoritePokemons.map((id, index) => {
              return (
                <article
                  onClick={() => onFavoriteClick(id)}
                  key={index}
                  className="cursor-pointer w-full rounded-lg shadow-lg border-yellow-400 border-opacity-70 border-2 bg-black h-[200px] relative"
                >
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt="pokemon image"
                    fill
                    priority
                    className="p-7"
                  />
                </article>
              );
            })}
          </section>
        )}
      </>
    </Layout>
  );
};

export default LibraryPage;
