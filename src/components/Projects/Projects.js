import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dailytasks from "../../Assets/Projects/dailytasks.jpg";
import moviepic from "../../Assets/Projects/movies.png"
import expensetracker from "../../Assets/Projects/expensetracker.png"

import tictactoe from "../../Assets/Projects/tictactoe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensetracker}
              isBlog={false}
              title="Expense-Tracker"
              description="Records spending, categorizes expenses, sets budgets, tracks income, and provides insights to aid financial management and decision-making."
              ghLink="https://github.com/Rajesh1120/Expense_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="My personal blog page build with React.js and Css which takes the content from makdown files and renders it using React.js. Supports multiplayers and good User Interface."
              ghLink="https://github.com/Rajesh1120/tic-tac-toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviepic}
              isBlog={false}
              title="Movies"
              description="Database of movies, TV shows, and celebrities.Its API provides access to a vast amount of movie data including details such as movie titles, descriptions, release dates, ratings. "
              ghLink="https://github.com/Rajesh1120/Reactjs_moviesdb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailytasks}
              isBlog={false}
              title="Daily Tasks"
              description="By using React Native , I implemented a simple mobile app which contains CRUD operations . It is user friendly flexible and fast"
              ghLink="https://github.com/Rajesh1120/todoList_ReactNative"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
