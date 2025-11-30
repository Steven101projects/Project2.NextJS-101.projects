import Link from "next/link";
import NavWheel from "../../components/NavWheel";
import ExternalLinks from "../../components/ExternalLinks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <section id="leftSide" className="flex">
        <div id="links">
          <Link href="/" className="px-2 py-1 text-8xl">
            1O1~
          </Link>
          <nav>
            <NavWheel />
          </nav>
          <div id="copyRight" className="text-[1.4rem] ml-3.5 mt-2.5">
            Copyright © 2025 <br /> Nico Castro. <br /> All rights reserved.
          </div>
        </div>

        <div id="centerPart" className="">
            <div className="absolute left-[21vw] mt-[4vh] w-[28vw] h-[68vh]">
                                   <Image
                        src="/damn.jpg"
                        alt="Profile"
                        fill
                        className="object-cover rounded-4xl w-[480px] h-[380px]"
                      />
                    </div>
          <div
            id="helloWorldCard"
            className="relative left-[35vw] w-[60vw] h-[55vh] ml-3 mt-[8vh] bg-white border border-black rounded-4xl pl-6"
          >
            <h1 className="text-[7.4vw] text-[#222222]">
              Hello,<span className="italic">World!</span>
            </h1>
            <p className="relative bottom-5 text-[3.9vh] text-[#222222] ml-2 italic">
              Hey there! I’m a creative and tech enthusiast <br /> who loves solving
              problems, thinking critically, <br /> and bringing ideas to life through
              innovation.<br /> Life can be challenging at times, <br />
              so let’s make it easier together!
            </p>
          </div>

          <div id="centerPartBottom" className="mt-[13vh]">
                          <p className="text-black text-2xl">Welcome! I'm Nico Castro. To know more:</p>
            <div
              className="flex items-start space-x-5 mt-4 ml-5"
              id="moreButtons"
            >


<Link href="/projects/#projectsDiv">
              <button className="relative hover:font-mono overflow-hidden hover:border-2 hover:border-black bg-black text-2xl text-white py-2 px-6 rounded-full w-56 h-20 transform transition duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300 hover:text-black shadow-lg">
                <span className="relative z-10">Recent Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
              </button>
</Link>
<Link href="/services">
              <button className="relative hover:font-mono overflow-hidden hover:border-2 hover:border-black bg-black text-2xl text-white py-2 px-6 rounded-full w-56 h-20 transform transition duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300 hover:text-black shadow-lg">
                <span className="relative z-10">Let’s Talk!</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
              </button>
</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="rightSide" className="flex justify-end w-full">
        {/* External Links Component */}
         <div className="relative left-[10vw] top-[8vh] w-[560px] h-[560px] object-contain">
              <Image
                src="/earth.gif"
                alt="Earth"
                fill
                className="object-contain"
              />
            </div>
        <ExternalLinks />
      </section>
      <section id="endSide">
        <div className="w-[40vw] h-full">
<p>Nico Pogi</p>
        </div>
      </section>
    </div>
  );
}
