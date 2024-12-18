import { Link } from "react-router";
import viteLogo from "../nav/logo.svg";

export default function Footer() {
  return (
    <footer className="flex overflow-auto whitespace-nowrap border-t border-t-[#000000] bg-[#1b1b1f]">
      <div className="m-auto box-content flex h-32 w-full max-w-4xl items-center justify-center px-10">
        <div className="flex min-w-[470px] items-center justify-center gap-7 text-[rgba(255,255,245,0.86)]">
          <Link to="/" className="flex items-center gap-3">
            <img src={viteLogo} alt="Vite logo" className="h-6 w-6" /> Pokedex
          </Link>
          <Link
            to="/help"
            className="text-[15px] transition-colors duration-300 hover:text-[#9499ff]"
          >
            <span className="">Help</span>
          </Link>
          <Link
            to="/disclaimer"
            className="text-[15px] transition-colors duration-300 hover:text-[#9499ff]"
          >
            <span className="">Disclaimer</span>
          </Link>
          <Link
            to="/admin"
            className="text-[15px] transition-colors duration-300 hover:text-[#9499ff]"
          >
            <span className="">Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
