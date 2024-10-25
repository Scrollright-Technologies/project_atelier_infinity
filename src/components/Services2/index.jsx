import React from "react";
import services2Data from "../../data/services2.json";
import Link from "next/link";
import Image from "next/image";

const Services2 = () => {
  return (
    <section className="services">
      {/* <div> */}
      <div
        className="back_Image"
        style={{
          margin: "0 30% 0 25%",
          width: "100vw",
          height: "55vh",
          backgroundImage: `url(/assets/img/CHETULES.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "750px 500px",
        }}
      >
        <Image layout="fill" src="/assets/img/CHETULES.jpg" alt="" />
        {/* </div> */}
      </div>
      <div className="feat-top">
        <div className="notfull bg-gray wow"></div>
        <div className="container-fluid">
          <div className="row">
            {services2Data.map((item, index) => (
              <div className="col-lg-3" key={item.id}>
                <div
                  className="item-sm wow fadeInUp"
                  data-wow-delay={
                    index == 0 ? "1s" : index == 1 ? "1.1s" : "1.2s"
                  }
                >
                  <div className="box">
                    <h6 className="mb-20">
                      <span className="custom-font numb">{item.title}</span>
                      {/* {item.id} */}
                    </h6>
                    <p>{item.content}</p>
                  </div>
                  <div
                    style={{ position: "absolute", top: "100%" }}
                    className="blog-grid"
                  >
                    <div className="item">
                      <Link href="/blog-details">
                        <a style={{ textAlign: "center" }} className="more">
                          <span>Read More</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
