"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, useMemo } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar with cleanup
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = useCallback(() => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, []);

  useEffect(() => {
    // Add scroll listener
    window.addEventListener("scroll", handleStickyNavbar);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, [handleStickyNavbar]);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  // Memoized classes for performance
  const headerClasses = useMemo(
    () =>
      `header top-0 left-0 z-40 flex w-full items-center transition-all duration-500 ease-out ${sticky
        ? "fixed z-[9999] bg-[#0b0b10]/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/[0.08]"
        : "absolute bg-transparent"
      }`,
    [sticky]
  );

  const logoClasses = useMemo(
    () => `header-logo block w-full transition-all duration-500 ease-out ${sticky ? "py-5 lg:py-2" : "py-8"}`,
    [sticky]
  );

  const mobileMenuClasses = useMemo(
    () =>
      `navbar border-white/10 bg-[#0b0b10] absolute right-0 z-30 w-[250px] rounded border-[.5px] px-6 py-4 transition-all duration-300 ease-out lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
        ? "visible top-full opacity-100 scale-100"
        : "invisible top-[120%] opacity-0 scale-95"
      }`,
    [navbarOpen]
  );

  return (
    <>
      <header className={headerClasses}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-72 max-w-full px-4 xl:mr-12">
              <Link href="/" className={logoClasses}>
                <Image
                  src="/images/logo/logo.svg"
                  alt="FAZENA Logo"
                  width={180}
                  height={40}
                  className="w-full h-auto"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Toggle mobile menu"
                  aria-expanded={navbarOpen}
                  aria-controls="navbarCollapse"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "top-[7px] rotate-45" : ""
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "opacity-0" : ""
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "top-[-8px] -rotate-45" : ""
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  role="navigation"
                  aria-label="Main navigation"
                  className={mobileMenuClasses}
                >
                  <ul className="block lg:flex">
                    {menuData.map((menuItem, index) => (
                      <li
                        key={index}
                        className={`group relative ${menuItem.special ? "flex items-center" : ""
                          } ${index === 0
                            ? "lg:ml-0"
                            : menuItem.title === "Join us"
                              ? "lg:ml-4"
                              : "lg:ml-10"
                          }`}
                      >
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={
                              menuItem.special
                                ? `inline-flex items-center rounded border border-[#ea7414] px-5 py-1.5 text-sm font-medium transition-colors duration-300 ${menuItem.filled
                                  ? "bg-[#ea7414] text-white hover:bg-[#ea7414]/90 border-transparent shadow-[0_4px_14px_rgba(234,116,20,0.3)]"
                                  : "text-white hover:bg-[#ea7414]/10"
                                }`
                                : `flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path
                                  ? "text-primary"
                                  : "text-white/70 hover:text-white"
                                }`
                            }
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => handleSubmenu(index)}
                              aria-expanded={openIndex === index}
                              aria-haspopup="true"
                              className="text-white/70 group-hover:text-white flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 w-full"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                            <div
                              role="menu"
                              className={`submenu relative top-full left-0 rounded-sm bg-[#0b0b10] border border-white/10 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                                }`}
                            >
                              {menuItem.submenu?.map((submenuItem, subIndex) => (
                                <Link
                                  href={submenuItem.path || "#"}
                                  key={subIndex}
                                  role="menuitem"
                                  className="text-white/70 hover:text-white block rounded-sm py-2.5 text-sm lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
