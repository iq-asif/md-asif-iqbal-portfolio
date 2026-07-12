import React from 'react'
import "./service.css"

function Service() {
    const specialization = [
        {
            no: "01",
            title: "Web Design and Developement",
            description: "I create responsive and high-performing websites with modern designs, clean code, and seamless user experiences using the latest web technologies.",

        },
        {
            no: "02",
            title: "UI/UX Design",
            description: "I design intuitive and engaging interfaces focused on user needs, usability, and creating smooth digital experiences across all devices.",

        },
        {
            no: "03",
            title: "Graphic Design",
            description: "I create visually appealing designs, including branding, social media graphics, and digital assets that communicate ideas effectively.",

        },
    ];

  return (
    <section className='spec-section'>
        <div className='container px-5'>
            <div>
                <span className='title-outline'><i class="bi bi-laptop"></i>Core Skills</span>
                <h2 className='text-5xl py-5 max-[600px]:text-2xl'>My Specialization</h2>
            </div>
            <div className='grid grid-cols-3 gap-4 max-[600px]:grid-cols-1'>
                {
                    specialization.map((data) => (
                        <div className='spec-box'>
                            <span>
                                {data.no}
                                <hr/>
                            </span>
                            <div className='content'>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Service