## React Router Pokedex

[React Router Pokedex](https://reactrouterpokedex.netlify.app/) is the final part of a three-phase project to build a Pokedex app using three distinct React tech stacks. In this version, users can explore 12 randomly selected Pokémon and visit dynamic URLs to view detailed information about each one.

Authorized users gain access to server actions in an admin panel, where they can interact with the app's database - fetching Pokémon data from the [PokeAPI](https://pokeapi.co/), and saving, updating, or deleting Pokémon records stored in a Supabase PostgREST database.

React Router Pokedex is built with [React Router v7](https://reactrouter.com/) as the React framework and build tool, [Netlify](https://www.netlify.com/) for hosting, and [Supabase](https://supabase.com/) for cloud-based data storage. The app also leverages [Headless UI](https://headlessui.com/) for UI components and [Tailwind](https://tailwindcss.com/) for styling.

## Goals

1. Build a simple, full-stack application with the new React Router v7 Framework
2. **Showcase the power and simplicity of server components and server actions by fetching from a database without useEffect, hooks, or other lifecycle React methods**
3. Gain a deeper understanding of React Router's static vs. dynamic and client side loading
4. Explore a Vite-inspired UI methodology
5. Conduct an informal developer experience review using: React Router v7, Netlify, Supabase PostgREST, HeadlessUI, and Tailwind

## Todo

- [x] Project scaffolding (prettier, headless ui, etc)
- [x] Host project with Netlify
- [x] Build out basic UI
- [x] Implement PokeAPI calls
- [x] Display data
- [x] Setup Database (supabase)
- [x] Refine UI
- [x] Refine 'server' actions
- [x] Add 'server' action error-handling
- [x] Final UI refinement pass
- [x] Update README (summary, review, tidying)

### Scripts

```bash
pnpm install
# install dependencies
```

```bash
pnpm run dev
# launch development server with live reloading, updates, and debugging.
```

```bash
pnpm run build
# bundle project and create deployable app
```

```bash
pnpm run start
# launch production version of app
```

## Review

React Router v7 (React Framework) - 6/10

- Pros

  - Foundation is good. Plug-and-play. Promising future
  - Intuitive file structure
  - Existing docs are ok
  - Router meta arguments are cool (can change title, etc)

- Cons
  - Extremely bleeding edge right now. This is more like early access
  - Missing features (middleware, authentication, etc)
  - Missing documentation (auth, private routes, etc)
  - Router actions, loaders feel kinda clunky and cumbersome. Async server functions require a lot of boilerplate
  - Hard-to-debug issue with Server actions in dev mode
  - No examples with other bundlers yet (pnpm, bun, etc)
  - Confusing naming scheme. React Router framework vs. React Router library
  - Doesn't seem like caching loader results is enabled by default

Netlify (Hosting) - 7/10

- Pros
  - Straightforward deployment
  - Github auto deploys
  - Straightforward UI
- Cons
  - 300 capped build minutes per month
  - Layout feels kinda amateurish/dated

Supabase (Database) - 9/10

- Pros
  - Awesome UI
  - Great usability - tutorials autofill with my user credentials
  - Easy-to-understand tables, UI, etc. Very responsive, not laggy anywhere
  - Integrating postgres database is frictionless, plug and play
  - Database table page updates without refreshing when database changes
  - Unlimited API requests
- Cons
  - Not my favorite name & isn't backed by a "big" company like Google, Microsoft, Amazon, etc

Headless UI (Component Library) - 8/10

- Pros
  - Awesome quality, robust, customizable, accessible UI components
  - UI components work great and look great out of the box
- Cons
  - Not as many UI components as I would want

Tailwind (CSS 'framework') - 8/10

- Pros
  - Fast, easy development
  - Standardized sizes, colors, etc
  - Easy to convert css syntax to tailwind syntax
  - Customization with arbitrary values is easy
  - Hover styles, transitions, etc so simple to implement
- Cons
  - Readability is poor when many tailwind styles are in a single file/component

## Dev Notes

Netlify gh

Supabase gh
