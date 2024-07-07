import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="links">
        LOgo
      </Link>
      <Link className="links" href="/projects">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
