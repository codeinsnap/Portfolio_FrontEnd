import React from "react";
import Header from "../../commonComponents/Header";
import AboutMe from "./about_me";
import CarouselPage from "./CarouselPage";
import ResumeDetails from "./myResume";


function Portfolio() {
  const content = {
    bgColor:"black",
    title: "Yogesh Sharma",
    buttons: {
      b1: { title: "Home", url: "" },
      b2: { title: "About ME", url: "" },
      b3: { title: "My Resume", url: "" },
      b4: { title: "Education", url: "" },
      b5: { title: "Skills", url: "" },
      b6: { title: "Services", url: "" },
      b7: { title: "Contact Me", url: "" },
    },
  };
  return (
    <div>
      <Header content={content} />
      <CarouselPage/>
      <AboutMe/>
    </div>
  );
}
export default Portfolio;
