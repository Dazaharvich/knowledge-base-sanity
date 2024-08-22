import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="font-blod text-3xl">
        Knowledge <span className="text-primary">Base</span>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
