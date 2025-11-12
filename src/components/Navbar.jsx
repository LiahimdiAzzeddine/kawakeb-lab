import { useState } from "react";
import { Link } from "react-router-dom";
import { Socials, navLinks } from "../constants";
import { SocialMediaButton } from "./sub-components";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (title) => {
    setActiveLink(title);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20  backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center ms:max-w-[90%] max-w-full custom-max-w mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => handleLinkClick("")}>
        <img
            src={logo}
            alt="logo"
            className="w-13 h-8 object-contain cursor-pointer"
            loading="lazy"
          />
        </Link>

        <ul className="list-none hidden gap-10 w-[450px] h-full sm:flex flex-row items-center justify-around">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${activeLink === nav.title ? "text-[#00d7e8]" : "text-white"} hover:text-[#00a8b5] text-[1.2rem] font-medium cursor-pointer`}
              onClick={() => handleLinkClick(nav.title)}
            >
              <a className="Navlink" href={`#${nav.id}`} aria-label={nav.title}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="list-none hidden sm:flex flex-row gap-5">
          {Socials.map((social) => (
            <SocialMediaButton
              key={social.title}
              d={social.d}
              color={social.color}
              title={social.title}
              link={social.link}
            />
          ))}
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuOpen ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div
            className={`${menuOpen ? "flex" : "hidden"} p-6 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10`}
            style={{ background: "linear-gradient(to right, rgba(46, 40, 49, 0.8), rgba(26, 57, 60, 0.9))" }}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer ${activeLink === nav.title ? "text-[#30877a]" : "text-white"}`}
                  onClick={() => handleLinkClick(nav.title)}
                >
                  <a href={`#${nav.id}`} aria-label={nav.title}>
                    {nav.title}
                  </a>
                </li>
              ))}

              <div className="flex flex-row gap-5">
                {Socials.map((social) => (
                  <SocialMediaButton
                    key={social.title}
                    d={social.d}
                    color={social.color}
                    title={social.title}
                    link={social.link}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
