import React from "react";
import "./About.css";
import pfp from "./pfp.jpg"
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaTwitter, FaLinkedinIn  } from 'react-icons/fa';
export default function About() {
  return (
    <>
      <div className="box p-5" style={{}}>
        <h2>What is Hotline News?</h2>
        <p style={{fontSize : "17px"}}>
          Hotline News is made from React.js framework and use News Api for
          fetching real time news around the world.Hotline News provides
          up-to-date information on current events, popular topics, and the
          latest technology. ​​Hotline News is for people who want to stay
          up-to-date on the latest happenings in the world, whether it be the
          latest information on the latest technology or popular topics.
        </p>
      </div>
      <div className="mybox">
      <div className="card-container">
	<img className="round" src={pfp} alt="user" />
	<h3>Sahil Bhanvadiya</h3>
	<h6>Ahmedabad</h6>
	<p>JavaScript developer and <br/> front-end developer</p>
	
    <ul class="social-icons">
      <li><a href="https://github.com/sahil-bhanvadiya"><FaGithub/></a></li>
      <li><a href="https://www.instagram.com/sahil_bhanvadiya/"><FaInstagram/></a></li>
      <li><a href="https://twitter.com/sahil_bhanvadia?s=09"><FaTwitter/></a></li>
      <li><a href="https://www.linkedin.com/in/sahil-bhanvadiya-7b4094190"><FaLinkedinIn/></a></li>
    </ul>
	
</div>
</div>
    </>
  );
}
