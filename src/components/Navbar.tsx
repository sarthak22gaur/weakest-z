import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
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
        <Link href="/results">
        <div className="border-2 text-white font-bold cursor-pointer flex items-center justify-center  border-orange-500 p-2 m-2 hover:text-orange-500 hover:bg-white rounded">
          
            <h1 className="cursor-pointer">Results</h1>
          
        </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
