import React from 'react';
import "./intro.css"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Divyanshu Choubey</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Engineer</div>
              <div className="i-title-item">AI Enthusiast</div>
              <div className="i-title-item">Data Analyst</div>
            </div>
          </div>
          <p className="i-desc">
            I am a passionate coder who enjoys building and creating interesting
            things and projects. I have experience with both frontend and
            backend development.
          </p>
        </div>
      </div>
      <div className="i-right">
        <img
          src="https://img.freepik.com/free-photo/view-smiling-3d-man-using-tablet_23-2150709866.jpg"
          alt=""
          className="i-img"
        />
      </div>
    </div>
  );
};

export default Intro;
