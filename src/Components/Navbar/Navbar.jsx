import React, {useState} from "react";
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {IoIosCloseCircle} from 'react-icons/io'
import { TbGridDots } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";
//import  uk from "../../Assets/united-states.png";
//import de from "../../Assets/germany.png";
//import ue from "../../Assets/ukraine.png"

const Navbar = () => {
    const [active, setActive] = useState('nav');
    const [visible, setVisible] = useState('backdrop')
    const showNav = () => {
        setActive('nav activeNav')
    }
    const closeNav = () => {
        setActive('nav')
    }
    const toBook = () => {
        setVisible('backdrop active_drop')
    }
    const closeBooking = () => {
        setVisible('backdrop')
    }

    return(
            <section id="nav_section" className="nav_section">
                <header className="header flex">
                    <div className="logoDiv">
                        <a href="#nav_section" className="logo flex">
                            <h1><SiYourtraveldottv  className="icon"/>
                                Trevel.</h1>
                        </a>
                    </div>
                    <div className={active}>
                        <ul className="nav_list flex">
                            <li onClick={closeNav} className="nav_item">
                                <a href="#nav_section" className="nav_link">Home</a>
                            </li>
                            <li onClick={closeNav} className="nav_item">
                                <a href="#packages" className="nav_link">Packages</a>
                            </li>
                            <li onClick={closeNav} className="nav_item">
                                <a href="#shop" className="nav_link">Shop</a>
                            </li>
                            <li onClick={closeNav} className="nav_item">
                                <a href="#about" className="nav_link">About</a>
                            </li>
                            <li onClick={closeNav} className="nav_item">
                                <a href="#pages" className="nav_link">Pages</a>
                            </li>
                            <li onClick={closeNav} className="nav_item">
                                <a href="#contact" className="nav_link">Contact</a>
                            </li>
                            <li onClick={closeNav} className="nav_item">
                                <a href="#news" className="nav_link">News</a>
                            </li>
                            <button className="btn" onClick={toBook}>
                                <a href="#f">BOOK NOW</a>
                            </button>
                        </ul>
                        <div onClick={closeNav} className="nav_closer">
                            <IoIosCloseCircle className="icon"/>
                        </div>
                        
                    </div>
                    

                    <div onClick={showNav} className="switch_nav">
                        
                        <TbGridDots  className="icon"/>
                    </div>
                <div class={visible}>
                    <div class="modal flex">
                       <h2 class="form-title">Booking</h2>
                       
                       <form name="reserve-form" autocomplete="on">
                         <div class="form-field">
                           <label class="form-lebel" htmlFor="name">Name</label>
                           <input class="form-input" 
                                type="text"
                                name="user-name"
                                id="user-name"
                                placeholder="Name"
                                required/>
       
                         </div>
                        <div class="form-field">
                           <label class="form-lebel" htmlFor="phone">Phone</label>
                           <input class="form-input" 
                                type="tel"
                                name="phone" 
                                id="phone"
                                placeholder="Telefonnummer"
                                pattern="^\+49 \d{3} \d{9}$" 
                                required title="Geben Sie die korrekte deutsche Rufnummer ein (+49 xxx xxxxxxx)"
                                />
                        </div>
       
                         <div class="form-field">
                           <label class="form-lebel" htmlFor="desctiption">Describe the desired tour</label>
                           <input class="form-input"
                                type="text"
                                name="reserve-zeit" 
                                id="reserve-zeit"
                                required/>
                         </div>
       
                         <button class="btn" type="submit">Book</button>
                       </form>
                   </div>
                   <div onClick={closeBooking} className="booking_closer">
                            <IoIosCloseCircle className="icon"/>
                    </div>
               </div>
                </header>
            </section>
    )

}


export default Navbar