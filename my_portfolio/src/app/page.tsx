"use client";
import { FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";

// {iamge}
import profileImage from "./public/p2.png";
import graphisDesign from "./public/design.png";
import Code from "./public/code.png";
import image1 from "./public/web1.png";
import image2 from "./public/web2.png";
import image3 from "./public/web3.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkmode] = useState(false);

  // Add dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className={darkMode ? "dark:" : ""}>
      <main className=" bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        <section>
          <nav className=" py-10 flex justify-between">
            <h1 className=" text-sm md:text-xl dark:text-white">
              Develop b atomic arts
            </h1>
            <ul className=" flex items-center">
              <li>
                <FaMoon
                  onClick={() => setDarkmode(!darkMode)}
                  className=" cursor-pointer text-xl mx-5 dark:text-white"
                />
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
            <h1 className=" text-5xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4">
              Akila Umayanga
            </h1>
            <h3 className="text-2xl py-4 md:text-3xl dark:text-white">
              Software Developer
            </h3>
            <p className=" text-sm py-4 text-gray-400 leading-6 max-w-xl mx-auto dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              fuga dolor dicta quos, optio sequi facilis sint explicabo neque
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
            <h2 className=" text-5xl py-10 font-bold opacity-60 dark:text-white">
              Services I Offer
            </h2>
            <p className=" text-sm py-2 text-gray-400 leading-6 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              fuga dolor dicta quos, optio sequi facilis sint explicabo neque
              architecto maxime incidunt ducimus quidem, mollitia tenetur
              distinctio. Repellat, quidem itaque.
            </p>
          </div>
          {/* services card */}
          <div className=" md:flex lg:flex gap-10 mx-auto">
            {/* card */}
            <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image
                src={graphisDesign}
                alt="graphs"
                width={100}
                height={100}
                className=" inline"
              />
              <h2 className=" text-2xl font-bold dark:text-white">
                Graphic Designing
              </h2>
              <p className=" text-sm py-2 text-gray-800 leading-6 dark:text-white">
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
              <h2 className=" text-2xl font-bold dark:text-white">
                Graphic Designing
              </h2>
              <p className=" text-sm py-2 text-gray-800 leading-6 dark:text-white">
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
              <h2 className=" text-2xl font-bold dark:text-white">
                Graphic Designing
              </h2>
              <p className=" text-sm py-2 text-gray-800 leading-6 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ut
                molestias blanditiis, quo enim harum fuga animi. Ipsam odit
                veritatis
              </p>
            </div>
          </div>
        </section>
        {/* my work */}
        <section>
          <div>
            <h2 className=" text-5xl py-10 font-bold opacity-60 dark:text-white">
              Portfolio
            </h2>
            <p className=" text-sm py-2 text-gray-400 leading-6 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              fuga dolor dicta quos, optio sequi facilis sint explicabo neque
              architecto maxime incidunt ducimus quidem, mollitia tenetur
              distinctio. Repellat, quidem itaque.
            </p>
          </div>
          <div className=" flex flex-col gap-10 p-10 lg:flex-row flex-wrap">
            <div className=" basis-1/3 flex-1">
              <Image
                src={image1}
                alt="image1"
                layout="responsive"
                className=" rounded-lg object-cover"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={image2}
                alt="image1"
                layout="responsive"
                className=" rounded-lg object-cover"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={image3}
                alt="image1"
                layout="responsive"
                className=" rounded-lg object-cover"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={image1}
                alt="image1"
                layout="responsive"
                className=" rounded-lg object-cover"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={image2}
                alt="image1"
                layout="responsive"
                className=" rounded-lg object-cover"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <Image
                src={image3}
                alt="image1"
                layout="responsive"
                className=" rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        {/* footer */}
        <footer className=" border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center dark:border-white">
          <div>
            <h3 className=" text-base mb-2 dark:text-white">
              Contact me for more details
            </h3>
            <p className=" opacity-40 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odit repellendus voluptatum, placeat veritatis expedita a amet,
              accusamus praesentium veniam sunt obcaecati reiciendis unde
              maiores, ullam repudiandae cupiditate! Iure, sequi!
            </p>
          </div>
          <div>
            <div className=" text-5xl flex justify-center gap-16 text-gray-600">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <CiLinkedin />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
