import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <span>&copy; hritik gupta</span>
      <Link className="links" href="./profile">
        profile
      </Link>
    </footer>
  );
};

export default Footer;
