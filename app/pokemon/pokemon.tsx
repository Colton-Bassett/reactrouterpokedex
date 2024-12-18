import { Link } from "react-router";
import type { Pokemon } from "~/actions/actions";
import { separatePokemonTypes } from "~/utils";

export default function PokemonPage({
	pokemonId,
	loaderData,
}: {
	pokemonId: number;
	loaderData: { success: boolean; pokemon: Pokemon | null };
}) {
	const data = loaderData;

	if (data.success) {
		console.log(data.pokemon);
	} else if (!data.success) {
		console.log(data.success);
		return (
			<div className="mt-12 flex h-dvh justify-center">
				Fetch Pokemon error
			</div>
		);
	} else {
		console.log("loading");
	}

	return (
		<div className="flex min-h-screen flex-col items-center py-12">
			<div className="mb-8 flex flex-col items-center justify-center gap-4 text-[rgba(255,255,245,0.86)]">
				<span className="text-4xl">Pokemon Page</span>{" "}
				<span className="max-w-96 text-center text-lg text-[rgba(235,235,245,0.6)]">
					Built with a blazing fast frontend tooling for the next
					generation of web applications
				</span>
			</div>

			<PokemonCard
				id={pokemonId}
				name={data.pokemon!.name}
				type={data.pokemon!.type}
			/>
		</div>
	);
}

export function PokemonCard({
	id,
	name,
	type,
}: {
	id: number;
	name: string;
	type: string;
}) {
	const typeA = separatePokemonTypes(type)[0];
	const typeB = separatePokemonTypes(type)[1];
	return (
		<Link
			to={`/pokemon/${id}`}
			className="pokemonCard relative flex min-w-[202px] cursor-pointer flex-col items-center justify-center rounded-xl border border-[rgba(38,38,38,.7)] bg-[#202127] px-10 py-6 text-[rgba(255,255,245,0.86)]"
		>
			<img
				className="min-h-24 min-w-24"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				alt={`${name} sprite`}
			></img>
			<div className="flex flex-col items-center justify-center">
				<span className="mb-2">{name}</span>
				<div className="flex items-center justify-center gap-4 text-[#a9a9a9]">
					{typeA ? <span>{typeA}</span> : <></>}
					{typeB ? <span>{typeB}</span> : <></>}
				</div>
			</div>
		</Link>
	);
}

export function PokemonList({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h[880px] grid w-auto grid-cols-1 grid-rows-3 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{children}
		</div>
	);
}
