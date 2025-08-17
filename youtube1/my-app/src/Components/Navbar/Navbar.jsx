import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiLiveFill } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiVideoLine } from "react-icons/ri";
import { PiShareNetwork } from "react-icons/pi";


import user_profile from '../../assets/user_profile.png'


const Navbar = ({ setSidebar }) => {
    
    const [open, setOpen] = useState(false);
    const dropRef = useRef(null);

    useEffect(() => {
        const onClickOutside = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target))
                setOpen(false);
        };

        document.addEventListener('mousedown', onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside);
        }

    },[])
    

    return (
      
      <nav className='flex-div'>
    
            <div className="nav-left flex-div">   
              <GiHamburgerMenu className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
              <FaYoutube className='logo' />
              <h3>YouTube</h3>
          </div>

          <div className="nav-middle flex-div">
              <div className="search-box flex-div">
              <input type="text" placeholder="Search" />
                  <IoSearch className='search' />
              </div>
              <div className="mic">
                   <FaMicrophone className='mic-icon'/>
              </div>
             
          </div>
      
          <div className="nav-right flex-div">
              
              <div className="create" onClick={()=>setOpen(!open)}>
                  <p>Create</p>
                  <FaPlus className='plus' />

                  {open && (  <div className="dropdown" ref={dropRef}>
                      <div>
                          <RiVideoLine />
                          <p>video</p>
                      </div>
                       <div>
                          <RiLiveFill />
                          <p>Live</p>
                      </div> <div>
                          <PiShareNetwork />
                          <p>Share</p>
                      </div>

                      
                  </div>)}

                


              </div>
              
              <IoIosNotificationsOutline  className='icons'/>
              
              <img src={user_profile} className="img-profile" />
          </div>

          
      
      </nav>
      
  )
}

export default Navbar
