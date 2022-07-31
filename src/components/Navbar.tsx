import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full gap-8 px-8 py-2 justify-between bg-orange-500">
        <Image
          className=""
          width="150px"
          height="20px"
          src="/dbz.png"
          alt=""
        />
        <ul className="flex w-full gap-8 px-8 justify-end items-center">
          <li>
            <h1 className="text-2xl font-medium p-4">
              <Link href="/">Vote</Link>
            </h1>
          </li>
          <li className="border-2 border-white p-2 m-2 hover:text-orange-500 hover:bg-white rounded">
            <h1 className="text-2xl font-medium ">
              <Link href="/results">Results</Link>
            </h1>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
