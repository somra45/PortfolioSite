import './InfoPage.css';

const InfoPage = () => {
    return (
        <> 
        <div className="full-info-div">
            <div className='nav-div'>
                <header id='header'>
                        <nav>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/harvinder-somra-39ba536a/" target='_blank' class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
                                <li><a href="https://www.facebook.com/harvinder.somra" target="_blank" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                                <li><a href="/info" class="icon fa-info"><span class="label">Info</span></a></li>
                                <li><a href="https://github.com/somra45" target="_blank" class="icon fa-github"><span class="label">Github</span></a></li>
                                <li><a href="mailto:somra45@gmail.com" target="_blank" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
                            </ul>
                        </nav>
                </header>
            </div>
    
            <div className='info-div'>
          
                <h1 className='info-header'>A Little About Me </h1>
                <div className='just-another-info-div' >
                    <div className='profile-pic-div'>
                        <img className='profile-pic' src='./assets/Harvey.png'/>
                    </div>
                    <div className='about-me-paragraph'>
                        <p className='about-me-p' > 
                            I was raised and attended University at UCONN in Connecticut. 
                            In college, I pursued an education in Molecular Biology, in the hopes of attending Dental School.
                            After spending a couple years working in an office, and getting to know the career, I decided it wasn't
                            for me, and decided I would develop vital communication, negotiation, and sales experience. I was
                            always passionate about sustainability and clean energy, so pivoted to a Consultant career in the 
                            Solar industry. After 4-5 years working in Solar, I did some soul searching and realized I had gained a lot, 
                            but did not want to work only sales for the rest of my life. 
                        </p>
                        <br />
                        <p className='about-me-p2'>
                            Discovering a desire to become a Software Engineer did not happen overnight for me. 
                            My interest in computer science began in my early youth, from debugging issues with my own computers and gaming, 
                            to taking a programming course in college as well as a role as Webmaster for my pre-dental society. Later on I managed a 
                            website for my Masonic Lodge as well, and always enjoyed designing an engaging and visually appealing site. 
                            Once I began to explore algorithms and how powerful data was becoming in shaping the world, I decided to take the leap into SWE. 
                            The more i learn, the more I want to learn. Solving puzzles, debugging issues in code, and discovering the massive impact
                            software engineers have has only continued to excite me and fuel curiosity. I am enthused to create more projects, and contribute to 
                            creating practical applications that make peoples lives easier. Lets work on something together !
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default InfoPage