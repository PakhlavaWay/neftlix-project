import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#141414] w-screen pt-20'>
        <div className="wrapper">
            <div className="social-media">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
            </div>
            <div className="links">
                <div className="link-group">
                    <NavLink>Audio Description</NavLink>
                    <NavLink>Investor Relations</NavLink>
                    <NavLink>Legal Notices</NavLink>
                    <NavLink>Do Not Sell or Share My Personal Information</NavLink>
                </div>
                <div className="link-group">
                    <NavLink>Help Center</NavLink>
                    <NavLink>Jobs</NavLink>
                    <NavLink>Cookie Preferences</NavLink>
                </div>
                <div className="link-group">
                    <NavLink>Gift Cards</NavLink>
                    <NavLink>Terms of Use</NavLink>
                    <NavLink>Corporate Information</NavLink>
                </div>
                <div className="link-group">
                    <NavLink>Media Center</NavLink>
                    <NavLink>Privacy</NavLink>
                    <NavLink>Contact Us</NavLink>
                </div>
            </div>
            <div>Service Code</div>
            <p>© 1997-2023 Netflix, Inc.</p>
        </div>
    </footer>
  )
}

export default Footer