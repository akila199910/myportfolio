import { FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import profileImage from "./public/p2.png";

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
        <div>
          <h1>Akila Umayanga</h1>
          <h3>Software Developer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure fuga
            dolor dicta quos, optio sequi facilis sint explicabo neque
            architecto maxime incidunt ducimus quidem, mollitia tenetur
            distinctio. Repellat, quidem itaque.
          </p>
        </div>
        {/* sosial */}
        <div>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <CiLinkedin />
          </a>
        </div>
        {/* profile */}
        <div>
          <Image src={profileImage} alt="profile image" />
        </div>
      </section>
    </main>
  );
}
