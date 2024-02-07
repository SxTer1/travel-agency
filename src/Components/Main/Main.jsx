import React, {useEffect, useState} from "react";
import './main.css'
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import { CiLocationOn } from "react-icons/ci";
import { RiFileList3Line } from "react-icons/ri";


import Aos from 'aos';
import 'aos/dist/aos.css';

const Tours = [
    {
        id:1,
        imgSrc: img1,
        tourTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        price: '$700',
        link: 'https://www.jacadatravel.com/australasia/trips/relaxation-and-adventure-in-bora-bora-and-new-zealand/#slideLocation',
        description: "The epitome of romance, Bora Bora is one of the best travel destinations in World. This place is know for it's luxurious stays and adventurous activities"
    },
    {
        id:2,
        imgSrc: img2,
        tourTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        price: '$900',
        link: 'https://www.toursbylocals.com/TajMahalatsunrisetime',
        description: "Explore the timeless beauty of the Taj Mahal in Agra, India. Admire the symmetrical marvel, lush gardens, and intricate details. A journey of love and history awaits."
    },
    {
        id:3,
        imgSrc: img3,
        tourTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        price: '$700',
        link: 'https://www.greatbarriersreef.com/aerial-sightseeing/airplane-tours-in-greatbarriersreef/?gad_source=1&gclid=CjwKCAiAq4KuBhA6EiwArMAw1PgoCckDvO7_2MjB4S-bNrxY6fR-G-EauFDu3mXmxSBJXBKmd7CIchoCqGYQAvD_BwE',
        description: "Dive into the wonders of the Great Barrier Reef in Australia. Marvel at vibrant coral formations, diverse marine life, and pristine waters. An underwater adventure like no other."
    },
    {
        id:4,
        imgSrc: img4,
        tourTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        price: '$1000',
        link: 'https://www.viator.com/Cappadocia/d5609-ttd',
        description: "Uncover the enchanting landscapes of Cappadocia, Turkey. Surreal fairy chimneys, cave dwellings, and hot air balloon rides await, creating a magical experience in this unique destination."
    },
    {
        id:5,
        imgSrc: img5,
        tourTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        price: '$1100',
        link: 'https://www.tripadvisor.com/Attractions-g1575490-Activities-c42-zfm475-Guanajuato_Central_Mexico_and_Gulf_Coast.html',
        description: "Cobblestone streets wind through colorful colonial architecture. Explore historic mines, vibrant plazas, and immerse yourself in the rich cultural tapestry of this UNESCO World Heritage city."
    },
    {
        id:6,
        imgSrc: img6,
        tourTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        price: '$600',
        link: 'https://www.tripadvisor.com/Attraction_Review-g294314-d10075985-Reviews-Machu_Picchu_Peru_Tours-Cusco_Cusco_Region.html',
        description: "Hidden in the Andes, this ancient Incan citadel boasts breathtaking mountain vistas, intricate stone structures, and a profound sense of history."
    },
    {
        id:7,
        imgSrc: img7,
        tourTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        price: '$800',
        link: 'https://www.tourradar.com/v/region-cinque-terre',
        description: "Five charming villages cling to rugged cliffs overlooking the Ligurian Sea. Vibrant colors, scenic trails, and authentic Italian charm create an unforgettable seaside escape."
    },
    {
        id:8,
        imgSrc: img8,
        tourTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        price: '$790',
        link: 'https://www.adventure-life.com/cambodia/siem-reap/angkor-wat',
        description: " Majestic temples rise from lush jungles, showcasing intricate Khmer architecture. A journey through history awaits amidst ancient ruins and spiritual grandeur."
    },
    {
        id:9,
        imgSrc: img9,
        tourTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        price: '$600',
        link: 'https://onlyluxe.com.au/destinations/asia/indonesia-bali.html',
        description: "A tropical paradise of lush landscapes, vibrant culture, and pristine beaches. Explore ancient temples, savor exquisite cuisine, and unwind in the serene beauty of this enchanting island."
    },
]
const Main = () => {


    
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 840);
        
    useEffect(() => {
        Aos.init({duration: 2000, 
                  once: true})
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 840);
            
          };
      
          window.addEventListener('resize', handleResize);

    }, [])

    return(
        <section id="shop" className="main container section">
            <div className="title_content">
                <h3 data-aos="fade-up-right"
                    data-aos-duration="1000"
                    className="title">
                    Most visited destinations
                </h3>
            </div>

            <div id="pages" className="main_content grid">
                {
                    Tours.map(({id, imgSrc, tourTitle, location, grade, price, link, description}) =>{
                        return(
                            <div key={id}  className="tours_cards" data-aos={isWideScreen ? ("custom") : ("fade-up")} data-aos-duration="1000">
                                <div className="tours_img">
                                    <img src={imgSrc} alt={tourTitle}/>
                                </div>
                                <div className="tours_info">
                                    <h4 className="tours_title">
                                        {tourTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <CiLocationOn className="icon"/>
                                        <span className="locations">{location}</span>
                                    </span>

                                    <div className="price_box flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{price}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <a href={link}>
                                            <button className="btn flex" lin>
                                                DETAILS   <RiFileList3Line className="icon"/>
                                            </button>
                                        </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )

}

export default Main
