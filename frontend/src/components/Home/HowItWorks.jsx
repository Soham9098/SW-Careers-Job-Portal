import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How SW Careers Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Create Account is a feature that allows users to register on a platform by providing their personal details, such as name, email, and password, to gain access to its services and functionalities..
                

              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Find a Job lets users search and apply for job openings. Post a Job allows employers to advertise job vacancies and find suitable candidates.
               
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job</p>
              <p>
              Apply for Job enables users to submit their applications, including resumes and cover letters, to potential employers for specific job openings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
