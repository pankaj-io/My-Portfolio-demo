import React from 'react';
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div>
        <footer className="footer footer-center bg-slate-300 text-base-content rounded p-10 ">
          {/* <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav> */}
          
          <nav>
            
            <div className="flex justify-evenly my-4 text-2xl space-x-2 md:text-4xl md:space-x-4 hover:cursor-pointer">
              <div className="hover:scale-105 duration-200 cursor-pointer hover:text-blue-900">
                <a href="https://www.facebook.com/profile.php?id=100008188214911&name=xhp_nt_" target="_blank" rel="noopener noreferrer">
                  <RiFacebookBoxLine />
                </a>
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer hover:text-red-600">
                <a href="https://www.instagram.com/kumarpankaj8271/profilecard/?igsh=MWMyMnozYjZreDdi" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer hover:text-blue-900">
                <a href="https://www.linkedin.com/in/pankaj-kumar-056090268/" target="_blank" rel="noopener noreferrer">
                  <CiLinkedin />
                </a>
              </div>
              <div className="hover:scale-105 duration-200 cursor-pointer hover:text-black">
                <a href="https://github.com/pankaj-io" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
              </div>   
            </div>

           
            
          </nav>
          
          <aside>
            <p>Copyright © {new Date().getFullYear()} - Pankaj Kumar</p>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default Footer;
