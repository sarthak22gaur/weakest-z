import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="flex fixed w-full bottom-0 px-8 py-2 text-lg items-center justify-between bg-slate-900 text-white">
        <div>
        <p>
          Inspired from Theo&apos;s roundest pokemon. Find it here 👉🏻{" "}
          <span className="font-bold tracking-wide">
            <Link href="https://roundest.t3.gg/">roundest.t3.gg</Link>
          </span>
        </p>
        </div>
        <div className="flex items-center gap-8 ">
        <span className="hover:font-bold"><Link  href="/">About</Link></span>
        <span className=" cursor-pointer"><Link href="https://github.com/sarthak22gaur/weakest-z"><FaGithub size={32}/></Link></span>
        </div>
      </div>
    </>
  );
};

export default Footer;
