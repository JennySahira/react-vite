import React from 'react';
import './SocialMedia.css';
import facebookIcon from '../assets/contact/facebook.svg';
import xIcon from '../assets/contact/x.svg';
import instagramIcon from '../assets/contact/instagram.svg';
import youtubeIcon from '../assets/contact/youtube.svg';

function SocialMedia() {
  return (
    <div className="some">
      <img src={facebookIcon} className="facebook" alt="facebook" />
      <img src={xIcon} className="x" alt="x" />
      <img src={instagramIcon} className="instagram" alt="instagram" />
      <img src={youtubeIcon} className="youtube" alt="youtube" />
    </div>
  );
}

export default SocialMedia;