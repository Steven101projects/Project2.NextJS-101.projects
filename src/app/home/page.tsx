import Link from 'next/link';
import NavWheel from '../../components/NavWheel';

export default function Home(){

    return (
        <div className="flex">
        <section id="leftSide" className="flex">
        <div id="links">
<Link href="/" className="px-2 py-1 text-9xl">
        1O1~
        </Link>
        <nav>
                <NavWheel />
            </nav>
        <div id="copyRight" className="text-[1rem] ml-3.5 mt-2.5">
            Copyright © 2025 <br></br> Nico Castro.  <br></br> All rights reserved.
        </div>
        </div>
        <div id="centerPart" className="">
 <div id="helloWorldCard" className="w-[40vw] ml-4 mt-[10vh] bg-white border border-black rounded-4xl p-8"
>
  <h1 className="text-[5vw]">
    Hello,<span className="italic">World!</span>
  </h1>
  <p className="text-[2.8vh] leading-relaxed text-gray-800">
    How are ya? I’m a creative who loves problem-solving and thinking-critically.
    Man.. living in this world is hard, so let’s make it s easier together!
  </p>
</div>
        <div className="flex">
<div className="flex flex-col items-start space-y-3 mt-4" id="moreButtons">
  <p className="text-gray-700 text-lg">To know more,</p>
  <button className="bg-black text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
    Recent Projects
  </button>
  <button className="bg-black text-white font-medium py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300">
    Let’s Talk!
  </button>
</div>

            {/* Rotating Globe Img */}
  <img
    src="/earth.gif"
    alt="Earth"
    className="absolute top-[35vh] right-[27vw] w-[50vw] h-[50vh] object-contain"
  />
        </div>
        </div>
            </section>
            
            <section id="rightSide">
                <div id="introAboutMe">
                    <img>
                    </img>
                    <p>
                       Welcome! I’m Nico Castro, 
A Software/Web Engineer | System Architect | Graphic Designer | Tech Instructor |Tech Leader | 
                    </p>
                </div>
                {/* Place the External Link Components here */}
            </section>
        </div>
    )
}