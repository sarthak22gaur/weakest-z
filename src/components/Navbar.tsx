import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full gap-8 px-8 py-2 justify-between bg-slate-900">
        <Link href="/">
          <div className="flex cursor-pointer">
            <Image
              className=""
              width="150px"
              height="50px"
              src="/dbz.png"
              alt=""
            />
          </div>
        </Link>
        
          <ul className="flex w-full gap-8 px-8 justify-end items-center">
          <Link href="/results">
            <li className="border-2 flex items-center justify-center text-white border-orange-500 p-2 m-2 hover:text-orange-500 hover:bg-white rounded">
              <h1 className="text-2xl font-medium cursor-pointer">Results</h1>
            </li>
            </Link>
          </ul>
        
      </div>
    </>
  );
};

export default Navbar;
