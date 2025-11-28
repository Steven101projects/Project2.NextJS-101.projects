import NavWheel from '../../components/NavWheel';
import Link from 'next/link'
import Image from 'next/image'

export default function About(){
    return (

        <div className="bg-[linear-gradient(to_right,_black_5%,_#D41313_95%)] w-screen h-screen text-white">
            <div className="flex">
      <section id="leftSide" className="flex">
        <div id="links">
          <p className="px-2 py-1 text-[5vw]">
            ABOUT
          </p>
          <nav>
            <NavWheel />
          </nav>
          <div id="copyRight" className="text-[1.4rem] ml-3.5 mt-2.5">
            Copyright © 2025 <br /> Nico Castro. <br /> All rights reserved.
          </div>
        </div>

        <div id="centerPart" className="flex flex-col items-center ml-[2vw]">
           <div className="absolute left-[21vw] mt-[4vh] w-[28vw] h-[48vh]">
                         <Image
              src="/damn.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-4xl w-[480px] h-[380px]"
            />
          </div>
          <div
            id="helloWorldCard"
            className="w-[40vw] h-[50vh] mt-[45vh] ml-[5vw] border border-black rounded-[6vh] pl-6"
          >
            <p className="text-right mt-[8vh] text-[3.2vh] text-white mr-6">
              Believing on creativity and simplicity,<br></br> I specialize designing and developing innovative digital solutions that combine clean code, efficient system architecture, and user-centered design. With experience in teaching programming and mentoring aspiring developers, I’m passionate about sharing knowledge and building technology that inspires creativity and knowledge.
            </p>
          </div>
        </div>
      </section>
<section
  id="rightSide"
  className="w-[35vw] flex flex-col mt-[2vh]"
>
  <p id="header" className="relative right-4 text-[4vw] font-serif italic mb-[1vh]">
    Nico Steven Castro
  </p>

  <p className="leading-relaxed text-[4vh] mb-[6vh] text-center">
    Software/Web Engineer <br />
    | System Architect | Graphic Designer | <br />
    Tech Instructor | Tech Leader
  </p>

<div className="bg-[#2b0202]/60 rounded-3xl shadow-md p-4 w-[30vw] ml-[5vh] text-center">
    <p className="italic text-[3vh] text-[#ffffff] mb-2 font-semibold">
      Skill Languages
    </p>
    <p className="text-[2.8vh] text-white leading-snug">
      JavaScript · React · HTML · C# · Python · CSS
    </p>
  </div>
<div
  id="Contacts"
  className="text-[4vh] leading-relaxed mt-6 flex flex-col items-center space-y-4"
>
  {/* Contact Info */}
  <div>
    <p>
      <span className="font-bold text-[#ffffff]">EMAIL:</span>{' '}
      <a
        href="mailto:castroconi101@gmail.com"
        className="hover:text-[#ff8080] hover:underline transition duration-300"
      >
        castroconi101@gmail.com
      </a>
    </p>
    <p>
      <span className="font-bold text-[#ffffff]">PHONE:</span>{' '}
      <a
        href="tel:+14374451436"
        className="hover:text-[#ff8080] transition duration-300"
      >
        +1 437 445 1436
      </a>
    </p>
  </div>

  {/* Other Links */}
  <div className="mt-2">
    <p className="font-bold text-[#fbfbfb] mb-1 text-center">Other Links:</p>
    <nav className="flex space-x-6 text-[4vh]"><p> | </p>
      <a
        href="#"
        className="hover:text-[#ff8080] hover:underline transition duration-300"
      >
        LinkedIn
      </a> <p> | </p>
      <a
        href="#"
        className="hover:text-[#ff8080] hover:underline transition duration-300"
      >
        Github
      </a><p> | </p>
      <a
        href="#"
        className="hover:text-[#ff8080] hover:underline transition duration-300"
      >
        Instagram
      </a><p> | </p>
    </nav>
  </div>
</div>

</section>
    </div>
        </div>
    )
}