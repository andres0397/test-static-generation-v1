export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: null;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}

export interface PokemonByNameResponse {
  count: number;
  next?: string;
  previous?: null;
  results: SmallPokemonByName[];
}

export interface SmallPokemonByName {
  name: string;
  url: string;
}
