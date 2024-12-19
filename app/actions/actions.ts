"use server";

import { supabase } from "~/lib/supabaseClient";
import { capitalizeFirstLetter, generateRandomPokemonIds } from "~/utils";

export interface Pokemon {
	pokedexId: number;
	name: string;
	type: string;
}

// API
export async function fetchPokemonFromAPI() {
	const pokemonList: Pokemon[] = [];
	try {
		for (let id = 1; id <= 2; id++) {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${id}/`
			);
			const data = await response.json();

			const pokemon: Pokemon = {
				name: capitalizeFirstLetter(data.name),
				type:
					data.types.length > 1
						? `${
								capitalizeFirstLetter(data.types[0].type.name) +
								capitalizeFirstLetter(data.types[1].type.name)
						  }`
						: capitalizeFirstLetter(data.types[0].type.name),
				pokedexId: data.id,
			};

			pokemonList.push(pokemon);
		}

		// const pokemonList: Pokemon[] = await Promise.reject(
		//   new Error("Forced error for testing"),
		// );
		return { success: true, pokemonList: pokemonList };
	} catch (error) {
		console.error("Error fetching Pokemon from API", error);
		return { success: false, pokemonList: [] };
	}
}

// DB
export async function fetchOnePokemonFromDB(pokemonId: number) {
	try {
		const { data: pokemon } = await supabase
			.from("routerpokedex")
			.select()
			.eq("pokedexId", pokemonId)
			.single();

		// const pokemon: Pokemon = await Promise.reject(
		//   new Error("Forced error for testing"),
		// );
		return { success: true, pokemon: pokemon };
	} catch (error) {
		return { success: false, pokemon: {} };
	}
}

export async function fetchRandomPokemonFromDB() {
	const randomPokemonIds = generateRandomPokemonIds();
	//   console.log(randomPokemonIds);

	try {
		const { data: pokemonList } = await supabase
			.from("routerpokedex")
			.select()
			.in("pokedexId", randomPokemonIds);

		// const pokemonList: Pokemon[] = await Promise.reject(
		//   new Error("Forced error for testing"),
		// );
		if (pokemonList) {
			pokemonList.sort(() => Math.random() - 0.5);
		}
		return { success: true, pokemonList: pokemonList };
	} catch (error) {
		return { success: false, pokemonList: [] };
	}
}

export async function fetchAllPokemonFromDB() {
	try {
		const { data: pokemonList } = await supabase
			.from("routerpokedex")
			.select();

		// const pokemonList: Pokemon[] = await Promise.reject(
		//   new Error("Forced error for testing"),
		// );
		return { success: true, pokemonList: pokemonList! };
	} catch (error) {
		console.error("Error fetching all Pokemon from DB");
		return { success: false, pokemonList: [] };
	}
}

export async function savePokemonToDB(pokemonList: Pokemon[]) {
	try {
		await supabase.from("routerpokedex").insert(
			pokemonList.map((pokemon) => ({
				name: pokemon.name,
				type: pokemon.type,
				pokedexId: pokemon.pokedexId.toString(),
			}))
		);

		// const pokemonList: Pokemon[] = await Promise.reject(
		//   new Error("Forced error for testing"),
		// );
		return { success: true, pokemonCount: pokemonList.length };
	} catch (error) {
		console.error("Error saving all pokemon to DB:", error);
		return { success: false, pokemonCount: 0 };
	}
}

export async function fetchAndSavePokemonToDB() {
	const serviceRoleKeyCheck = import.meta.env
		.VITE_PRIVATE_SUPABASE_SERVICE_ROLE_KEY;

	if (serviceRoleKeyCheck) {
		try {
			const { success, pokemonList } = await fetchPokemonFromAPI();

			if (pokemonList && pokemonList.length > 0) {
				await savePokemonToDB(pokemonList);
			} else {
				return { success: false, pokemonCount: 0 };
			}
			// const pokemonList: Pokemon[] = await Promise.reject(
			//   new Error("Forced error for testing"),
			// );
			return { success: true, pokemonCount: pokemonList?.length };
		} catch (error) {
			console.error(
				"Error fetching and saving all pokemon to DB:",
				error
			);
			return { success: false, pokemonCount: 0 };
		}
	} else {
		console.error("Error fetching and saving all pokemon to DB");
		return { success: false, pokemonCount: 0 };
	}
}

export async function deleteAllPokemonFromDB() {
	const serviceRoleKeyCheck = import.meta.env
		.VITE_PRIVATE_SUPABASE_SERVICE_ROLE_KEY;

	if (serviceRoleKeyCheck) {
		try {
			await supabase.from("routerpokedex").delete().neq("id", 0);

			// await Promise.reject(new Error("Forced error for testing"));
			return { success: true, pokemonCount: 151 };
		} catch (error) {
			console.error("Error deleting all pokemon from DB:", error);
			return { success: false, pokemonCount: 0 };
		}
	} else {
		console.error("Error deleting all pokemon from DB");
		return { success: false, pokemonCount: 0 };
	}
}
