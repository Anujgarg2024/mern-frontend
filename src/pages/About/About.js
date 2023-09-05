import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am Anuj Garg from Madhy Pradesh. I am pursuing b.tech branch
                of Computer Science Engineering from I.K.Guujral Punjab
                TTechnical University Amritsar i like play cricket in free time.
                I have completed two internship and i have made some project
                like "Porfolio(mern)" , "Linkidin profile" , "Testbook test" and
                "Quora-clone(mern)" in languge html,css,javascript,react.js,node.js,mongooseDB,Firebase,Postman
                ect. 
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
