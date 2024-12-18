import type { Route } from "./+types/pokemon";
import PokemonPage from "../pokemon/pokemon";
import { fetchOnePokemonFromDB } from "~/actions/actions";

export async function loader({ params }: Route.LoaderArgs) {
	const { success, pokemon } = await fetchOnePokemonFromDB(
		Number(params.pokemonId)
	);

	return { success: success, pokemon: pokemon };
}

export function meta({ params }: Route.MetaArgs) {
	return [
		{ title: `Router Pokedex - Pokemon ${params.pokemonId}` },
		{
			name: "description",
			content: "Pokemon page for React Router v7 Pokedex",
		},
	];
}

export default function Pokemon({ params, loaderData }: Route.ComponentProps) {
	return (
		<PokemonPage
			pokemonId={Number(params.pokemonId)}
			loaderData={loaderData}
		/>
	);
}
