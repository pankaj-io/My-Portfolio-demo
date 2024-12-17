import React from 'react';
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

import pic from '../../public/public/mypic.png';

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0"> {/* Removed my-20 */}
        <div className="flex flex-col md:flex-row">
          {/* Content div */}
          <div className="md:w-1/2 mt-0 md:mt-6 space-y-2 order-2 md:order-1"> {/* Adjusted order */}
            <span className='text-2xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1 className='font-bold'>Hello!, I'm</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className='text-red-800 font-bold '
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={60}
                backSpeed={70}
                loop={true}
              />
            </div>
            <br />
            <p className='text-md md:text-xl text-justify md:pb-8'>Lorem i psum dolor, sit amet consectetur adipisicing elit. Tempore mollitia sapiente, quasi amet delectus voluptate quo alias dolores ducimus, repellendus, quia veniam iusto suscipit quam. Asperiores tempora quas veritatis, eligendi atque quia assumenda dolores vel voluptatum, quam, temporibus dolorem veniam excepturi.</p>
            <br />
            {/*social media icons */}
            <div className='md:flex justify-between'>
              <div>
                <div>
                  <h1 className='text-md md:text-xl font-semibold'>Available on</h1>
                </div>
                <div className="flex justify-evenly my-4 text-2xl space-x-2 md:text-4xl md:space-x-4 hover:cursor-pointer">
                <div class="hover:scale-105 duration-200 cursor-pointer hover:text-blue-900">
                  <a href="https://www.facebook.com/profile.php?id=100008188214911&name=xhp_nt_" target="_blank" rel="noopener noreferrer">
                    <RiFacebookBoxLine />
                  </a>
                </div>
                <div class="hover:scale-105 duration-200 cursor-pointer hover:text-red-600">
                  <a href="https://www.instagram.com/kumarpankaj8271/profilecard/?igsh=MWMyMnozYjZreDdi" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
                <div class="hover:scale-105 duration-200 cursor-pointer hover:text-blue-900">
                  <a href="https://www.linkedin.com/in/pankaj-kumar-056090268/" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin />
                  </a>
                </div>
                <div class="hover:scale-105 duration-200 cursor-pointer hover:text-black">
                  <a href="https://github.com/pankaj-io" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                </div>


                  {/* <div>{<FaInstagram />}</div>
                  <div>{<CiLinkedin />}</div>
                  <div>{<FiGithub />}</div> */}
                </div>
              </div>
              <br />
              <div>
                <div>
                  <h1 className='text-md md:text-xl font-semibold'>Currently working on</h1>
                </div>
                <div className="flex justify-evenly my-4 text-2xl md:text-4xl ">
                  <div class="hover:scale-105 duration-200  hover:text-green-600">{<SiMongodb />}</div>
                  <div class="hover:scale-105 duration-200  hover:text-cyan-800">{<SiExpress />}</div>
                  <div class="hover:scale-105 duration-200  hover:text-blue-800">{<FaReact />}</div>
                  <div class="hover:scale-105 duration-200  hover:text-green-800">{<FaNodeJs />}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image div */}
          <div className="md:w-1/2 m-4 md:pl-32 md:pt-4 order-1 md:order-2">
            <img className="rounded-full " src={pic} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
