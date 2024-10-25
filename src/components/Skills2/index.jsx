import React from "react";
import skillsProgress from "../../common/skillsProgress";
import Image from "next/image";
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              {/* <h6 className="wow fadeInDown" data-wow-delay=".3s">
                Best Features
              </h6> */}
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Our Expertise
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              style={{
                border: "1px solid none",
                borderRadius: "10px",
                padding: "3rem",
              }}
              className="skills-box full-width"
            >
              <div className="skill-item">
                <h6>Architecture</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="100%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Interior Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="99%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>AutoCAD</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="97%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>3D Skills</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="93%"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* <div className="content">
              <h4 className="playfont line-height-50 mb-20">
                Providing Customized Design Solutions That Fits Every Space .
              </h4>
              <p className="mb-10">
                Beyond more stoic this along goodness hey this this wow ipsum
                manate far impressive manifest farcrud opened inside.
              </p>
              <p>
                Fustered impressive manifest crud opened inside owing punitively
                around forewent and after wasteful telling sprang coldly and
                spoke less clients.
              </p>
            </div> */}
            <Image
              layout='fill'
              src="/assets/img/works/PARIDHAN_BOUTIQUE_1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;
