import React from 'react';
import "./portfolio.css";
function Portfolio() {
    const portfolioImg = [
        {
            img: require('../../assets/images/b2c2.png'),
            linkUrl: 'https://b2c2.gamingsites.club/#/home',
            companyName: 'Gaming Site',
        },
        {
            img: require('../../assets/images/b2c6.png'),
            linkUrl: 'https://b2c6.gamingsites.club/#/home',
            companyName: 'Gaming Site',
        },
        {
            img: require('../../assets/images/bmits.jpg'),
            linkUrl: 'https://bestonemits.com/',
            companyName: 'Bestone Meest IT Services',
        },
        {
            img: require('../../assets/images/bestone-water.jpg'),
            linkUrl: 'https://bestonewater.com/',
            companyName: 'Bestone Water',
        },
        // {
        //     img: require('../../assets/images/malana-marino.jpg'),
        //     linkUrl: 'https://www.malanamerino.com/',
        //     companyName: 'Malana Merino (E-commerce)',
        // },
        // {
        //     img: require('../../assets/images/tejas-opt.jpg'),
        //     linkUrl: 'https://tejasoptical.com/',
        //     companyName: 'Tejas Optical (Informative)',
        // },
    ]
  return (
    <section className='portfolio-section'>
        <div className='container px-5'>
            <div>
                <span className='title-outline'><i class="bi bi-laptop"></i>Portfolio</span>
                <h2 className='text-5xl py-5 max-[600px]:text-2xl'>Featured Projects</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 max-[600px]:grid-cols-2'>
                {
                    portfolioImg.map((data) => (
                        <div className="portfolio-item">
                            <a href={data.linkUrl} target="_blank" rel="noopener noreferrer">
                                <div className="content-overlay"></div>
                                <img className="img-item" src={data.img} alt=""/>
                                <div className="portfolio-title fadeIn-left">
                                    <h3>{data.companyName}</h3>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    
  )
}

export default Portfolio;