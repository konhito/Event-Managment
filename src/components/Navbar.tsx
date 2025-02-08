  import React from "react";
  import { Github, CalendarSync } from "lucide-react";
  import Link from "next/link";

  const Navbar = () => {
    return (
      <nav className=" sticky  top-0 flex justify-around items-center gap-0 backdrop-blur-lg border-b-2 border-white/10">
        <div className="flex items-center gap-3">
          <Link href={"/"} className=" p-2 text-center ">
            <h1 className=" text-3xl w-full font-Montserrat uppercase tracking-wide font-bold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient">
              Event Managment
            </h1>
            <p className=" opacity-60 text-xs font-normal text-white">
              Manage with class
            </p>
          </Link>
          <CalendarSync size={30} className=" opacity-60 text-white" />
        </div>
        <a target="_blank" href="https://github.com/konhito">
          <Github size={30} className=" mr-6 text-white" />
        </a>
      </nav>
    );
  };

  export default Navbar;
