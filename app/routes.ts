import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("admin", "routes/admin.tsx"),
	route("pokemon/:pokemonId", "routes/pokemon.tsx"),
	route("help", "routes/help.tsx"),
	route("disclaimer", "routes/disclaimer.tsx"),
] satisfies RouteConfig;
