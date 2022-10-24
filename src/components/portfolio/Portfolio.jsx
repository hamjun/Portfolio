import React from 'react'
import './portfolio.css'
import Fitness from '../../assets/fitness.jpg'
import SE from '../../assets/SE.jpg'
import Python from '../../assets/python.jpg'
import Charity from '../../assets/charity.jpg'
import Me from '../../assets/website.jpg'
import More from '../../assets/moreSoon.png'

const data = [
    {
        id:1,
        image: Fitness,
        title: "HealthClock",
        github: "https://github.com/hamjun/fitnessApp"
    },
    {
        id:2,
        image: SE,
        title: "Search Engine",
        github: "https://github.com/joycele/Web-Search-Engine"
    },
    {
        id:3,
        image: Charity,
        title: "Charity Betting App",
        github: "https://github.com/Jwl027/CharityBet"
    },
    {
        id:4,
        image: Python,
        title: "Leetcode Practice",
        github: "https://github.com/hamjun/PythonPractice"
    },
    {
        id:5,
        image: Me,
        title: "Portfolio",
        github: "https://github.com/hamjun/Portfolio"
    },
    {
        id:6,
        image: More,
        title: "More to Come",
        github: "https://github.com"
    }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id, image, title, github}) => {
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt="" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Github</a>
                            </div>
                        </article>
                    )
                }) 
            }
        </div>
    </section>
  )
}

export default Portfolio