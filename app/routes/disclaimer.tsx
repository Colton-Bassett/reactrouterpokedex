import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Router Pokedex - Disclaimer Page" },
    {
      name: "description",
      content: "Disclaimer page for React Router v7 Pokedex",
    },
  ];
}

export default function DisclaimerPage() {
  return (
    <div className="m-auto min-h-screen min-w-full flex-col px-8 py-12">
      <div className="mx-auto w-full max-w-4xl flex-col items-center">
        <div className="flex min-w-full flex-col px-8 sm:px-12">
          <span className="text-3xl font-bold text-[rgba(255,255,245,0.86)] lg:text-4xl">
            Disclaimer Page
          </span>
          <div className="flex min-w-full border-b border-[#2e2e32] py-8 italic text-[rgba(255,255,245,0.86)]">
            <span className="">December 4, 2024</span>
          </div>
        </div>

        <div className="min-w-full flex-col items-center justify-center px-8 pb-20 pt-12 text-[rgba(255,255,245,0.86)] sm:px-12">
          <p className="mb-8">
            This website is designed for educational and exploratory purposes,
            focusing on learning and experimenting with React Router v7,
            Netlify, Supabase, React Server Components/Actions, and Headless UI.
            It serves as a personal project to demonstrate and explore these
            technologies in practice.
          </p>
          <p className="mb-8">
            This website is an unofficial fan-made project and is not affiliated
            with, endorsed by, or otherwise associated with The Pokémon Company,
            Nintendo, or Game Freak. All trademarks and copyrights related to
            Pokémon are the property of their respective owners. All rights
            reserved.
          </p>
          <p className="mb-8">
            This site is an independent web app and is not associated with,
            endorsed by, or connected to React Router, Vite, Netlify, Supabase,
            or any of their affiliates. All related trademarks and copyrights
            are owned by their respective entities. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
