import React from "react";
import "./Card.css";
import Avatar from "./Avatar";

function Card(props) {
  function Display(title) {
    console.log(title.length);
    if (title.length > 70) {
      return title.substring(0, 70) + "...";
    }
    return title;
  }
  function DisplayPriority() {
    let prior = props.priority;
    if (prior === 0) return <div style={{ color: "gray" }}>---</div>;
    else if (prior === 4)
      return <img alt="" src="info_gray.png" style={{ width: "16px" }} />;
    else if (prior === 3)
      return <img alt="" src="high.png" style={{ width: "16px" }} />;
    else if (prior === 2)
      return <img alt="" src="medium.png" style={{ width: "16px" }} />;
    else if (prior === 1)
      return <img alt="" src="low.png" style={{ width: "16px" }} />;
  }
  return (
    <div className="card-mn">
      <div className="card-up">
        <div>{props.title}</div>
        <Avatar available={props.available ? true : false} />
      </div>

      <b>{Display(props.desc)}</b>
      <div className="card-bot">
        {props.priority >= 0 && (
          <div className="bord">
            <DisplayPriority />
          </div>
        )}
        {props.tags && (
          <div className="bord card-bot-desc">
            <div className="sm_fill_circ"></div>
            <div style={{ color: "gray", fontWeight: "500" }}>
              {props.tags}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
