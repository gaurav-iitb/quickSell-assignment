import React, { useEffect, useState } from "react";
import "./StatusGroup.css";
import Card from "./Card";

function PriorityGroup(props) {
  const [urgent, setUrgent] = useState([]);
  const [high, setHigh] = useState([]);
  const [medium, setMedium] = useState([]);
  const [low, setLow] = useState([]);
  const [noPriority, setNoPriority] = useState([]);

  useEffect(() => {
    let Urgent = [];
    let High = [];
    let Medium = [];
    let Low = [];
    let NoPriority = [];

    {
      props.data?.tickets.map((ticket, id) => {
        if (ticket.priority === 4) Urgent.push(ticket);
        else if (ticket.priority === 3) High.push(ticket);
        else if (ticket.priority === 2) Medium.push(ticket);
        else if (ticket.priority === 1) Low.push(ticket);
        else if (ticket.priority === 0) NoPriority.push(ticket);
      });
    }

    if (props.ordering === "Priority") {
      Urgent.sort((a, b) => b.priority - a.priority);
      High.sort((a, b) => b.priority - a.priority);
      Medium.sort((a, b) => b.priority - a.priority);
      Low.sort((a, b) => b.priority - a.priority);
      NoPriority.sort((a, b) => b.priority - a.priority);
    } else if (props.ordering === "Title") {
      Urgent.sort((a, b) => a.title.localeCompare(b.title));
      High.sort((a, b) => a.title.localeCompare(b.title));
      Medium.sort((a, b) => a.title.localeCompare(b.title));
      Low.sort((a, b) => a.title.localeCompare(b.title));
      NoPriority.sort((a, b) => a.title.localeCompare(b.title));
    }

    setUrgent(Urgent);
    setHigh(High);
    setMedium(Medium);
    setLow(Low);
    setNoPriority(NoPriority);
  }, [props.data, props.ordering]);

  return (
    <div className="status_main">
      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <div>---</div>
            <div>No Priority</div>
            <div>{noPriority.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {noPriority.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <img alt="" src="urgent.png" style={{ width: "18px" }} />
            <div>Urgent</div>
            <div>{urgent.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {urgent.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <img alt="" src="high.png" style={{ width: "18px" }} />
            <div>High</div>
            <div>{high.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {high.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <img alt="" src="medium.png" style={{ width: "18px" }} />
            <div>Medium</div>
            <div>{medium.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {medium.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <img alt="" src="low.png" style={{ width: "18px" }} />
            <div>Low</div>
            <div>{low.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {low.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriorityGroup;
