// src/pages/PortfolioPage.jsx
// purpose: This file is the PortfolioPage component. It is the page that displays the projects that I have worked on.
import React from 'react';
import { Card, Button  } from 'react-bootstrap';
import './style.css';
import imagePath from "/public/images/verse/verse_example.png";

const VerseList = ({ verses, title, type}) => {
  if (!verses.length) {
    return <h3>No Courses Yet</h3>;
  }
  // Filter the projects array to only include projects that match the type parameter
  //verses = verses.filter(verse => verse.verseType.toString()==type);
  return (
    <div className="row my-3" >
    <h3 className="text-center">{title}</h3>
      {verses &&
        verses.map((verse) => (
          <div key={verse._id} className="col-md-4 mb-4">
            <Card className="card">
              <Card.Img id= "projImg" variant="top" src={imagePath}/>
              <Card.Body>
                <Card.Text>{verse.title}</Card.Text>
                <Card.Text>{verse.description}</Card.Text>
                <Card.Text>{verse.author}</Card.Text>
                <Card.Text>{verse.createdAtVal}</Card.Text>
                <Card.Text>{verse.price}</Card.Text>
                <Card.Text>Verse Type = {verse.verseType.toString()}</Card.Text>
                <Button variant="primary">Order</Button>
              </Card.Body>
            </Card>
          </div>
        ))}



      {/* {projects.map((project, index) => (
        
        <div key={index} className="col-md-4 mb-4">
          <Card className="card">
            <Card.Img id= "projImg" variant="top" src={project.picture}/>
            <Card.Body>
              <Card.Link href={project.link} target="_blank">{project.name}</Card.Link>
              <Card.Link href={project.gitLink} target="_blank">
              <img   src={gitLogo}
                alt="GitHub Logo" 
                className="git-logo me-2"
                style={{ width: '20px' }} 
                />
               </Card.Link> 
              <Card.Text>Tech Stack: {project.techStack.join(', ')}</Card.Text>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))} */}
    </div>
  );
}

export default VerseList;
