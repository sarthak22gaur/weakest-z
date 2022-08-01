import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
      <div className="flex w-full gap-8 px-8 py-2 justify-between bg-slate-900">
        <Link href="/">
          <div className="flex cursor-pointer">
            <Image
              className=""
              width="100px"
              height="30px"
              src="/dbz.png"
              alt=""
            />
          </div>
        </Link>
        <div className="flex items-center text-white gap-8 ">
        <span className="hover:font-bold md:hidden"><Link  href="/about">About</Link></span>
        <Link href="/results">
          <div className="border-2 text-white  cursor-pointer flex items-center justify-center  border-orange-500 p-2 m-2 hover:text-orange-500 hover:bg-white rounded">
            <h1 className="cursor-pointer">Results</h1>
          </div>
        </Link>
        <span className="md:hidden cursor-pointer"><Link href="https://github.com/sarthak22gaur/weakest-z"><FaGithub size={32}/></Link></span>
        
        </div>
      </div>

  );
};

export default Navbar;
