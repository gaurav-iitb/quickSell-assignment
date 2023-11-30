import React from "react";
import "./Avatar.css";

function Avatar({ available }) {
  return (
    <div style={{ position: "relative" }}>
      <img style={{ borderRadius: "1rem", height: "1rem" }} src="avatar2.jpg" alt="" />
      <div className="avatar_cont">
        <div className={available ? "avatar_cir avai" : "avatar_cir"}></div>
      </div>
    </div>
  );
}

export default Avatar;
