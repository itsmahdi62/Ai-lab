import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about " id="about">
      <div className="container ">
        <img
          src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=0SXb4EsAAAAJ&citpid=4"
          alt=""
        />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Mahdi Bahaghighat is a dedicated and highly motivated researcher
            with over 15 years of experience in esteemed universities. With a
            rich academic background, he has authored over 40 papers in
            international journals and conferences, specializing in cutting-edge
            areas of Data Science, Artificial Intelligence, Machine Learning,
            Natural Language Processing, and Computer Vision. Currently serving
            as an Assistant Professor at Imam Khomeini International University,
            Mahdi has also established the Artificial Intelligence and Data
            Armor (AIDA) research group and leads the Artificial Intelligence in
            Science and Technology (AIST) lab. His leadership roles and
            extensive contributions reflect his commitment to advancing
            knowledge and innovation in the fields of AI and technology.
            Moreover, Mahdi has contributed to the academic community by
            reviewing manuscripts for prestigious journals such as IEEE
            Transactions on Cognitive and Developmental Systems (TCDS), IEEE
            Access, and the Journal of Grid Computing (Springer). He is deeply
            passionate about Data Science, Artificial Intelligence, Machine
            Learning, Deep Learning, Data Mining, Natural Language Processing
            (NLP), Computer Vision, and the application of AI in Finance.
          </p>
          <p>Social medias</p>
          <div className="grid grid-cols-4 items-center justify-between  mt-8">
            <a
              className=""
              target="_blank"
              rel="noopener noreferrer"
              href="https://orcid.org/0000-0002-1813-8417">
              <img
                src="https://orcid.org/assets/vectors/orcid.logo.icon.svg"
                alt=""
                className="max-h-12 max-w-2"
              />
            </a>
            <a
              className=""
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mehdi-bahaghighat/">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="48"
                height="48"
                focusable="false">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a
              className=""
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.researchgate.net/profile/Mahdi-Bahaghighat">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/ResearchGate_Logo.png/330px-ResearchGate_Logo.png"
                alt=""
                className="max-h-12"
              />
            </a>
            <a
              className="ms-8"
              target="_blank"
              rel="noopener noreferrer"
              href="https://scholar.google.com/citations?user=0SXb4EsAAAAJ&hl=en&oi=ao">
              <img
                src="https://scholar.google.com/favicon.ico"
                alt=""
                className="max-h-12"
              />
            </a>
          </div>
          <button className="button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
