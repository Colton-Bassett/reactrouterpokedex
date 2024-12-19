import { Button } from "@headlessui/react";
import { useNavigate } from "react-router";
import { PokemonCard, PokemonList } from "~/pokemon/pokemon";

export function HomePage({
	loaderData,
}: {
	loaderData: { success: boolean; pokemonList: any[] | null };
}) {
	const navigate = useNavigate();

	function handleRefresh() {
		navigate(0);
	}

	return (
		<main className="flex flex-col items-center justify-center py-16">
			<div className="flex min-h-0 flex-1 flex-col items-center gap-16">
				<PokemonList>
					{loaderData.pokemonList!.map((p) => (
						<PokemonCard
							key={p.id}
							id={p.pokedexId}
							name={p.name}
							type={p.type}
						></PokemonCard>
					))}
				</PokemonList>
			</div>
			<div className="mt-12">
				<Button
					onClick={() => handleRefresh()}
					className="inline-flex items-center gap-2 rounded-md bg-[radial-gradient(141.42%_141.42%_at_100%_0%,#fff6,#fff0),radial-gradient(140.35%_140.35%_at_100%_94.74%,#bd34fe,#bd34fe00),radial-gradient(89.94%_89.94%_at_18.42%_15.79%,#41d1ff,#41d1ff00)] px-5 py-3 text-[rgba(255,255,245,0.86)] shadow-[0_1px_#ffffffbf_inset] transition-all duration-200 ease-in-out focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
				>
					Load more
				</Button>
			</div>

			<div className="heroBg"></div>
		</main>
	);
}
