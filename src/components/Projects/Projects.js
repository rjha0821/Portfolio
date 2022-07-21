import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import olx from "../../Assets/Projects/olx.png";
import weather from "../../Assets/Projects/weather.jpg";

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
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/rjha0821/Editor.io"        
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="Olx-Clone"
              description="OLX Clone Script supports small business owners to sell their products. This classified website and app generate sales for their products or services. In this website, buyers and sellers can post an ad with a product link and description on their page."
              ghLink="https://github.com/rjha0821/olx-clone"        
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather data provides information about the weather and climate of a region. It tracks patterns and predicts trends. Weather refers to short-term atmospheric conditions of a region and can include indicators such as minimum/maximum temperature, humidity, or wind speed.."
              ghLink="https://github.com/rjha0821/weather-app"        
            />
          </Col>

  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
