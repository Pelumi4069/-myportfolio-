import React from 'react';
import Github from "../assets/github_733609.png";
import Linked from "../assets/linkedin_1384088.png";
import Insta from "../assets/instagram_1384031.png";
import Twitter from '../assets/twitter_5968958.png';
import Email from '../assets/email.png';

const Socials = () => {
  return (
    <div className='min-h-[146px] flex items-center bg-tertiary'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        <a href="https://github.com/Pelumi4069" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="GitHub" className='p-5 bg-highligh lg:w-20 lg:h-30 rounded-3xl sm:w-20 sm:h-25 xs:w-10 md:h-20 w-20 h-18' />
        </a>
        <a href="https://www.linkedin.com/in/adewunmi-pelumi-09776b210/" target="_blank" rel="noopener noreferrer">
          <img src={Linked} alt="LinkedIn" className='p-5 bg-highligh  lg:w-20 lg:h-30 rounded-3xl sm:w-20 sm:h-25 w-20 h-18' />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram" className='p-5 bg-highligh lg:w-20 lg:h-30 rounded-3xl sm:w-20 sm:h-25 w-20 h-18' />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter" className='p-5 bg-highligh lg:w-20 lg:h-30 rounded-3xl sm:w-20 sm:h-25 w-20 h-18' />
        </a>
        <a href="https://wa.me//+2348141955360"  target="_blank" rel="noopener noreferrer">
          <img src={Email} alt="Email" className='p-5 bg-highligh lg:w-20 lg:h-30 rounded-3xl sm:w-20 sm:h-25 w-20 h-18' />
        </a>
      </div>
    </div>
  );
}

export default Socials;

