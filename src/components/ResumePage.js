
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import '../style/resume-style.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
export default function ResumePage(){
  return (
    <div style={{backgroundColor:'#2B3035', height: '100vh',color:'white'}}>
        <div class='title'>You can view my resume embedded within the webpage below.</div><br></br>
        <iframe style={{marginTop:'5%'}}src='./AnthonyPizzulliResume-6.24.pdf' width = '90%' height = '100%'></iframe>
    </div>
  );
}