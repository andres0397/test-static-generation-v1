const toggleFavorite: any = (id: number) => {
  console.log("togleFavorite call");
  let favorites: number[] = JSON.parse(localStorage.getItem("library") || "[]");

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("library", JSON.stringify(favorites));
};

const existInLibrary = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  const favorites: number[] = JSON.parse(
    localStorage.getItem("library") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("library") || "[]");
};

export default { toggleFavorite, existInLibrary, pokemons };
