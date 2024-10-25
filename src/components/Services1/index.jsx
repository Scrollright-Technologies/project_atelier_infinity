import React from "react";
import services1Data from "../../data/services1.json";
import beforeAndAfterSlider from "../../common/beforeAndAfterSlider";
import Link from "next/link";
import Image from "next/image";

const Services1 = () => {
  React.useEffect(() => {
    beforeAndAfterSlider();
  });
  return (
    <section className="services section-padding bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">
                Best Features
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Our Services
              </h4>
            </div>
          </div>
        </div>

        <div
          className="row bord-box bg-img wow fadeInUp"
          data-wow-delay=".3s"
          style={{
            backgroundImage: `url(${services1Data.image})`,
            height: "720px",
          }}
        >
          {services1Data.services.map((item) => (
            <div className="col-lg-4 col-md-6 item-bx" key={item.id}>
              {/* <h2 className="numb">{item.id}</h2> */}
              <div className="img">
                <Image
                  width={593}
                  height={405}
                  className="rounded"
                  src={item.image}
                  alt={item.alternate}
                />
              </div>
              <h6 className="mb-20 mt-20 text-center">{item.title}</h6>
              <p className="text-justify">{item.content}</p>
              {/* <Link href="/about">
                <a className="more mt-30">Read More</a>
              </Link> */}
            </div>
          ))}
          <div className="col-lg-4 col-md-6 item-bx">
            {/* <h2 className="numb">{item.id}</h2> */}
            <div className="img">
              {/* <img
                className="rounded"
                src="/assets/img/slid/3RAUTS_AFTER.jpg"
                alt="3D Modeling Image"
              /> */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="dotsbg wow fadeInUp" data-wow-delay=".3s">
                    <div id="before-after-slider" className="wow imago">
                      <div className="overlay" />
                      <div
                        className="twentytwenty-before-label"
                        data-content="Before"
                      ></div>
                      <div
                        className="twentytwenty-after-label"
                        data-content="After"
                      ></div>
                      <div id="before-image">
                        <Image
                          src="/assets/img/slid/RAUT_BEFORE.jpg"
                          alt="before"
                          width={593}
                          height={405}
                        />
                      </div>
                      <div id="after-image">
                        <Image
                          src="/assets/img/slid/3RAUTS_AFTER.jpg"
                          alt="After"
                          width={593}
                          height={405}
                        />
                      </div>
                      <div id="resizer" className="twentytwenty-handle">
                        <span className="twentytwenty-left-arrow"></span>
                        <span className="twentytwenty-right-arrow"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h6 className="mb-20 mt-20 text-center">3D Modeling</h6>
            <p className="text-justify">
              Remodeling your existing spaces can add both comfort as well as
              convenience. Atelier infinity does this with the best possible
              resources. Any type of renovations be them exterior, interior or
              Furniture are taken as a positive perspective. Incase a
              much-needed change require in any of the above then we await for
              you to get in touch with us and consider our cost-effective
              offerings.
            </p>
            {/* <Link href="/about">
                <a className="more mt-30">Read More</a>
              </Link> */}
          </div>
        </div>

        {/* comparision  */}
      </div>
    </section>
  );
};

export default Services1;
