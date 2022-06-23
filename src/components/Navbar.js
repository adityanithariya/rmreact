import React from 'react'
import './css/Navbar.css'

// Images
import logo from './images/home/logo.png'
import menu from './images/home/menu.png'
import home from './images/home/home.mp4'
import report from './images/home/report.png'
import settings from './images/home/settings.png'
import user from './images/home/user.jpg'
import dropdownCaret from './images/home/dropdown-caret.png'

export default function Navbar () {
    
    // Interval for refreshing navbar height
    setInterval(() => {
        let navExpander = document.getElementById("nav-expander-span");
        let navStatic = document.getElementById("nav-static");
        navExpander.style.height = window.innerHeight + "px";
        navStatic.style.height = window.innerHeight + "px";
    }, 1);

    function toggleNotifBar() {
        let navBar = document.getElementById("nav-expander-span");
        let sideBar = document.getElementsByClassName("nav-side-bar");
        let navMenu = document.getElementById("nav-open-menu");
        let navCover = document.getElementById("nav-cover");
        let profileDowArrow = document.getElementById("profile-downarrow");
        let profileMenu = document.getElementById("dd-profile-menu");

        if (window.matchMedia("(max-width:600px)").matches) {
            if (navBar.style.width !== "150px") {
                navBar.style.width = "150px";
                sideBar[0].style.left = "144px";
                profileMenu.style.left = "135px";
                profileDowArrow.style.left = "75px";
                profileDowArrow.style.top = "2px";
                navCover.style.width = "100%";
                navCover.style.height = "100%";
                navCover.style.backdropFilter = "blur(3px)";
                navCover.style.backgroundColor = "rgb(236 239 255 / 40%)";
                setTimeout(() => {
                    navMenu.style.display = "flex";
                }, 300);
            }
            else{
                navBar.style.width = "60px";
                sideBar[0].style.left = "54px";
                profileDowArrow.style.left = "-7px";
                profileDowArrow.style.top = "0px";
                profileMenu.style.left = "50px";
                navMenu.style.display = "none";
                navCover.style.backdropFilter = "blur(0px)";
                navCover.style.backgroundColor = "transparent";
                setTimeout(() => {
                    navCover.style.width = "0%";
                    navCover.style.height = "0%";
                }, 300);
            }
        
            // Timeouts, to check correct state at last of animation
            setTimeout(() => {
                if (navBar.style.width !== "150px" && navMenu.style.display === "flex") {
                    navMenu.style.display = "none";
                }
                if (navBar.style.width === "150px" && navCover.style.width === "0%") {
                    navCover.style.width = "100%";
                    navCover.style.height = "100%";
                }
            }, 300);
            setTimeout(() => {
                if (navBar.style.width === "150px" && navCover.style.width === "0%") {
                    navCover.style.width = "100%";
                    navCover.style.height = "100%";
                }
            }, 300);
        }
        else{
            
            if (navBar.style.width !== "180px") {
                navBar.style.width = "180px";
                sideBar[0].style.left = "173.5px";
                profileMenu.style.left = "160px";
                profileDowArrow.style.left = "90px";
                navCover.style.width = "100%";
                navCover.style.height = "100%";
                navCover.style.backdropFilter = "blur(3px)";
                navCover.style.backgroundColor = "rgb(236 239 255 / 40%)";
                setTimeout(() => {
                    navMenu.style.display = "flex";
                }, 300);
            }
            else{
                navBar.style.width = "75px";
                sideBar[0].style.left = "68.5px";
                profileMenu.style.left = "65px";
                profileDowArrow.style.left = "-7px";
                navMenu.style.display = "none";
                navCover.style.backdropFilter = "blur(0px)";
                navCover.style.backgroundColor = "transparent";
                setTimeout(() => {
                    navCover.style.width = "0%";
                    navCover.style.height = "0%";
                }, 300);
            }
        
            // Timeouts, to check correct state at last of animation
            setTimeout(() => {
                if (navBar.style.width !== "180px" && navMenu.style.display === "flex") {
                    navMenu.style.display = "none";
                }
                if (navBar.style.width === "180px" && navCover.style.width === "0%") {
                    navCover.style.width = "100%";
                    navCover.style.height = "100%";
                }
            }, 300);
            setTimeout(() => {
                if (navBar.style.width === "180px" && navCover.style.width === "0%") {
                    navCover.style.width = "100%";
                    navCover.style.height = "100%";
                }
            }, 300);
        }
    }

    function ddMenuCover(event) {
        let profileMenu = document.getElementById("dd-profile-menu");
        let profileMenuCover = document.getElementById("ddmenu-cover");

        if (profileMenu.style.display === "none") {
            profileMenu.style.display = "flex";
            profileMenuCover.style.width = "100vw";
            profileMenuCover.style.height = "100vh";
            console.log("show");
        }
        else{
            profileMenu.style.display = "none";
            profileMenuCover.style.width = "0";
            profileMenuCover.style.height = "0";
            console.log("hide");
        }
    }
    

    return (
        <header>
        <nav>
            <span id="nav-expander-span">
                <span id="nav-static" className="align-center">
                    <a href="/srijan" id="logo">
                        <img src={logo} alt="Logo" className="align-center" id="logo-img"/>
                    </a>
                    <div id="nav-center-div">
                        <div className="align-center" id="menu" onClick={toggleNotifBar}>
                            <img className="align-center nav-img" src={menu} alt=""/>
                        </div>
                        <div className="align-center" id="home">
                            <span className="nav-side-bar"></span>
                            <video className="align-center nav-img" id="home-vid" autoPlay={true} muted="muted" src={home}></video>
                        </div>
                        <a href="/reports" className="align-center">
                            <img className="align-center nav-img" src={report} alt=""/>
                        </a>
                        <a href="/settings" className="align-center">
                            <img className="align-center nav-img" src={settings} alt=""/>
                        </a>
                    </div>
                    <button className="align-center profile-btn" onClick={ddMenuCover}>
                        <div className="align-center" id="profile-btn-div">
                            <img className="align-center" id="profile-img" src={user} alt=""/>
                            <img className="dropdown-caret" id="profile-downarrow" src={dropdownCaret} alt="↓"/>
                        </div>
                        <div id="dd-profile-menu" className="align-center" style={{display: 'none'}}>
                            <a href="/profile" id="profile-anchor">Signed In as <strong>AnonymousUser</strong></a>
                            <a href="/logout" id="logout">Logout</a>
                        </div>
                        <span id="ddmenu-cover" style={{width: '0px', height: '0px'}}></span>
                    </button>
                </span>
                <span id="nav-open-menu">
                    <a href="/srijan" id="logo-txt" className="align-center">Srijan</a>
                    <div id="nav-center-txt-div">
                        <div className="nav-txts align-center" id="menu-txt" onClick={toggleNotifBar}>Menu</div>
                        <div className="nav-txts align-center" id="home-txt"><span id="home-txt-span">Home</span></div>
                        <a href="/reports" className="nav-txts align-center" id="reports-txt">Reports</a>
                        <a href="/settings" className="nav-txts align-center" id="settings-txt">Settings</a>
                    </div>
                    <button className='profile-btn' id="profile-txt" onClick={ddMenuCover}>Profile</button>
                </span>
            </span>
            <span id="nav-cover" onClick={toggleNotifBar}></span>
        </nav>
    </header>
    )
}
