import headshot from '../images/headshot-min.jpg'
import AboutMeStyling from '../style/about-me-style.css';
import sbu from '../images/sbu.png'
import pc from '../images/pc.png'
import ps from '../images/ps-logo.png'
import github from '../images/github-logo.png';
import linkedinlogo from '../images/linkedIn-logo.png'
export default function AboutMePage(){
    return(
        <div className="about-me-page">
            <div className='header-flexbox'>
                <img style={{height:'25%', width:'25%'}} src = {github}></img>
                <div style={{marginTop:'50%'}}>apizzulli</div>
                <img style={{height:'25%', width:'25%'}} src={linkedinlogo}></img>
                linkedin.com/in/anthonyjpizzulli
            </div>
            <div className="intro-flexbox">
                <img style={{marginLeft: '30px',width: '350px', height: '350px',borderRadius:'50%', float:'left'}} src = {headshot}></img>
                <br></br>
                <p style={{fontSize:'25pt'}}>My name is Anthony and I'm currently a Software Development Engineer
                    at Publicis Sapient. <br></br><br></br>Welcome to my page!<br></br>
                </p>
            </div>
            <div style={{marginLeft: 'auto',marginRight: 'auto',fontSize: '16pt',marginTop: '3%',width:'65vw'}}>
                    I've been studying computer science and programming for around 7 years now, starting in my junior year of high school.
                    I noticed right away that I had a passion for it, beginning with Object Oriented programming in Java. <br></br><br></br>
            </div>
            <br></br>
            <div style={{fontSize: '16pt',marginTop: '3%',width:'85vw', marginLeft: 'auto', marginRight: 'auto'}}>
                I started my first year at Stony Brook University as a Computer Engineering major. I pursued computer engineering for my 
                first year and a half at university, and I really loved getting the hands-on experience in an electronics lab. It was incredibly 
                valuable to gain experience with the low-level components that 
                are the basis of all modern digital systems, and even though I wound up switching to major in Computer Science, I still enjoyed 
                low-level programming in C and MIPS.
            </div>
            <div className='footer-flexbox'>
                <div style={{borderRadius: '25px',marginTop:'1%'}}>
                    <img style={{width:'160px', height:'160px'}}src={sbu}></img>
                </div>
                <div>
                <img style={{marginLeft: '2%',width:'300px', height:'175px'}}src={ps}></img>
                </div>
                <div></div>
            </div>

        </div>
    );
}