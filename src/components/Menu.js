import MenuStyling from '../style/menu-style.css'
import HomePage from './HomePage.js'
import React from 'react'
import {Link} from 'react-router-dom'
export default function Menu(){
    const[aboutMeTabHovered, setaboutMeTabHovered] = React.useState(false);
    const[personalProjsTabHovered, setpersonalProjsTabHovered] = React.useState(false);
    const[photosTabHovered, setphotosTabHovered] = React.useState(false);
    const[homeTabHovered, setHomeTabHovered] = React.useState(false);
    let aboutMeTab, personalProjsTab, photosTab, homeTab;
    function aboutMeTabToggle (){
        setaboutMeTabHovered(!aboutMeTabHovered);
    }
    function personalProjsTabToggle (){
        setpersonalProjsTabHovered(!personalProjsTabHovered);
    }
    function photosTabToggle (){
        setphotosTabHovered(!photosTabHovered);
    }
    function homeTabToggle (){
        setHomeTabHovered(!homeTabHovered);
    }

    if(aboutMeTabHovered) 
        aboutMeTab = <div className="hovered-menu-tab" 
                onMouseEnter={aboutMeTabToggle} onMouseLeave={aboutMeTabToggle}>
                <Link to = "/aboutme">About Me</Link>
            </div>;
    else
        aboutMeTab = <div className="menu-tab"
                    onMouseEnter={aboutMeTabToggle} onMouseLeave={aboutMeTabToggle}>
                    About Me
                </div>;
    
    if(personalProjsTabHovered) 
        personalProjsTab = <div className="hovered-menu-tab"
                onMouseEnter={personalProjsTabToggle} onMouseLeave={personalProjsTabToggle}>
                <Link to = "/projects">Personal Projects</Link>
            </div>;
    else
        personalProjsTab = <div className="menu-tab"
                onMouseEnter={personalProjsTabToggle} onMouseLeave={personalProjsTabToggle}>
                Personal Projects
            </div>;
    
    if(photosTabHovered) 
        photosTab = <div className="hovered-menu-tab"
                onMouseEnter={photosTabToggle} onMouseLeave={photosTabToggle}>
                Photos
            </div>;
    else
        photosTab = <div className="menu-tab"
            onMouseEnter={photosTabToggle} onMouseLeave={photosTabToggle}>
            Photos
        </div>;

    if(homeTabHovered) 
        homeTab = <div className="hovered-menu-tab"
                    onMouseEnter={homeTabToggle} onMouseLeave={homeTabToggle}>
                <Link to = "/">Home</Link>
            </div>;
    else
        homeTab = <div className="menu-tab"
            onMouseEnter={homeTabToggle} onMouseLeave={homeTabToggle}>
            Home
        </div>;

    
    {/* <div className='menu-tab' onMouseEnter={setaboutMeTabHovered(!aboutMeTabHovered)}>About Me</div>
            <div className='menu-tab'>Personal Projects</div>
            <div className='menu-tab'>Photos</div> } */}
    return (
        <div className="menu">
            {homeTab}
            {aboutMeTab}
            {personalProjsTab}
            {photosTab}
        </div>
    )
}