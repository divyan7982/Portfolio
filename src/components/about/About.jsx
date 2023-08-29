import './about.css';
import React from 'react';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://img.freepik.com/premium-photo/flat-design-man-sitting-chair-with-laptop_620650-1373.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am Divyanshu Choubey, an enthusiastic undergraduate student at
          Maharaja Agrasen Institute of Technology, currently pursuing a degree
          in Electronics and Communication Engineering (ECE). Proficient in{' '}
          <b>Data Structures and Algorithms (DSA)</b>, I thrive on solving
          intricate problems and embracing coding challenges head-on.
        </p>
        <div className="a-award">
          <img
            src="https://img.freepik.com/free-vector/hand-holding-trophy_1284-3981.jpg?size=626&ext=jpg&ga=GA1.2.1777705238.1692000123&semt=sph"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Hacktoberfest Issued by DigitalOcean · Oct 2022
            </h4>
            <p className="a-award-desc">
              Successfully completed Hacktoberfest Event with quality
              open-source contributions.
            </p>
          </div>
        </div>
        <div className="a-award">
          <img
            src="https://img.freepik.com/free-vector/internship-job-concept-illustration_23-2148754785.jpg?size=626&ext=jpg&uid=R113265601&ga=GA1.2.1777705238.1692000123&semt=ais"
            alt=""
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Web Development Internship at Codsoft Company.
            </h4>
            <p className="a-award-desc">
              "Web development intern at CodSoft, where I honed my skills in
              HTML, CSS, and JavaScript. Worked on real-world projects,
              collaborating with a talented team to create responsive and
              visually appealing web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
