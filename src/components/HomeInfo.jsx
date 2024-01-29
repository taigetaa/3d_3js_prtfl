import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-whie mx-5">
      Hi, ny name is <span className="font-semibold">Victoria 🕊️</span>
      <br />
      Web-developer
    </h1>
  ),
  2: (
    <InfoBox
      text="I'm a passionate developer who loves to create."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="I'm always open to new ideas and opportunities."
      link="/achievements"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contacts"
      btnText="Lets talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
