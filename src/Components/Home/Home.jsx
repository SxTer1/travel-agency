import React, {useEffect, useState} from "react";
import './home.css'
import video from '../../Assets/ocean_-_21528 (Original).mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
        setValue(3000); 
        setPosition(0);
    }, [])

    const [value, setValue] = useState(3000); 
    const [position, setPosition] = useState(10);

    const handleInputChange = (event) => {
        const newValue = Number(
          ((event.target.value - event.target.min) * 100) / (event.target.max - event.target.min)
        );
        const newPosition = 10 - newValue * 0.2;
    
        setValue(event.target.value);
        setPosition(newPosition);
      };

    return(
            <section className="home">
                <div className="overlay">
                </div>
                <video src={video} muted autoPlay loop type="video/mp4"></video>

                <div id="packages" className="home_content container">
                    <div className="text">
                        <span data-aos="fade-up" className="text_small">
                            Our Packages
                        </span>
                        <h1 data-aos="fade-up" className="home_title">
                            Search your Holiday
                        </h1>
                    </div>
                    <div data-aos="fade-up" className="cards grid">
                        <div className="location_input">
                            <label htmlFor="city">Search your destination:</label>
                            <div className="input flex">
                                <input type="text" placeholder="Enter name here..."/>
                                <GrLocation className="icon"/>
                            </div>
                        </div>
                        <div className="date_input">
                            <label htmlFor="date">Select your date:</label>
                            <div className="input flex">
                                <input type="date"/>
                            </div>
                        </div>
                        <div className="price_input">
                            <div className="label_total flex">
                                <label htmlFor="price">Max price:</label>
                                <h3 className="total">$5000</h3>
                            </div>
                            <div className="input flex" id="inputV">
                                <div className="range-value" style={{left: `calc(${(value - 1000) / 40}% + (${position}px))`, position: 'relative'}}>
                                        <span>{value}$</span>
                                </div>
                                <input onChange={handleInputChange} step={100} value={value} id="range" type="range" max="5000"
                                min="1000"/>
                            </div>
                            
                        </div>
                        
                        <div className="search_option flex">
                            <HiFilter className="icon"/>
                            <span>MORE FILTER</span>
                        </div>

                    </div>

                    <div data-aos="fade-up" className="home_footer-icons flex">
                        <div className="right_icons">
                            <FiFacebook className="icon"/>
                            <FaInstagram className="icon"/>
                            <FaTwitter className="icon"/>
                        </div>

                        <div className="left_icons">
                            <FaListUl className="icon"/>
                            <TbApps className="icon"/>
                        </div>
                    </div>

                </div>
            </section>
    )

}

export default Home