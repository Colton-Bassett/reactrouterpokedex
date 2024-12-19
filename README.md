## React Router Pokedex

[React Router Pokedex](https://reactrouterpokedex.netlify.app/) is the third part of a three-phase project to build a Pokedex app using three distinct React tech stacks. This version is a single page app that uses client side rendering to display 12 randomly selected Pokémon. Users can select Pokémon to visit dynamic URLs and view detailed information about each one.

Authorized users gain access to an admin panel, where they can interact with the app's database - fetching Pokémon data from the [PokeAPI](https://pokeapi.co/), and saving, updating, or deleting Pokémon records stored in a Firestore database.

React Router Pokedex is built with [React Router v7](https://reactrouter.com/) as the React framework and build tool, [Netlify](https://www.netlify.com/) for hosting, and [Supabase](https://supabase.com/) for cloud-based data storage. The app also leverages [Headless UI](https://headlessui.com/) for UI components and [Tailwind](https://tailwindcss.com/) for styling.

## Todo

-   [x] Project scaffolding (prettier, headless ui, etc)
-   [x] Host project with Netlify
-   [x] Build out basic UI
-   [x] Implement PokeAPI calls
-   [x] Display data
-   [x] Setup Database (supabase)
-   [x] Refine UI
-   [x] Refine 'server' actions
-   [x] Add 'server' action error-handling
-   [ ] Final UI refinement pass
-   [ ] Update README (summary, review, tidying)

### Development

Start the development server with HMR:

```bash
pnpm install
```

```bash
pnpm run dev
```

```bash
pnpm run build
```

The application will be available at `http://localhost:3000`.

## Review

React Router v7 (React Framework) - 6/10

-   Pros
    -   Foundation is good, fairly plug-and-play. Promising future
    -   Built in tools like docker, deploy templates
    -   Intuitive file structure
    -   The docs that do exist are ok
    -   Router meta arguments are cool (can change title, etc)
-   Cons
    -   Extremely bleeding edge right now. Should be called early-access. Not finished
    -   Missing features (middleware, authentication, etc)
    -   Missing documentation (auth, private routes, etc)
    -   No examples for other bundlers yet (pnpm, bun, etc)
    -   Less-than-stellar logo, utilitarian website layout
    -   Confusing naming scheme: React Router framework vs. React Router library
    -   Couldn't easily implement authentication. Docs just weren't there
    -   Router actions, loaders feel kinda clunky and cumbersome. Async server functions require a lot of boilerplate
    -   Doesn't seem like caching loader results is enabled by default

Netlify (Hosting) - 7/10

-   Pros
    -   Straightforward deployment
    -   Features Github auto deploys
    -   Straightforward UI
-   Cons
    -   300 capped build minutes per month
    -   Layout feels kinda amateurish/dated

Supabase (Database) - 9/10

-   Pros
    -   Awesome UI, front end devs have clear passion
    -   Awesome usability - tutorials autofill with my user credentials
    -   Easy-to-understand tables, UI, etc. Very responsive, not laggy anywhere
    -   Integrating postgres database is frictionless, plug and play
    -   Database table page updates without refreshing when database changes
    -   Unlimited API requests
-   Cons
    -   Not my favorite name & isn't run by a "big" company like Google, Microsoft, Amazon, etc

Headless UI (Component Library) - 8/10

-   Pros
    -   Awesome quality, robust, customizable UI components
    -   UI components work great and look great out of the box
-   Cons
    -   Not as many UI components as I would want

Tailwind (CSS 'framework') - 8/10

-   Pros
    -   Fast, easy development
    -   Standardized sizes, colors, etc
    -   Easy to convert css syntax to tailwind syntax
    -   Customization with arbitrary values is easy
    -   Hover styles, transitions, etc so simple to implement
-   Cons
    -   Readability is poor when many tailwind styles are in a single file/component

## Dev Notes

Netlify gh
Supabase gh
