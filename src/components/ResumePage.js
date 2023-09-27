
import {getProj} from '../Controllers/ProjectController.js'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import '../style/resume-style.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
export default function ResumePage(){
    const [value, setValue] = useState([1, 2, 3]);
    const [experience, setExperience] = useState(1);
    const [projects, setProjects] = useState(2);
    const [skills, setSkills] = useState(3);
    const experienceList = <div>
                                <ListGroup>
                                    <h1 style={{float:'left',textAlign:'left',marginBottom:'2%'}}>Experience</h1>
                                    <ListGroup.Item><h2>Publicis Sapient (August 2022 – Present)</h2>
                                        <p>-    Started full-time in August 2022. Shadowed Citi Bank account, training on cloud fundamentals with GCP, Terraform and GitHub Actions. <br></br>- Earned Google Cloud Associate Cloud Engineer Certification in October 2022. <br></br>-  Worked with Mayo Clinic account in beginning of 2023 on code pipeline automation in GitHub Actions and deployment management with GCP Cloud Run Services.<br></br></p>
                                    </ListGroup.Item>
                                    <ListGroupItem>
                                        <p>-    Collaborated with a group of interns and industry leads to build a full stack Chatbot and webpage for Verizon Small Business sector account. <br></br>- Shadowed engineers working on the Verizon Innovative Learning System and learned programming practices and an overview of technology stack.</p>
                                    </ListGroupItem>
                                    <br></br>
                                </ListGroup>
                            </div>;
    const projectList = 
                        <div>
                            <ListGroup>
                                <h1 style={{float:'left',textAlign:'left',marginBottom:'2%'}}>Projects</h1>
                                <ListGroup.Item><h2>Full Stack Redistricting App</h2>
                                    <p>-	Collaborated with 3 other students to build web app for analyzing political districting plans and detecting gerrymandering, using live demographics derived from backend database. <br></br>-	Ran algorithms on Seawulf supercomputer to determine fair metrics which were then used to compare with enacted plans for fairness measures. <br></br>-	Used React.js for frontend featuring fully draggable/zoomable map, and Java Spring Boot backend integrated with MongoDB for data retrieval. <br></br></p>
                                </ListGroup.Item>
                                <ListGroupItem> <h2>Full Stack ChatBot</h2>
                                    <p>-    Collaborated with 5 other interns to develop & design website and Chatbot using Java Spring Boot for backend server processing, React.js/Node.js for frontend/UI development, GCP Cloud SQL for data management, Google DialogFlow for functionality, & App Engine for deployment. <br></br>-	Managed multiple aspects of stack, with concentrated effort in server/client interaction and frontend design. <br></br>-	Helped to manage roles and delegate work amongst team.</p>
                                </ListGroupItem>
                                <ListGroupItem> <h2>Full Stack List App</h2>
                                    <p>-	Built a list creator/manager application using React.js/JavaScript and Express.js integrated with MongoDB.<br></br> Features password encryption and account creation with user management in database.</p>
                                </ListGroupItem>
                                <br></br>
                            </ListGroup>
                        </div>;
    const skillsList = <div style={{float:'left',textAlign:'left',marginBottom:'2%',marginLeft:'3%',marginTop:'3%',width:'100vw'}}>
                            <Button variant='light'>Java/Spring Boot</Button>
                            <Button variant='light'>Python</Button>
                            <Button variant='light'>React.js</Button>
                            <Button variant='light'>Node.js</Button>
                            <Button variant='light'>Express.js</Button>
                            <Button variant='light'>Google Cloud Associate Cloud Engineer Certified</Button>
                            <Button variant='light'>JavaScript</Button>
                            <Button variant='light'>C</Button>
                            <Button variant='light'>MATLAB</Button>
                            <Button variant='light'>MySQL</Button>
                            <Button variant='light'>MongoDB</Button>
                            <Button variant='light'>frontend development/design</Button>
                            <Button variant='light'>backend server development</Button>
                            <Button variant='light'>CI/CD Pipelining</Button>
                            <Button variant='light'>GitHub Actions</Button>
                            <Button variant='light'>Terraform</Button>
                            <Button variant='light'>Docker</Button>
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
        {experience}
        {projects}
        {skills}
    </div>
  );
}