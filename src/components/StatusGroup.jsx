import React, { useEffect, useState } from "react";
import "./StatusGroup.css";
import Card from "./Card";

function StatusGroup(props) {
  const [backlog, setBacklog] = useState([]);
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const [canceled, setCanceled] = useState([]);

  useEffect(() => {
    let Backlg = [];
    let Tod = [];
    let InProg = [];
    let Done = [];
    let Cancel = [];

    {
      props.data?.tickets.map((ticket, id) => {
        if (ticket.status === "Backlog") Backlg.push(ticket);
        else if (ticket.status === "Todo") Tod.push(ticket);
        else if (ticket.status === "In progress") InProg.push(ticket);
        else if (ticket.status === "Done") Done.push(ticket);
        else if (ticket.status === "Canceled") Cancel.push(ticket);
      });
    }

    if (props.ordering === "Priority") {
      Backlg.sort((a, b) => b.priority - a.priority);
      Tod.sort((a, b) => b.priority - a.priority);
      InProg.sort((a, b) => b.priority - a.priority);
      Done.sort((a, b) => b.priority - a.priority);
      Cancel.sort((a, b) => b.priority - a.priority);
    } else if (props.ordering === "Title") {
      Backlg.sort((a, b) => a.title.localeCompare(b.title));
      Tod.sort((a, b) => a.title.localeCompare(b.title));
      InProg.sort((a, b) => a.title.localeCompare(b.title));
      Done.sort((a, b) => a.title.localeCompare(b.title));
      Cancel.sort((a, b) => a.title.localeCompare(b.title));
    }

    setBacklog(Backlg);
    setTodo(Tod);
    setInProgress(InProg);
    setDone(Done);
    setCanceled(Cancel);
  }, [props]);

  return (
    <div className="status_main">
      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <div className="sm_circ"></div>
            <div>Backlog</div>
            <div>{backlog.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {backlog.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
              priority={ticket.priority}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <div className="sm_circ"></div>
            <div>Todo</div>
            <div>{todo.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {todo.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
              priority={ticket.priority}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <img alt="" style={{ width: "18px" }} src="inProgress.png" />
            <div>In Progress</div>
            <div>{inProgress.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {inProgress.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
              priority={ticket.priority}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <img alt="" style={{ width: "18px" }} src="check.png" />
            <div>Done</div>
            <div>{done.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {done.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
              priority={ticket.priority}
            />
          ))}
        </div>
      </div>

      <div className="status_block">
        <div className="status_cont">
          <div className="status_smblk">
            <img alt="" style={{ width: "18px" }} src="cross.png" />
            <div>Cancelled</div>
            <div>{canceled.length}</div>
          </div>
          <div className="status_smblk">
            <img alt="" src="add.svg" />
            <img alt="" src="3dot.svg" />
          </div>
        </div>
        <div className="status_cardcont">
          {canceled.map((ticket, id) => (
            <Card
              key={id}
              title={ticket.id}
              desc={ticket.title}
              tags={ticket.tag[0]}
              priority={ticket.priority}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusGroup;
