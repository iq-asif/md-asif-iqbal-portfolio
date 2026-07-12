import React from 'react';
import './resume.css';


const Resume = () => {
    const workInfoData = [
      {
        date: "May 2025 - Present",
        title: "UI/UX Developer",
        companyName: "Avloire Web Gaming Services, Dubai",
        url: "https://www.avloiregames.ae/",
      },
      {
        date: "Oct 2023 - Jan 2025",
        title: "Web Designer",
        companyName: "Bestone Meest IT Services, Delhi",
        url: "https://www.bestonemits.com/",
      },
      {
        date: "Feb 2023 - Aug 2023",
        title: "Web Designer Executive",
        companyName: "Reliqus Consulting, Delhi",
        url: "https://reliqus.com/",
      },
      {
        date: "March 2022 - Jan 2023",
        title: "Web Designer",
        companyName: "Webmaddy, Kolkata",
        url: "https://www.webmaddy.com/",
      },
      
      
    ];
  
    return (
      <section className='resume-section'>
        <div className='container px-5'>
          <div className='grid grid-cols-2'>
              <div>
                  <span className='title-outline'><i class="bi bi-briefcase"></i>My Work</span>
                  <h2 className='text-5xl py-5 max-[600px]:text-2xl'>Experience in Creating Real-World Solutions</h2>
              </div>
              <div className='star'>
                  <span><i class="bi bi-asterisk"></i></span>
              </div>
          </div>
        </div>
        <div className='container work-exp'>
          <div className='grid grid-cols-3 gap-3 max-[600px]:grid-cols-1'>
            {
              workInfoData.map((item) => (
                <div className='work-section-info'>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <span className='arrow'><i class="bi bi-arrow-up-right"></i></span>
                  </a>
                  <div className='work-content'>
                    <p className='opacity-40'>{item.date}</p>
                    <h3>{item.title}</h3>
                    <p className='opacity-40'>{item.companyName}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  };


export default Resume;