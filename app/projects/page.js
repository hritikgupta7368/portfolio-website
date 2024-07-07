"use client";
import "./projects.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "./components/projects";
import Other from "./components/other";
import Project_header from "./components/header";
import Skills from "./components/skills";
import { useEffect } from "react";
const Projects = () => {
  return (
    <div className="project_root">
      <Navbar />
      <Project_header />
      <Hero />
      <Skills />
      <Other />
      <Footer />
    </div>
  );
};

export default Projects;
