import { CiSearch } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between h-[10vh] px-8 items-center">
        <div className="flex-[1]">
          <CiSearch size={25} />
        </div>
        <a href="#" className="text-5xl font-heading">
          Velveta
        </a>
        <div className="flex justify-end flex-[1] gap-5">
          <CiFacebook size={24} />
          <FaPinterestP size={24} />
          <FaInstagram size={24} />
          <FaUser size={24} />
          <RiShoppingBag2Line size={24} />
        </div>
      </nav>
      <nav className="flex pt-5 gap-4 justify-center ">
        <Link to="/">HOME</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">BLOG</Link>
        <Link to="/">CONTACT</Link>
      </nav>
    </>
  );
};
export default Nav;
