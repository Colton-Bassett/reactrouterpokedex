import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Router Pokedex - Help Page" },
    { name: "description", content: "Help page for React Router v7 Pokedex" },
  ];
}

export default function HelpPage() {
  return (
    <div className="m-auto min-h-screen min-w-full flex-col px-8 py-12">
      <div className="mx-auto w-full max-w-4xl flex-col items-center">
        <div className="flex min-w-full flex-col px-8 sm:px-12">
          <span className="text-3xl font-bold text-[rgba(255,255,245,0.86)] lg:text-4xl">
            Help Page
          </span>
          <div className="flex min-w-full border-b border-[#2e2e32] py-8 italic text-[rgba(255,255,245,0.86)]">
            <span className="">December 4, 2024</span>
          </div>
        </div>

        <div className="min-w-full flex-col items-center justify-center px-8 pb-20 pt-12 text-[rgba(255,255,245,0.86)] sm:px-12">
          <p className="mb-8">
            This website displays 12 randomly selected Gen 1 Pokémon from a list
            of 151. Data is fetched from PokéAPI and stored in a PostgreSQL
            database. Users can refresh the list by clicking the{" "}
            <code className="rounded-sm border border-[#2e2e32] bg-[rgba(101,117,133,.16)] px-1 py-1 text-sm text-[#a8b1ff]">
              Load more
            </code>{" "}
            button on the Home Page. Clicking a Pokémon leads to a basic detail
            page with a unique URL.
          </p>
          <p className="mb-8">
            Built with React Router v7 architecture, Pokémon data is fetched
            server-side and statically served to the client for fast load times.
            Subsequent requests are dynamically served, ensuring fast database
            queries and a seamless user experience.
          </p>
          <p className="mb-8">
            An admin page is also available, which requires basic
            authentication. This page allows for managing Pokémon data,
            including adding, saving, and deleting entries via raw SQL queries.
          </p>
        </div>
      </div>
    </div>
  );
}
