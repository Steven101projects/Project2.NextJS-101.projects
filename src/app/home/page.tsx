import Link from 'next/link';
import NavWheel from '../../components/NavWheel';
import ExternalLinks from '../../components/ExternalLinks';

export default function Home(){

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
            Copyright © 2025 <br></br> Nico Castro.  <br></br> All rights reserved.
        </div>
        </div>
        <div id="centerPart" className="">
 <div id="helloWorldCard" className="right-[2vw] w-[50vw] h-[50vh] ml-3 mt-[5vh] bg-white border border-black rounded-4xl pl-6"
>
  <h1 className="text-[7.4vw] text-[#222222]">
    Hello,<span className="italic">World!</span>
  </h1>
<p className="relative bottom-5 text-[3.9vh] text-[#222222] ml-2">
  Hey there! I’m a creative and tech enthusiast who loves solving problems, thinking critically, 
  and bringing ideas to life through innovation. Life can be challenging at times, <br /> 
  so let’s make it easier together!
</p>
</div>
<div id="centerPartBottom" className="flex">
<div className="flex flex-col items-start space-y-3 mt-4" id="moreButtons">
  <p className="text-black text-2xl">To know more,</p>

  <button className="relative overflow-hidden bg-black text-2xl text-white py-2 px-6 rounded-full w-56 h-20 transform transition duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300 hover:text-black shadow-lg">
    <span className="relative z-10">Recent Projects</span>
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
  </button>

  <button className="relative overflow-hidden bg-black text-2xl text-white py-2 px-6 rounded-full w-56 h-20 transform transition duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300 hover:text-black shadow-lg">
    <span className="relative z-10">Let’s Talk!</span>
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
  </button>
</div>

  {/* Rotating Globe Img */}
  <img
    src="/earth.gif"
    alt="Earth"
    className="absolute top-[42vh] right-[13vw] w-[55vw] h-[55vh] object-contain"
  />
        </div>
        </div>
</section>
            
          <section
  id="rightSide"
  className="flex justify-end w-full"
>
  <div
    id="introAboutMe"
    className="blackBox bg-black text-white rounded-l-4xl mt-10 p-4 flex flex-col max-sm:"
  >
<img
  className="absolute right-5 w-[28vw] h-[50vh] object-cover rounded-4xl "
  src="damn.jpg"
  alt="Profile"
/>
    <p className="leading-relaxed text-[3.4vh] p-3  mt-[50vh]">
      <span className="italic font-semibold">Welcome!</span> I’m Nico Castro, <br />
      A Software/Web Engineer | <br /> Software System Architect |  Graphic Designer | Tech
      Instructor | Tech Leader |
    </p>
  </div>
  {/* Place the External Link Components here */}
  <ExternalLinks />
</section>

        </div>
    )
}