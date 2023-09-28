import headshot from '../images/headshot-min.jpg'
import AboutMeStyling from '../style/about-me-style.css';
import sbu from '../images/sbu.png'
import pc from '../images/pc.png'
import ps from '../images/ps-logo.png'
import github from '../images/github-logo.png';
import linkedinlogo from '../images/linkedIn-logo.png'
import email from '../images/Picture1.png'
export default function AboutMePage(){
    return(
        <div className="about-me-page">
            <div className='header-flexbox'>
                <img style={{height:'15%', width:'15%',marginLeft:'25%'}} src = {github}></img>
                <a href='https://github.com/apizzulli' style={{marginRight: '15%',marginLeft:'5%',color:'white'}}>GitHub - apizzulli</a>
                <img style={{height:'15%', width:'15%'}} src={linkedinlogo}></img>
                <a href='linkedin.com/in/anthonyjpizzulli' style={{marginRight:'5%',marginLeft:'5%',color:'white'}}>LinkedIn</a>
                <img style={{height:'15%', width:'15%',marginLeft:'5%'}} src={email}></img>
                <div style={{marginLeft:'5%'}}>anthony.pizzulli1@gmail.com</div>
            </div>
            <div className="intro-flexbox">
                <img style={{marginLeft: '30px',width: '350px', height: '350px',borderRadius:'50%', float:'left'}} src = {headshot}></img>
                <br></br>
                <p style={{fontSize:'25pt'}}>My name is Anthony and I'm currently a Software Development Engineer
                    at Publicis Sapient. <br></br><br></br>Welcome to my page!<br></br>
                </p>
            </div>
            <div style={{marginLeft: 'auto',marginRight: 'auto',fontSize: '12pt',marginTop: '3%',width:'65vw'}}>
                    I've been studying computer science and programming for around 7 years now, starting in my junior year of high school.
                    I noticed right away that I had a passion for it, beginning with Object Oriented programming in Java. <br></br><br></br>
            </div>
            <br></br>
            <div style={{fontSize: '12pt',marginTop: '3%',width:'85vw', marginLeft: 'auto', marginRight: 'auto'}}>
            I have a broad range of experience in the software engineering field, combined with strong leadership qualities and communication skills that I believe make me an ideal candidate for the role. I have a passion for developing full stack systems and am very well-versed in the full development pipeline, from planning to development all the way through to production, including Cloud management and DevOps/CI/CD. <br></br><br></br>
            My coursework at Stony Brook University was heavily focused on algorithms and theory, particularly in Object Oriented Principles in languages such as Java and Python. I also learned a lot about developing full stack web applications in languages including React.js, Node.js, JavaScript, MongoDB, and SQL. These applications include (but are not limited to) a list creator with login and authentication features (programmed using React.js, Node.js, and used MongoDB), as well as a redistricting plan analyzer with an interactive map interface and metrics/data display, which used a supercomputer to run complex algorithms to determine a level of fairness for a given districting plan (programmed using React.js, Node.js, Python, and MySQL, as well as the Stony Brook Seawulf supercomputer).<br></br><br></br>
            My experience during my internship at Publicis Sapient was a very wholistic view of the engineering process, from a POC and discussion of client needs and necessary use cases all the way to the final product demo. We worked with tech leads on the Verizon account to develop a full stack web application with a custom chatbot that helped customers navigate Verizon's various product offerings. We used Java/Spring Boot to develop the backend/server side code, React/Node.js for the frontend UI, Google DialogFlow for language processing, GCP Cloud SQL for database management, and GCP App Engine for deployment. It was invaluable to gain experience with developing an application that serves a client based on their specific needs.<br></br><br></br>
            During my first few months working fulltime at Publicis Sapient, I obtained a Google Cloud Associate Cloud Engineer certification and began working on cloud platforms using technologies as Terraform and GCP to manage DevOps for various client needs. I later branched off into more CI/CD focus with GitHub Actions to manage deployment pipelines for clients working on large applications. For the last few weeks, I've been working on a fullstack, digital workspace project (Metaverse-esque) to provide a virtual environment for clients to interact and add a fun, personal element to digital and learning. I have also spent a considerable amount of time working with the NYC Culture Committee to plan company events as well as charity programs for the New York office. We've planned things like a holiday party and a backpack/school supply donation for a local charter school. It's very rewarding to have the opportunity to affect positive change in our community as well as facilitate more in-person interactions, being that we weren't able to for so long. <br></br><br></br>
            Besides my extensive experience with various programming languages and modern technologies, I believe I possess strong and relevant people skills which are imperative to working with a team, no matter how large or small. I spent many years as a teenager/young adult working in the service industry, which may not be particularly relevant to this position, but it taught me many valuable lessons about communication and working as a team to efficiently and effectively manage a workspace. I often found myself being offered management positions due to my leadership skills and ability to delegate, while also making sure I was doing my fair share. Additionally, being in the Culture Committee for our NYC office has really helped me transition into a corporate-lifestyle, and to learn the dynamics of planning and working on things that aren't related to my craft (with a team). I believe it is important to not be afraid to speak your mind in a collaborative setting, while being sure to respect everyone and making sure each team member has an opportunity to collaborate and share their opinions. <br></br><br></br>
            My experience extends software engineering, and I like to present myself as a well-rounded, outgoing individual, who is eager to learn and use my people skills to navigate workplace challenges and develop effective and streamlined software to meet business needs. I am always open to new opportunities and connections and would love to hear from you! I can be reached at my email or LinkedIn (linked above). I hope you enjoyed learning a little more about me.
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