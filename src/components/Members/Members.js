import React from "react";
import user1 from "../../assets/user1.jpeg";
import "./Members.css";

const Members = () => {
  return (
    <div className="members" id="members">
      <div className="container">
        <h2>Members</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              make a type speved not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              contain
            </p>
            <p>
              <span>Johnson.M.J.</span>
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised i0s with the
              release of Letraset sheets contain
            </p>
            <p>
              <span>Carol Harper</span>
            </p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>
          <div className="card">
            <img src={user1} alt="user1" />
            <p>
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Le
            </p>
            <p>
              <span>Snow.J.R.</span>
            </p>
            <p>Managing Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
