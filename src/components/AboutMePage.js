import headshot from '../images/headshot-min.jpg'
import AboutMeStyling from '../style/about-me-style.css';
import sbu from '../images/sbu.png'
import pc from '../images/pc.png'
import ps from '../images/ps-logo.png'
import github from '../images/github-logo.png';
import linkedinlogo from '../images/linkedIn-logo.png'
import email from '../images/email-icon.png'

export default function AboutMePage(){
    return(
        <div className="about-me-page">
            <div className='header-flexbox'>
            <img class = 'contact-icon' src={email}></img>
                <div class='contact-email'>anthony.pizzulli1@gmail.com</div>
                <img class = 'contact-icon' src = {github}></img>
                <a href='https://github.com/apizzulli' class = 'contact-link' >GitHub-apizzulli</a>
                <img class = 'contact-icon' src={linkedinlogo}></img>
                <a href='https://linkedin.com/in/anthonyjpizzulli' class = 'contact-link' >LinkedIn</a>
            </div>
            <div className="intro-flexbox">
                <img class='headshot' src = {headshot}></img>
                    <div><h2>My name is Anthony and I'm currently a Software Development Engineer
                    at Publicis Sapient. </h2><br></br><br></br>
                    <p style={{fontSize:'13pt'}}>I've been studying computer science and programming for around 7 years now, starting in my junior year of high school.
                    I noticed right away that I had a passion for it, beginning with Object Oriented programming in Java. <br></br><br></br>
                    I am always open to new opportunities and connections and would love to hear from you! I can be reached at my email or LinkedIn (linked above). I hope you enjoyed learning a little more about me.
                    Check out some of my photos on my other page! 
                </p></div>
            </div>
            <div className='footer-flexbox'>
                <div style={{borderRadius: '25px',marginTop:'1%'}}>
                    <img class = 'sbu-image' src={sbu}></img>
                </div>
                <div>
                <img style={{marginLeft: '2%',width:'150px', height:'75px'}}src={ps}></img>
                </div>
                <div></div>
            </div>
        </div>
    );
}