"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { useState } from "react";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>Works</h3>

                <div className="filtering mt-30 ">
                  <div className="filter m-20 ">
                    <span className="m-1 active" data-filter="*">
                      All
                    </span>
                    <span className="m-1" data-filter=".interior">
                      Interior
                    </span>
                    <span className="m-1" data-filter=".theaters">
                      Theaters
                    </span>
                    <span className="m-1" data-filter=".residential">
                      Residential
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* pooja Space  */}
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3_PujaSpace.jpg">
                  <img src="/assets/img/works/3_PujaSpace.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3_PujaSpace.jpg" passHref>
                      <div>{`POOJA SPACE`}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            {/* ROBIN'S */}
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3ROBIN'S.jpg">
                  <img src="/assets/img/works/3ROBIN'S.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3ROBIN'S.jpg" passHref>
                      <div>{"ROBIN'S"}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            {/* DESHMUKH'S  */}
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3DESHMUKH.jpg">
                  <img src="/assets/img/works/3DESHMUKH.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3DESHMUKH.jpg" passHref>
                      <div>{"DESHMUKH'S"}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            {/* URADE'S  */}
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3URANDE.jpg">
                  <img src="/assets/img/works/3URANDE.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3URANDE.jpg" passHref>
                      <div>{"URADE'S"}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            {/* RAUT'S */}
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3RAUTS_AFTER.jpg">
                  <img src="/assets/img/works/3RAUTS_AFTER.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3RAUTS_AFTER.jpg" passHref>
                      <div>{"RAUT'S"}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            {/* RAO'S  */}
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3RAOS.jpg">
                  <img src="/assets/img/works/3RAOS.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3RAOS.jpg" passHref>
                      <div>{`RAO'S`}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            {/* THAKRE'S  */}
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3THAKRES.jpg">
                  <img src="/assets/img/works/3THAKRES.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3THAKRES.jpg" passHref>
                      <div>{"THAKRE'S"}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            {/* TIRPUDE'S  */}
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <Link passHref href="/assets/img/works/3TIRPUDES.jpg">
                  <img src="/assets/img/works/3TIRPUDES.jpg" alt="" />
                  </Link>
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/assets/img/works/3TIRPUDES.jpg" passHref>
                      <div>{"TIRPUDE'S"}</div>
                    </Link>
                  </h5>
                  {/* <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
