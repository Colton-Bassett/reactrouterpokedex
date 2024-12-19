import type { Route } from "./+types/home";
import { HomePage } from "../homepage/homepage";
import { fetchRandomPokemonFromDB } from "~/actions/actions";

export async function loader({ params }: Route.LoaderArgs) {
  const { success, pokemonList } = await fetchRandomPokemonFromDB();
  return { success: success, pokemonList: pokemonList };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Router Pokedex" },
    { name: "description", content: "Pokedex built with React Router v7" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <HomePage loaderData={loaderData} />;
}
