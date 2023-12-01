import React from "react";
import "./subscriber.css";
import { useState } from "react";

import apperallogo from "../imagesub/apperallogo.png";
import watsapplogo from "../imagesub/watsapplogo.png";
import fremans from "../imagesub/fremans.jpeg";

import Mia from "../imagesub/Mia.mp4";
import brand from "../imagesub/brands.png";
import searcharrow from "../imagesub/searcharrow.png";
import arrowpeople from "../imagesub/arrowpeople.png";
import handearth from "../imagesub/handearth.png";

import handbag from "../imagesub/handbag.png";
import threelogo from "../imagesub/threelogo.jpeg";
import rupa from "../imagesub/rupa.png";
import manyar from "../imagesub/manyar.png";
import duke from "../imagesub/duke.png";
import monja from "../imagesub/monja.png";
import hard from "../imagesub/hard.png";
import nesta from "../imagesub/nesta.png";
import klis from "../imagesub/klis.png";
import turtle from "../imagesub/turtle.png";
import manish from "../imagesub/manish.png";
import ramsoni from "../images/ramsoni.png";
import pinok from "../imagesub/pinok.png";
import sucess from "../imagesub/sucess.png";
import afisi from "../imagesub/afisi.png";
import endicot from "../imagesub/endicot.png";
import sirony from "../imagesub/sirony.png";
import texas from "../imagesub/texas.png";
import redrose from "../imagesub/redrose.png";
import paul from "../imagesub/paul.png";
import silk from "../imagesub/silk.png";
import kids from "../imagesub/kids.png";
import girlwear from "../imagesub/girlwear.png";
import prime from "../imagesub/prime.png";
import depee from "../imagesub/depee.png";
import rick from "../imagesub/rick.png";
import firon from "../imagesub/firon.png";
import sonri from "../imagesub/sonri.png";
import smart from "../imagesub/smart.png";


