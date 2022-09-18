import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="hidden md:flex fixed w-full bottom-0 px-8 py-2 text-lg justify-center bg-slate-900 text-white">
        
        <div className="flex items-center gap-8 ">
        <span className="hover:font-bold"><Link  href="/about">About</Link></span>
        <span className=" cursor-pointer"><Link href="https://github.com/sarthak22gaur/weakest-z"><FaGithub size={32}/></Link></span>
        </div>
      </div>
    </>
  );
};

export default Footer;
