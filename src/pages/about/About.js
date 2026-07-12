import React from 'react';
import './about.css';
import profileImg from '../../component/profile/assets/Asif2.png';

function About() {
  return (
    <section className='about-section'>
        <div className='container px-5'>
            <div className='grid grid-cols-2 gap-6 max-[600px]:gap-4'>
                <div className='about-item'>
                    <span className='title-outline'><i class="fa-regular fa-user"></i>About me</span>
                    <div className='content-item max-[600px]:text-sm'>
                        <h2>Every great design begin<br/> withan even better story</h2>
                        <p>I am Md. Asif Iqbal, a passionate and creative UI/UX Developer dedicated to crafting exceptional digital
experiences. With 3+ years of experience in the industry, I thrive on turning ideas into visually stunning and
user-friendly websites</p>
                    </div>
                    <div className='ed-item grid grid-cols-2'>
                        <div className='content-wrap min-w-16'>
                            <span><i class="fa-solid fa-check"></i></span>
                            <div className='ed-content text-lg'>
                                <span className='block'>Graduate, B.A.<br/>BBMK. University</span>
                                <span className='opacity-40'>2018-2021</span>
                            </div>
                        </div>
                        <div className='content-wrap'>
                            <span><i class="fa-solid fa-check"></i></span>
                            <div className='ed-content text-lg pe-5'>
                                <span className='block'>Diploma in Graphic, Web Design, Aren Animation, Kolkata</span>
                                <span className='opacity-40'>2019-2020</span>
                            </div>
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='contact-item'>
                            <span><i class="bi bi-envelope"></i></span>
                            <div className='email'>
                                <span className='opacity-40'> Email Us</span>
                                <a href='mailto:asifraza7050@gmail.com'>asifraza7050@gmail.com</a>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <span><i class="bi bi-telephone"></i></span>
                            <div className='email'>
                                <span className='opacity-40'> Make A Call</span>
                                <a href='tel:+917050913927'>+971 504751345</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='img-item '>
                    <img src={profileImg} alt='' className='w-full max-[600px]:min-h-24'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;