function Subscriber() {
  const url = "https://indian-apparel.online:8000/Contact";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const postPutEvent = async () => {
    const data = {
      name,
      phone,
      email,
      city,
    };

    console.log(data);
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      });
      res = await res.json();
      alert("mail sent");
      setName("");
      setPhone("");
      setEmail("");
      setCity("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div style={{ background: "#F5F5F5" }}>
        <div className="py-2 text-center">
          <img width={"350px"} src={apperallogo} alt="error" />
        </div>
        <section className="my-4">
          <div className="container">
            <div className="row  ">
              <div className="col-xl-12 col-lg-12">
                <div className="service-detail-text">
                  <div className="row d-flex" style={{ alignItems: "center" }}>
                    <div
                      className="col-lg-6 col-xl-6"
                      style={{ textAlign: "left" }}
                    >
                      
                      <p className="boost">
                        Boost Your <br />
                        <span style={{ color: "#4D98C0" }}>
                          {" "}
                          Business{" "}
                        </span>{" "}
                        With <br /> Indian Apparel
                      </p>
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "700,",
                          fontFamily: "Proza Libre",
                          lineHeight: "36.5px",
                          letterSpacing: "-0.4px",
                        }}
                      >
                        Launching India’s most awaited Apparel Manufacturers Directory: <b> “FAMD Special Edition” </b>, Product wise, City wise & Brand wise
                      </p>
                      <div className="  watsapp">
                        
                          <a
                            href={"https://wa.me/919432606060"}
                            target="blank"
                            rel="nopper"
                          >
                            <img width={"250px"}src={watsapplogo} alt="" />
                          </a>
                        
                      </div>
                    </div>
                    <div className="   col-lg-6 col-xl-6 py-3  ">
                      <div id="contact">
                        <form style={{ textAlign: "left" }}>
                          <div>
                            <label htmlFor="">Name</label>
                            <input
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              type="text"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="">Mobile Number</label>
                            <input
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                              type="tel"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="">Email</label>
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              type="email"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="">City</label>
                            <input
                              onChange={(e) => setCity(e.target.value)}
                              value={city}
                              type="text"
                              required
                            ></input>
                          </div>
                        </form>
                        <div className="pt-4">
                          <button
                            onClick={postPutEvent}
                            name="submit"
                            type="submit"
                            id="contact-submit"
                            data-submit="...Sending"
                          >
                           Submit
                          </button>
                        </div>
                      </div>
                      <p
              className="py-3"
              style={{
                
                fontFamily: "Proza Libre",
                
                letterSpacing: "-1.28px",
              }}
            >
              <span style={{ color: "red" }}> Make {" "}
              Your Mark </span>  With Exclusive Year End Offer
            </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <section className="" style={{ background: "#000" }}>
          <div className="container">
            <div className="row  ">
              <div className="col-xl-12 col-lg-12 my-5">
                <div className="service-detail-text">
                  <div className="row d-flex" style={{ alignItems: "center" }}>
                    <div
                      className="col-lg-6 col-xl-6"
                      style={{
                        textAlign: "justify",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      <h1 style={{fontFamily:"Proza Libre" }}>About Indian Apparel</h1>
                      <b>
                      Celebrating Two Decades of Textile Excellence – Unveiling Our Legacy

                      </b>
                      <p>
                      With 21 years of unwavering commitment and countless tales of success, Indian-apparel.com stands as a timeless beacon in the world of textiles. Since our inception in 2002, we've been the definitive online hub for news, insights, and invaluable information within the apparel and textile industry. Join us in celebrating 21 years of textile excellence, and let us continue to be your trusted source for all things apparel and textiles. <br /><br />

Here's to the next chapter in our legacy, filled with fresh insights, trends, and success stories waiting to be unveiled!
<br /><br />
Our Indian Apparel Manufacturers Directory helps businesses grow their visibility and achieve business goals. This directory has more than 1000+ verified listings of prominent manufacturers. 
The Apparel Manufacturers Directory has Item-wise and city-wise information available which makes it unique and easy for business owners to use.
                      </p>
                    </div>
                    <div className="col-lg-2 col-xl-2"> </div>
                    <div className="   col-lg-4   ms-auto mb-n20  mb-xxl-n22 ">
                      <img className="container" src={fremans} alt="error" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container my-5">
            <div className="lead">
              <p>
                {" "}
                <span style={{ color: "#4D98C0" }}>
                  {" "}
                  Grow Your Business{" "}
                </span>{" "}
                <span style={{ color: "#000" }}>
                  {" "}
                  With The Right Information About FAMD Manufacturers{" "}
                </span>
              </p>
            </div>
            <div>
            <video className=" my-2 container leads  ms-auto mb-n20  mb-xxl-n22" controls>
  <source src={Mia} type="video/mp4"/>
  {/* <source src="Mia.mp4" type="video/ogg"/> */}
Your browser does not support the video tag.
</video>
              
            </div>
          </div>
        </section>
        <section className="my-5" style={{ background: "#000" }}>
          <div className="container">
            <p
              className="pt-5"
              style={{
                fontWeight: "700",
                fontSize: "50px",
                fontFamily: "Proza Libre",
              }}
            >
              {" "}
              <span style={{ color: "#4D98C0" }}> Benefits </span>{" "}
              <span style={{ color: "white" }}> For Joining </span>
            </p>
            <div className="row  pb-5">
              <div className="col-xl-12 col-lg-12 ">
                <div className="service-detail-text">
                  <div className="row d-flex" style={{ alignItems: "center" }}>
                    <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                        <img src={brand} alt="error" />

                        <div>
                          <p className="poo">
                            {" "}
                            Grow your business and Build your Brand
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                        <img src={searcharrow} alt="error" />

                        <div>
                          <p className="poo">
                            Get access to 1000+ verified listed garment
                            manufacturers
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                        <img src={arrowpeople} alt="error" />

                        <div>
                          <p className="poo">
                            Convenient access available both online and offline,
                            right at your fingertips
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 my-1 ">
                <div className="service-detail-text">
                  <div className="row d-flex" style={{ alignItems: "center" }}>
                    <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                        <img src={handearth} alt="error" />

                        <div>
                          <p className="poo">
                          Global Event Insights: Stay informed about upcoming events taking place in India and around the world
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                        <img style={{width:"170px"}} src={threelogo} alt="error" />

                        <div>
                          <p className="poo">
                          One Stop Fashion Data, Industry Networking Access & Many more. Join now for exclusive advantages
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                        <img src={handbag} alt="error" />

                        <div>
                          <p className="poo">
                          Explore Retail Expansion Opportunities and receive regular updates on industry trends
                           
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section>
          <h1
            style={{
              fontSize: "50px",
              fontFamily: "Proza Libre",
              fontWeight: "700",
              letterSpacing: "-1.28px",
              margin: "0 0 0 0",
            }}
          >
            {" "}
            Some of Our <span style={{ color: "#4D98C0" }}>Clients </span>{" "}
          </h1>
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row  ">
                  <div
                    className="col-xl-12 col-lg-12  "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-4">
                          <img width={"250px"} src={rupa} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={manyar} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={duke} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-4">
                          <img width={"250px"} src={monja} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={hard} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={nesta} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-4">
                          <img width={"250px"} src={klis} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={turtle} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={manish} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row  ">
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-4">
                          <img width={"250px"} src={ramsoni} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={pinok} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4  ">
                          <img width={"250px"} src={sucess} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-4">
                          <img width={"250px"} src={afisi} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={endicot} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={sirony} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-4">
                          <img width={"250px"} src={texas} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={redrose} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-4 ">
                          <img width={"250px"} src={paul} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row  ">
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-3">
                          <img width={"150px"} src={silk} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-3 ">
                          <img width={"150px"} src={kids} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-3 ">
                          <img width={"150px"} src={girlwear} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-3">
                          <img width={"150px"} src={prime} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-3 ">
                          <img width={"150px"} src={depee} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-3 ">
                          <img width={"150px"} src={rick} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-12 col-lg-12 my-4 "
                    style={{ padding: "0 60px 0 60px" }}
                  >
                    <div className="service-detail-text">
                      <div
                        className="row d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <div className="col-lg-4 col-xl-4 py-3">
                          <img width={"150px"} src={firon} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-3 ">
                          <img width={"150px"} src={sonri} alt="error" />
                        </div>
                        <div className="   col-lg-4 col-xl-4 py-3 ">
                          <img width={"150px"} src={smart} alt="error" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section style={{ background: "black", color: "white" }}>
          <div className="container">
            <p
              className="py-3"
              style={{
                fontSize: "50px",
                fontFamily: "Proza Libre",
                fontWeight: "700",
                letterSpacing: "-1.28px",
              }}
            >
              <span style={{ color: "#4D98C0" }}> Make {" "}
              Your Mark </span>  With Exclusive Year End Offer
            </p>
            <h4 className=" talkto text-center">
              <span style={{ color: "#4D98C0" }}>Special Offer </span>
            </h4>
            <h4 className=" talkto text-center">
              Pre Book at <span style={{ color: "#4D98C0" }}> ₹600 </span>
              <span className="cut">2000 </span>
            </h4>
            <h5>
              <button
                style={{
                  border: "1px solid white",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  background: "black",
                  color: "white",
                  cursor: "default",
                }}
              >
                {" "}
                Time is Running out ,Pre Book your Directory Now{" "}
              </button>
            </h5>
            <div id="contact">
              <form className="bottomform">
                <div>
                  <label htmlFor="">Name</label>
                  <input
                    style={{ background: "white" }}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">Mobile Number</label>
                  <input
                    style={{ background: "white" }}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="tel"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    style={{ background: "white" }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">City</label>
                  <input
                    style={{ background: "white" }}
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    type="text"
                    required
                  ></input>
                </div>
              </form>
              <div className="mt-4">
                <button
                  onClick={postPutEvent}
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                >
                  Submit
                </button>
              </div>
            </div>

            <div></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Subscriber;
