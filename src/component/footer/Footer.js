import React from 'react';
import './footer.css'
function Footer() {
    const contactItem = [
        {
            email: 'asifraza7050@gmail.com',
            content: "Open to UI/UX Designer and Frontend Developer opportunities. I'm excited to contribute to innovative projects and grow with your organization.",
            title: "Let's Work Together!",
            address: 'Damac Hills 2, Dubai',
            phoneNo: '+971 504751345',
            linkedIn: 'https://www.linkedin.com/in/asif-iqbal-ba8baa184/'
        }
    ]
  return (
      <footer>
        { 
            contactItem.map ((data) =>  (
                <div className='container px-5'>
                    <div className='grid grid-cols-2 gap-6 max-[600px]:grid-cols-1'>
                        <div className='get-in-item'>
                            <span className='title-outline'><i class="fa-regular fa-user"></i>Get in Touch</span>
                            <div className='content-item'>
                                <h2>{data.title}</h2>
                                <p>{data.content}</p>
                            </div>
                            <address>
                                <div className='add-item'>
                                    <span><i class="fa-solid fa-location-dot"></i></span>
                                    <p>{data.address}</p>
                                </div>
                                <div className='add-item'>
                                    <span><i class="fa-solid fa-phone"></i></span>
                                    <p>{data.phoneNo}</p>
                                </div>
                                <div className='add-item'>
                                    <span><i class="fa-regular fa-envelope"></i></span>
                                    <a href="mailto:asifraza7050@gmail.com">{data.email}</a>
                                </div>
                            </address>
                            <div className='social-media'>
                                <a href="https://in.linkedin.com/in/asif-iqbal-ba8baa184" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className='form-item'>
                            <form>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input type='text' placeholder='Your Name'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>E-mail</label>
                                        <input type='email' placeholder='Your Email'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Phone Number</label>
                                        <input type='text' placeholder='Your Number'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Subject</label>
                                        <input type='text' placeholder='Subject'/>
                                    </div>
                                </div>
                                <div className='form-group pt-4'>
                                    <label>Message</label>
                                    <textarea cols={50} rows={10} placeholder='Message'/>
                                </div>
                                <button type='submit' className='btn primary-btn mt-4'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            ))
        }
    </footer>
  )
}

export default Footer;