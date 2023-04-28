import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center h-16 px-5 ">
      <nav>
        <Link href="/">Pokemons</Link>
      </nav>

      <div>
        <Link href="/library">Library</Link>
      </div>
    </div>
  );
};

export default NavBar;
