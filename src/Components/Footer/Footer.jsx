import React, {useEffect} from "react";
import './footer.css'
import video from "../../Assets/sea_-_24216 (Original).mp4"
import { FiSend } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"; 
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return(
            <section id="contact" className="footer">
                <div className="video_footer">
                    <video src={video} loop autoPlay muted type="video/mp4"/>
                </div>

                <div className="footer_component container">
                    <div className="contact_box flex">
                        <div data-aos="fade-up"  className="contact_text">
                            <small>KEEP IN TOUCH</small>
                            <h2>Travel with us</h2>
                        </div>
                        <div className="input flex">
                            <input data-aos="fade-up"  type="text" placeholder="Enter Email Adress"/>
                            <button data-aos="fade-up"  className="btn flex" type="submit">
                                SEND <FiSend className="icon"/>
                            </button>
                        </div>
                    </div>

                    <div id="about" className="footer_card flex">
                        <div className="footer_intro flex">
                            <div className="logo_box">
                                <a href="#8" className="logo flex">
                                <SiYourtraveldottv  className="icon"/>Travel.
                                </a>
                            </div>

                            <div id="news" className="footer_text">
                                Embark on unforgettable journeys with us. Explore diverse cultures, breathtaking landscapes, 
                                and iconic landmarks. Our passion for travel ensures personalized experiences, creating memories that last a lifetime. 
                                Discover the world's wonders with ease – your gateway to extraordinary adventures awaits.
                            </div>

                            <div className="footer_socials flex">
                                <FaTwitter className="icon"/>
                                <FaYoutube className="icon"/>
                                <AiFillInstagram className="icon"/>
                                <FaTripadvisor className="icon"/>
                            </div>
                        </div>

                        <div className="footer_links grid">

                            {/*Group one*/}

                            <div className="link_group">
                                <span className="group_title">
                                    OUR AGENCY
                                </span>

                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Services
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Insurance
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Agency
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Tourism
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Payment
                                </li>
                            </div>

                            {/*Group two*/}

                            <div className="link_group">
                                <span className="group_title">
                                    PARTNERS
                                </span>

                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Booking
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    RentalCar
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    HostelWorld
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Trivago
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    TripAdvisor
                                </li>
                            </div>

                            {/*Group three*/}

                            <div className="link_group">
                                <span className="group_title">
                                    LAST MINUTE
                                </span>

                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    London
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    California
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Indonesia
                                </li>
                                <li className="footer_list flex">
                                    <FiChevronRight className="icon"/> 
                                    Europe
                                </li>
                                
                            </div>
                        </div>

                        <div className="footer_copyright flex">
                            <small>BEST TRAVEL WEBSITE THEME</small>
                            <small>LAYOUT COPYRIGHT - ISRATECH</small>
                        </div>
                    </div>
                </div>
            </section>
    )

}

export default Footer