import React from "react";
import "./Home.css";
import { useState } from "react";
import apperallogo from "./images/apperallogo.png";
import watsapplogo from "./images/watsapplogo.png";
import fremans from "./images/fremans.png";
import generateleads from "./images/generateleads.png";
import brand from "./images/brands.png";
import searcharrow from "./images/searcharrow.png";
import arrowpeople from "./images/arrowpeople.png";
import handearth from "./images/handearth.png";
import peoplestar from "./images/peoplestar.png";
import handbag from "./images/handbag.png";
import rupa from "./images/rupa.png";
import manyar from "./images/manyar.png";
import duke from "./images/duke.png";
import monja from "./images/monja.png";
import hard from "./images/hard.png";
import nesta from "./images/nesta.png";
import klis from "./images/klis.png";
import turtle from "./images/turtle.png";
import manish from "./images/manish.png";
import ramsoni from "./images/ramsoni.png";
import pinok from "./images/pinok.png";
import sucess from "./images/sucess.png";
import afisi from "./images/afisi.png";
import endicot from "./images/endicot.png";
import sirony from "./images/sirony.png";
import texas from "./images/texas.png";
import redrose from "./images/redrose.png";
import paul from "./images/paul.png";
import silk from "./images/silk.png";
import kids from "./images/kids.png";
import girlwear from "./images/girlwear.png";
import prime from "./images/prime.png";
import depee from "./images/depee.png";
import rick from "./images/rick.png";
import firon from "./images/firon.png";
import sonri from "./images/sonri.png";
import smart from "./images/smart.png";
function Home() {
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
    const url = "http://localhost:5000/Contact";
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
        <div className="py-2">
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
                      <p style={{ fontWeight: "700", fontSize: "50px",fontFamily:"Proza Libre",lineHeight:"60px" }}>
                        Grow Your{" "} <br />
                        <span style={{ color: "#4D98C0" }}> Business </span>{" "}
                        With <br /> Indian Apparel
                      </p>
                      <p
                      style={{
                        fontSize: "17px",
                        fontWeight: "700,",
                        fontFamily: "Proza Libre",
                        lineHeight: "36.5px",
                        letterSpacing: "-0.4px",
                      }}>
                      Launching India’s most awaited Apparel Manufacturers Directory: <b> “FAMD Special Edition” </b>, Product wise, City wise & Brand wise
                      </p>
                      <div className="  watsapp">
            
              <a
                href={"https://wa.me/919432606060" }
                target="blank"
                rel="nopper"
              >
                 <img  width={"250px"} src={watsapplogo} alt="" /> 
              </a>
            
           
          </div>
                    </div>
                    <div className="   col-lg-6 col-xl-6  ">
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
                Generate Leads{" "}
                </span>{" "}
                <span style={{ color: "#000" }}>
                Faster and build your brand, easy-peasy, on India's very own B2B Portal and Manufacturers' Directory
                </span>
              </p>
            </div>
            <div>
              <img
                className=" my-2 container leads  ms-auto mb-n20  mb-xxl-n22"
                src={generateleads}
                alt="error"
              />
            </div>
          </div>
        </section>
        <section className="my-5" style={{ background: "#110202" }}>
          <div className="container">
            <h1 className="pt-5" style={{
                fontWeight: "700", fontSize: "50px",fontFamily:"Proza Libre" 
              }}>
              {" "}
              <span style={{ color: "#4D98C0" }}> Benefits </span>{" "}
              <span style={{ color: "white" }}> For Joining </span>
            </h1>
            <div className="row pb-5 ">
              <div
                className="col-xl-12 col-lg-12 "
                
              >
                <div className="service-detail-text">
                  <div className="row d-flex" style={{ alignItems: "center" }}>
                  <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                        <img src={brand} alt="error" />

                        <div>
                        <p className="poo">
                        Dominate/Reach New Markets: Seamlessly expand reach into untapped markets including Towns and Villages
                      </p>
                        </div>
                      </div>
                      </div>
                  <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                      <img src={searcharrow} alt="error" />

                        <div>
                        <p className="poo">
                        Turbocharged Leads: Skyrocket your sales with advanced lead generation strategies both online and offline.
                      </p>
                        </div>
                      </div>
                      </div>
                  <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                      <img src={arrowpeople} alt="error" />

                        <div>
                        <p className="poo">
                        Make your Mark: Craft and refine your brand's identity through our extensive networks of distributors and agents.
                      </p>
                        </div>
                      </div>
                      </div>
                   
                    
                    
                  </div>
                </div>
              </div>
              <div
                className="col-xl-12 col-lg-12 my-2 "
               
              >
                <div className="service-detail-text">
                  <div className="row d-flex" style={{ alignItems: "center" }}>
                  <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                      <img src={handearth} alt="error" />

                        <div>
                        <p className="poo">
                        Global Limelight: Shine brightly at premier B2B events, capturing local and global attention.
                      </p>
                        </div>
                      </div>
                      </div>
                  <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                      <img src={peoplestar} alt="error" />

                        <div>
                        <p className="poo">
                        Decades of Expertise: Tap into over two decades of specialized knowledge in B2B apparel and related sectors.
                      </p>
                        </div>
                      </div>
                      </div>
                  <div className="col-lg-4 col-xl-4 pt-4">
                      <div className="mainparent card-1">
                      <img src={handbag} alt="error" />

                        <div>
                        <p className="poo">
                        Retail Revolution: Uncover new horizons for retail expansion and exponential growth. <br/>
                        Industry insights: stay ahead with cutting-edge trend updates and exclusievinsights.
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
          <h1 style={{
             fontSize: "50px",
              fontFamily: "Proza Libre",
              fontWeight: "700",
              letterSpacing: "-1.28px",
              margin:"0 0 0 0"
            }} >
            {" "}
            Some of Our <span style={{ color: "#4D98C0" }}>Clients </span> {" "}
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
            <p className="py-3" style={{
                fontSize: "50px",
                fontFamily: "Proza Libre",
                fontWeight: "700",
                letterSpacing: "-1.28px",
              }}>
              <span style={{ color: "#4D98C0" }}> Before The Year End </span>  Make {" "}
              Your Mark
            </p>
            <h4 className=" talkto" style={{fontFamily:"Proza Libre"}}>
              Let's Discuss How We Can Boost Your Business – Connect with Our
              Experts: +91-9432606060
            </h4>
            <h5 >
            <button  style={{border:"1px solid white",padding:"10px 20px",borderRadius:"10px",background:"black",color:"white", cursor:"default"}}>
                Our 100% Satisfaction Guarantee – Your Money-Back Assurance
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

            
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
