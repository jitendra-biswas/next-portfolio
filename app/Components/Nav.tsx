import Link from "next/link";
import { BsSend } from "react-icons/bs";

const Nav = () => {
  const links = [
    {
      id: "/",
      linkName: "Home",
    },
    {
      id: "#project",
      linkName: "Projects",
    },
   
    {
      id: "#contact",
      linkName: "Contact",
    },
  ];
  return (
    <div className="w-full max-md:w-screen max-sm:w-screen px-[30vw] lg:px-[25vw] max-lg:px-[20vw] max-md:px-[5vw] fixed top-0 left-0 z-99">
      <nav className="w-full h-16 flex items-center justify-between dark:bg-black/50 backdrop-blur-sm bg-gray-100/0">
        <div className="logo">Jitendra.</div>

        <div className="links flex items-center gap-5 tracking-wide">
          {links.map((link, key) => {
            return (
              <Link
                key={key}
                href={link.id}
                className="link text-zinc-400 text-[13px] font-semibold curosr-pointer hover:scale-110 dark:hover:text-zinc-100 transition-all "
              >
                {link.linkName}
              </Link>
            );
          })}
           <Link
            href="#message"
            className="border-2 border-zinc-220 text-sm px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer text-white bg-transparent transition-all"
          >
            <BsSend />
          </Link>
        </div>

        
         
        
      </nav>
    </div>
  );
};

export default Nav;
