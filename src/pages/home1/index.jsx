/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Skills2 from "../../components/Skills2";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import Services2 from "../../components/Services2";
import OurLegacy from "../../components/Our-Legacy";

// import SkillsCircle from "../../components/Skills-circle";
// import Testimonials from "../../components/Testimonials1";
// import Team1 from "../../components/Team1";
// import Blogs1 from "../../components/Blogs1";
// import Contact from "../../components/Contact";
// import Portfolio1 from "../../components/Portfolio1";
// import Portfolio2 from "../../components/Portfolio2";
// import Portfolio3 from "../../components/Portfolio3";
// import WorkFourColumn from "../../components/Work-Four-Column";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <AboutUs1 />
      <Services1 />
      <WorkTwoColumn />
      <Services2 />
      <Skills2 />
      <OurLegacy />
    </LightLayout>
  );
};

export default Home1;
