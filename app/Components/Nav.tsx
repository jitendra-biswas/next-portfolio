import Link from "next/link";
import {ModeToggle} from '@/app/Components/Togglebtn'



const Nav = () => {
  const links = [
    {
      id:"/",
      linkName:"Home"
    },
    {
      id:"contact",
      linkName:"Contact"
    },
  ]
  return (
   <div className="w-[35vw] lg:w-[45vw] max-lg:w-[60vw] max-md:w-[80vw] fixed z-99">
     <nav className="w-full h-16 flex items-center justify-between dark:bg-black/50 backdrop-blur-sm ">
      

      <div className="links flex items-center gap-5 tracking-wide">
        {links.map((link,key)=>{
          return (
            <Link key={key} href={link.id} className="link text-zinc-400 text-[13px] font-semibold curosr-pointer hover:scale-110 dark:hover:text-zinc-100 transition-all ">{link.linkName}</Link>
          )
        })}
      </div>

          <ModeToggle />
     
    </nav>
   </div>
  );
};

export default Nav;