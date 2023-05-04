/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "VCEC",
    description:
      "Served as the backend developer for the official website of the College of Engineering Chengannur.",
    url: "https://play.google.com/store/apps/details?id=com.proddec.cec",
  },
  {
    title: "The Arcade as part of IHRD THARANG 23'",
    description:
      "Created a arcade section for the official website of IHRD THARANG 23' using Unity 3D and Blender.",
    url: "https://www.linkedin.com/posts/noel-paul-george-5708ba205_activity-7017752536136777729-2YjM?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Forcego",
    description:
      "Created an application for the visually challenged community for reading books and papers.",
    url: "",
  },
  {
    title: "ALL ABOUT GTIHUB",
    description:
      "Conducted a workshop on Git, Github and Codespaces. Also introduced github copilot and the difference between github.dev and codespaces.",
    url: "https://www.linkedin.com/posts/noel-paul-george-5708ba205_microsoft-microsoftlearn-microsoftlearnstudentambassador-activity-7057422515656134656-Pd5Z?utm_source=share&utm_medium=member_desktop",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
