import React from "react";
import './Sidebar.css'
import { shortcutLinks , subscribedLinks } from "../../data";

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      
      <div className="shortcut-links">
        {shortcutLinks.map((item, index) => {
          return (
              <div className="side-link" key={index}>
                  <img src={item.icon} alt="" />
                <p>{item.label}</p>
            </div> 
          );
        })}
          </div>
          
          <hr />

          <div className="subscribed-link">
              <h3>Subscribe</h3>
              {
                  subscribedLinks.map((item, index) => {
                      return (
                          <div className="side-link" key={index}>
                              <img src={item.icon} alt="" />
                              <p>{item.label}</p>
                          </div>
                      )
                  })
              }
          </div>
    </div>
  );
};

export default Sidebar;


