import { FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import profileImage from "./public/p2.png";
import graphisDesign from "./public/design.png";
import Code from "./public/code.png";

export default function Home() {
  return (
    <main className=" bg-yellow-50 min-h-screen px-10">
      <section>
        <nav className=" py-10 flex justify-between">
          <h1 className=" text-sm">Develop b atomic arts</h1>
          <ul className=" flex items-center">
            <li>
              <FaMoon className=" cursor-pointer text-xl mx-5" />
            </li>
            <li>
              <a
                href=""
                className="bg-yellow-400 text-black 
                px-4 py-2 border-none rounded-md"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        {/* {this is hero part} */}
        <div className=" text-center p-10">
          <h1 className=" text-5xl font-bold text-yellow-400">
            Akila Umayanga
          </h1>
          <h3 className="text-2xl py-4">Software Developer</h3>
          <p className=" text-sm py-4 text-gray-400 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure fuga
            dolor dicta quos, optio sequi facilis sint explicabo neque
            architecto maxime incidunt ducimus quidem, mollitia tenetur
            distinctio. Repellat, quidem itaque.
          </p>
        </div>
        {/* sosial */}
        <div className=" text-5xl flex justify-center gap-16 text-gray-600">
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <CiLinkedin />
          </a>
        </div>
        {/* profile */}
        <div className=" m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
          <Image
            src={profileImage}
            alt="profile image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      {/* services */}
      <section>
        <div>
          <h2 className=" text-5xl py-10 font-bold opacity-60">
            Services I Offer
          </h2>
          <p className=" text-sm py-2 text-gray-400 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure fuga
            dolor dicta quos, optio sequi facilis sint explicabo neque
            architecto maxime incidunt ducimus quidem, mollitia tenetur
            distinctio. Repellat, quidem itaque.
          </p>
        </div>
        {/* services card */}
        <div>
          {/* card */}
          <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image
              src={graphisDesign}
              alt="graphs"
              width={100}
              height={100}
              className=" inline"
            />
            <h2 className=" text-2xl font-bold">Graphic Designing</h2>
            <p className=" text-sm py-2 text-gray-800 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut
              molestias blanditiis, quo enim harum fuga animi. Ipsam odit
              veritatis
            </p>
          </div>
          <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image
              src={Code}
              alt="graphs"
              width={100}
              height={100}
              className=" inline"
            />
            <h2 className=" text-2xl font-bold">Graphic Designing</h2>
            <p className=" text-sm py-2 text-gray-800 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut
              molestias blanditiis, quo enim harum fuga animi. Ipsam odit
              veritatis
            </p>
          </div>
          <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image
              src={graphisDesign}
              alt="graphs"
              width={100}
              height={100}
              className=" inline"
            />
            <h2 className=" text-2xl font-bold">Graphic Designing</h2>
            <p className=" text-sm py-2 text-gray-800 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut
              molestias blanditiis, quo enim harum fuga animi. Ipsam odit
              veritatis
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
