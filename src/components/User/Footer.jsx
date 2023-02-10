import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();  
  return (
    <footer className='bg-[#141414] w-screen pt-20 pb-2 min-h-fit'>
        <div className="wrapper flex flex-col gap-y-5">
            <div className="s-media !text-white !flex gap-4">
                <NavLink><FacebookIcon /></NavLink>
                <NavLink><InstagramIcon /></NavLink>
                <NavLink><TwitterIcon /></NavLink>
                <NavLink><YouTubeIcon /></NavLink>
                
            </div>
            <div className="links text-gray-600 text-sm grid grid-cols-footer gap-x-16 gap-y-6">
                <div className="link-group flex flex-col gap-3">
                    <NavLink>Audio Description</NavLink>
                    <NavLink>Investor Relations</NavLink>
                    <NavLink>Legal Notices</NavLink>
                    <NavLink>Do Not Sell or Share My Personal Information</NavLink>
                </div>
                <div className="link-group flex flex-col gap-3">
                    <NavLink>Help Center</NavLink>
                    <NavLink>Jobs</NavLink>
                    <NavLink>Cookie Preferences</NavLink>
                </div>
                <div className="link-group flex flex-col gap-3">
                    <NavLink>Gift Cards</NavLink>
                    <NavLink>Terms of Use</NavLink>
                    <NavLink>Corporate Information</NavLink>
                </div>
                <div className="link-group flex flex-col gap-3">
                    <NavLink>Media Center</NavLink>
                    <NavLink>Privacy</NavLink>
                    <NavLink>Contact Us</NavLink>
                </div>
            </div>
            <div className='text-sm text-gray-600 w-fit border p-1 border-gray-600'>Service Code</div>
            <p className='text-xs text-gray-600'>{`© 1997-${CURRENT_YEAR} Netflix, Inc.`}</p>
        </div>
    </footer>
  )
}

export default Footer