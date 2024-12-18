// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: context.VALUE_FROM_NETLIFY };
// }

// export default function Home({ loaderData }: Route.ComponentProps) {
//   return <Welcome message={loaderData.message} />;
// }

import type { Route } from "./+types/home";
import { HomePage } from "../homepage/homepage";
import { fetchRandomPokemonFromDB } from "~/actions/actions";

export async function action({ request }: Route.ActionArgs) {
	//   const actionType = (await request.formData()).get("formId");
	//       const fetchActionData: { success: boolean; pokemonList: Pokemon[] | [] } =
	//         await fetchAllPokemonFromDB();
	//       console.log(fetchActionData);
	//       return {
	//         success: fetchActionData.success,
	//         pokemonCount: fetchActionData.pokemonList.length,
	//       };
}

export async function loader({ params }: Route.LoaderArgs) {
	const { success, pokemonList } = await fetchRandomPokemonFromDB();
	//   console.log(pokemonList);
	return { success: success, pokemonList: pokemonList };

	//   const loaderData = {
	//     success: true,
	//     pokemonList: [{ pokemonId: "1", name: "bulbasaur", type: "grasspoison" }],
	//   };
	//   return loaderData;
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
