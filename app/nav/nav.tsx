import { Link } from "react-router";
import viteLogo from "./logo.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-[#1b1b1f] bg-opacity-80"
      style={{ backdropFilter: "saturate(180%) blur(5px)" }}
    >
      <div className="flex h-16 items-center justify-between gap-4 border-b border-b-[#000000] px-7 text-[rgba(255,255,245,0.86)]">
        <Link to="/" className="flex h-16 items-center gap-3">
          <img src={viteLogo} alt="Vite logo" className="h-6 w-6" /> Pokedex
        </Link>
        <div className="gap hidden items-center sm:flex">
          <Link
            to="/help"
            className="mx-3 flex h-16 items-center text-[15px] transition-colors duration-300 hover:text-[#9499ff]"
          >
            Help
          </Link>
          <Link
            to="/disclaimer"
            className="mx-3 flex h-16 items-center text-[15px] transition-colors duration-300 hover:text-[#9499ff]"
          >
            Disclaimer
          </Link>
          <div className="mx-2 h-6 w-[1px] bg-[#2e2e32]"></div>
          <Link
            to="/admin"
            className="mx-3 flex h-16 items-center text-[15px] transition-colors duration-300 hover:text-[#9499ff]"
          >
            Admin
          </Link>

          <div className="mx-2 h-6 w-[1px] bg-[#2e2e32]"></div>
          <a
            href="https://github.com/Colton-Bassett"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="flex h-16 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="ml-3 h-5 w-5 fill-current text-[#EBEBF599] duration-300 hover:text-white"
            >
              <g fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="gap sm:hidden">
          <div className="text-right">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 pl-3 text-sm/6 font-semibold focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 scale-x-[-1] transform text-[rgba(255,255,245,0.86)] transition-colors duration-300 hover:text-[#9499ff]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="z-50 w-52 origin-top-right rounded-xl border border-white/5 bg-[#202127] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <Link
                    to="/help"
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:text-[#9499ff]"
                  >
                    Help
                  </Link>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                  <Link
                    to="/disclaimer"
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:text-[#9499ff]"
                  >
                    Disclaimer
                  </Link>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                  <Link
                    to="/admin"
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:text-[#9499ff]"
                  >
                    Admin
                  </Link>
                </MenuItem>
                <div className="my-1 h-px bg-white/5" />
                <MenuItem>
                  <a
                    href="https://github.com/Colton-Bassett"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:text-[#9499ff]"
                  >
                    Github
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
