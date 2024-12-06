import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "../data/data";

const WorkCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {data.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col justify-center items-center gap-4 grid-box"
        >
          <div
            className="relative cursor-pointer"
            onClick={() => handleClick(project)}
          >
            <ImageContainer
              className={`hover:scale-105 transition durati5n-500 shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] mx-auto w-[75vw] ${
                index === 0 ? " " : ""
              }`} // Apply negative margin to first image box
            >
              <StyledImage src={project.img} alt={project.title} />
            </ImageContainer>
            <p className="flex justify-center text-gray-700 text-xl font-medium sm:text-lg mt-3">
              {project.title}
            </p>
          </div>

          {selectedProject && selectedProject.id === project.id && (
            <PopupOverlay onClick={closePopup}>
              <PopupContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closePopup}>×</CloseButton>
                <h2 className="text-xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <Section>
                  <p className="text-gray-900 mb-2">
                    Technologies: {selectedProject.technologies}
                  </p>
                </Section>
                <Section>
                  <p className="text-gray-900 mb-2">
                    Project Management Tool: {selectedProject.projectManagement}
                  </p>
                </Section>
                <Section>
                  <p className="text-gray-900 mb-2">
                    {selectedProject.desc}
                  </p>
                </Section>
                <Section>
                  <p className="text-gray-900 mb-2">
                    Responsibilities:
                    <ul className="list-disc ml-4">
                      {selectedProject.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </p>
                </Section>
              </PopupContent>
            </PopupOverlay>
          )}
        </div>
      ))}
    </>
  );
};

export default WorkCard;

// Styled components for layout and design
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 900px;
  max-height: 80vh; /* Set a maximum height for the popup */
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  overflow-y: auto; /* Enable vertical scrolling if needed */
`;

const Section = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
  &:last-child {
    border-bottom: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 25vw;  /* Set a fixed width */
  height: 200px;  /* Set a fixed height */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;  /* Center the logo inside the box */
  // background-color: #f0f0f0;  /* Optional: Set a background color for visibility */

  @media (max-width: 768px) {
    width: 75vw; /* Adjust the width for mobile devices */
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
