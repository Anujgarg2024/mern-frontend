import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
         My best top three projects are "Quora-clone" , "Porfolio" & "Quiz-app" . I think the best opportunity for given the job and i will extra learning to given the own best.
                 </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Quora-Clone mern stack
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Anujgarg2024/quora-clone-v3.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full-stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>

                  <span className="card-detail-badge">node.js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Techinfoyt Coding App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Anujgarg2024/linkedin-profile"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Java-script</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Html</span>
                  <span className="card-detail-badge">Css</span>

                  <span className="card-detail-badge">javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">linkedin profile</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;