import React from "react";
import skillsProgress from "../../common/skillsProgress";
import Image from "next/image";
const OurLegacy = () => {
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Our Legacy
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
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
              // style={{
              //   width: "90%",
              //   // margin: "0 25% 0 15%",
              // }}
              src="/assets/img/Legacy_image.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 valign">
            <div
              style={{
                padding: "3rem",
              }}
              className="skills-box full-width"
            >
              <div className="content">
                <p style={{ fontSize: "1rem" }} className="mb-10">
                  “Service” has been USP since our first client, more than 17
                  years ago. Service is how we meet the client’s vision while
                  staying within budget and how we rise to the challenge in a
                  way that sets us apart. Finally, we are obsessed with
                  developing optimal “Solutions” ideally suited to the client’s
                  unique situation and vision. It is our desire to add value to
                  the communities in which we serve and to strive always to meet
                  100% of our clients’ needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLegacy;
