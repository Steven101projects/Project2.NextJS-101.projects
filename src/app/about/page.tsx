import NavWheel from '../../components/NavWheel';
import Link from 'next/link'
import Image from 'next/image'

export default function About(){
    return (

        <div>
            <div className="flex">
      <section id="leftSide" className="flex">
        <div id="links">
          <Link href="/" className="px-2 py-1 text-8xl">
            ABOUT
          </Link>
          <nav>
            <NavWheel />
          </nav>
          <div id="copyRight" className="text-[1.4rem] ml-3.5 mt-2.5">
            Copyright © 2025 <br /> Nico Castro. <br /> All rights reserved.
          </div>
        </div>

        <div id="centerPart" className="">
          <div
            id="helloWorldCard"
            className=" w-[50vw] h-[50vh] ml-3 mt-[5vh] bg-white border border-black rounded-4xl pl-6"
          >
                      <div className="absolute right-5 w-[28vw] h-[50vh]">
                         <Image
              src="/damn.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-4xl w-2xl h-2xl"
            />
          </div>
            <p className="relative bottom-5 text-[3.9vh] text-[#222222] ml-2 italic">
              Believing on creativity and simplicity, I specialize designing and developing innovative digital solutions that combine clean code, efficient system architecture, and user-centered design. With experience in teaching programming and mentoring aspiring developers, I’m passionate about sharing knowledge and building technology that inspires creativity and knowledge.
            </p>
          </div>
        </div>
      </section>

      <section id="rightSide" className="flex justify-end w-full">
          <p className="leading-relaxed text-[3.4vh] p-3 mt-[50vh]">
            <span className="italic font-semibold">Welcome!</span> I’m Nico
            Castro, <br />
            A Software/Web Engineer | <br /> Software System Architect | Graphic
            Designer | Tech Instructor | Tech Leader |
          </p>
      </section>
    </div>
        </div>
    )
}