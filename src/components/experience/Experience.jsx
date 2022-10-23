import React from 'react'
import './experience.css'
import Boeing from '../../assets/Boeing.jpg'
import Hydroflow from '../../assets/Hydroflow.jpg'
import SouthRoof from '../../assets/SouthRoof.jpg'
import SOCCCD from '../../assets/SOCCCD.jpg'

// Import Swiper React components
import { Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        company_img: Boeing,
        company_name: 'Boeing',
        title: 'Software Engineer',
        work: { 
            line1: "Designed, implemented, and maintained microservices part of the WGS (Worldwide Global Sat-com) program",
            line2: "Created a broker relay service using websockets and spring boot (Java) to receive and send JMS messages",
            line3: "Created a standalone windows service to run microservices without the use of command line or an IDE",
            line4: "Built templates for new tables using SQL, PGadmin, and DBVisualizer for PostGres and MongoDB Databases"
        }    
    },
    {
        company_img: Hydroflow,
        company_name: 'Hydroflow',
        title: 'Mobile Android Developer',
        work: { 
            line1: "Created and launched an IOS and Android mobile application that monitors and suggests daily water intake",
            line2: "Designed and implemented a Docker container within two sprints satisfying yearly goals for development",
            line3: "Implemented Redux state containers using ReactNative and Android Studio to improve future editions",
            line4: "Built a UI homepage that implemented Google login features using Google SignIn API and JavaScript"
        } 
    },
    {
        company_img: SouthRoof,
        company_name: 'Southland Roofing Inc',
        title: 'FrontEnd Developer',
        work: { 
            line1: "Launched a web application to help both employees and customers with quotes regarding roofing and demolition",
            line2: "Created the backend of the application using ReactJS and MongoDB to store user login credentials",
            line3: "Improved company efficiency by 200% after the launch of an automated website, relieving in-person quote duties",
            line4: ""
        } 
    },
    {
        company_img: SOCCCD,
        company_name: "South Orange County Community College District",
        title: 'Computer Science Tutor',
        work: { 
            line1: "Mentored college students with various academic problems regarding algorithms or debugging issues",
            line2: "Familiarized myself to quickly reading, understanding, and editing code written by others",
            line3: "Increased the performance of the computer lab by improving the ratings by +30% throughout my two years",
            line4: ""
        } 
    }
]


const Experience = () => {
  return (
    <section id='experience'>
        <h5>My Past Work</h5>
        <h2>Experience</h2>

        <Swiper className="container experiences__container"
            modules={[ Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}>
            {
                data.map(({company_img, company_name, title, work}, index) => {
                    return (
                        <SwiperSlide key={index} className="experience">
                            <div className="company__img">
                                <img src={company_img} alt="" />
                            </div>
                            <h3 className="company__name">{company_name}</h3>
                            <h4 className='title'>{title}</h4>
                            <ul className="work">
                                <li>{work['line1']}</li>
                                <li>{work['line2']}</li>
                                <li>{work['line3']}</li>
                                <li>{work['line4']}</li>
                            </ul>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Experience