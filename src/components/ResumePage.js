
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
        You can view my resume embedded within the webpage below.<br></br>
        <iframe style={{marginTop:'10%'}}src='./resume-10.23.pdf' width = '90%' height = '100%'></iframe>
    </div>
  );
}