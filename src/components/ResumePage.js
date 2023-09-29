
import {getProj} from '../Controllers/ProjectController.js'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import '../style/resume-style.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
export default function ResumePage(){
    const [value, setValue] = useState([0,0,0]);
    const [experience, setExperience] = useState(null);
    const [projects, setProjects] = useState(null);
    const [skills, setSkills] = useState(null);
    const experienceList = <div>
                                <ListGroup>
                                    <h1 style={{float:'left',textAlign:'left',marginBottom:'2%'}}>Experience</h1>
                                    <ListGroup.Item><h2 style={{fontWeight:'bold'}}>Software Development Engineer: Publicis Sapient (August 2022 – Present)</h2>
                                        <p>-    Started full-time in August 2022. Shadowed Citi Bank account, training on cloud fundamentals with GCP, Terraform and GitHub Actions. <br></br>- Earned Google Cloud Associate Cloud Engineer Certification in October 2022. <br></br>-  Worked with Mayo Clinic account in beginning of 2023 on code pipeline automation in GitHub Actions and deployment management with GCP Cloud Run Services.<br></br></p>
                                    </ListGroup.Item>
                                    <ListGroupItem>
                                        <h2 style={{fontWeight:'bold'}}>Software Development Engineer Intern: Publicis Sapient (June-August 2021)</h2>
                                        <p>-    Collaborated with a group of interns and industry leads to build a full stack Chatbot and webpage for Verizon Small Business sector account. <br></br>- Shadowed engineers working on the Verizon Innovative Learning System and learned programming practices and an overview of technology stack.</p>
                                    </ListGroupItem>
                                    <br></br>
                                </ListGroup>
                            </div>;
    const projectList = 
                        <div>
                            <ListGroup>
                                <h1 style={{float:'left',textAlign:'left',marginBottom:'2%'}}>Projects</h1>
                                <ListGroup.Item><h2 style={{fontWeight:'bold'}}>Full Stack Redistricting App</h2>
                                    <p>-	Collaborated with 3 other students to build web app for analyzing political districting plans and detecting gerrymandering, using live demographics derived from backend database. <br></br>-	Ran algorithms on Seawulf supercomputer to determine fair metrics which were then used to compare with enacted plans for fairness measures. <br></br>-	Used React.js for frontend featuring fully draggable/zoomable map, and Java Spring Boot backend integrated with MongoDB for data retrieval. <br></br></p>
                                </ListGroup.Item>
                                <ListGroupItem> <h2 style={{fontWeight:'bold'}}>Full Stack ChatBot</h2>
                                    <p>-    Collaborated with 5 other interns to develop & design website and Chatbot using Java Spring Boot for backend server processing, React.js/Node.js for frontend/UI development, GCP Cloud SQL for data management, Google DialogFlow for functionality, & App Engine for deployment. <br></br>-	Managed multiple aspects of stack, with concentrated effort in server/client interaction and frontend design. <br></br>-	Helped to manage roles and delegate work amongst team.</p>
                                </ListGroupItem>
                                <ListGroupItem> <h2 style={{fontWeight:'bold'}}>Full Stack List App</h2>
                                    <p>-	Built a list creator/manager application using React.js/JavaScript and Express.js integrated with MongoDB.<br></br> Features password encryption and account creation with user management in database.</p>
                                </ListGroupItem>
                                <br></br>
                            </ListGroup>
                        </div>;
    const skillsList = <div style={{float:'left',textAlign:'left',marginBottom:'2%',marginLeft:'3%',marginTop:'3%',width:'100vw'}}>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light mr-1'>Java/Spring Boot</Button>
                            <Button style={{marginRight:'.5%',marginTop:'5px'}}variant='light'>Python</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light mr-1'>React.js</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light mr-1'>Node.js</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light mr-1'>Express.js</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>Google Cloud Associate Cloud Engineer Certified</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>JavaScript</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>C</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>MATLAB</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>MySQL</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>MongoDB</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>frontend development/design</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>backend server development</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>CI/CD Pipelining</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>GitHub Actions</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>Terraform</Button>
                            <Button style={{marginRight:'5px',marginTop:'5px'}}variant='light'>Docker</Button>
                    </div>
/*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */

   const handleChange = function(val){
        setValue(val);
        if(val.includes(1)){
            setExperience(<div style={{color:'white'}}>{experienceList}</div>);
        }else
            setExperience(null);

        if(val.includes(2)){
            setProjects(<div style={{color:'white'}}>{projectList}</div>);
        }else
            setProjects(null);

        if(val.includes(3)){
            setSkills(<div style={{color:'white'}}>{skillsList}</div>)
        }else
            setSkills(null);
  }

  return (
    <div style={{backgroundColor:'#2B3035', height: '100vh'}}>
        <div class='title' >This is a page dedicated to displaying my resume. Click on a button below to toggle a different section on/off to make it easier to read.</div>
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton variant = "outline-light" id="tbg-check-1" value={1}>
                Experience
            </ToggleButton>
            <ToggleButton variant = "outline-light" id="tbg-check-2" value={2}>
                Projects
            </ToggleButton>
            <ToggleButton variant = "outline-light" id="tbg-check-3" value={3}>
                Skills
            </ToggleButton>
        </ToggleButtonGroup>
        <div class='resume-section'>
            {experience}
            {projects}
            {skills}
        </div>
    </div>
  );
}