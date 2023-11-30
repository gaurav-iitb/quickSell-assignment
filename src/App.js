import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import StatusGroup from "./components/StatusGroup";
import UserGroup from "./components/UserGroup";
import PriorityGroup from "./components/PriorityGroup";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  console.log(data);
  function handleToggle(curr) {
    setShow(curr);
  }

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });

    let group = localStorage.getItem("grouping");
    if (group) {
      setGrouping(group);
    }
    let order = localStorage.getItem("ordering");
    if (order) {
      setOrdering(order);
    }
  }, []);

  function HandleGrouping(e) {
    localStorage.setItem("grouping", e.target.value);
    setGrouping(e.target.value);
  }

  function HandleOrdering(e) {
    localStorage.setItem("ordering", e.target.value);
    setOrdering(e.target.value);
  }

  return (
    <div className="App">
      <div className="top-nav">
        <div
          className="display_div"
          onClick={() => {
            handleToggle(true);
          }}
        >
          <img style={{ width: "1rem" }} src="./tune.svg" alt="" />
          <div className="dropbtn">Display</div>
          <img style={{ width: "1rem", marginTop: "1px" }} src="./downic.svg" alt="" />
        </div>
        {show && (
          <div className="dropdown">
            <div className="flex-horiz">
              <div style={{width: "50%"}}>Grouping</div>
              <select
                onChange={HandleGrouping}
                value={grouping}
                name="grouping"
                id="grouping"
                style={{width: "50%", border: "0.2px solid gray"}}
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div className="flex-horiz">
              <div style={{width: "50%"}}>Ordering</div>
              <select
                onChange={HandleOrdering}
                value={ordering}
                name="ordering"
                id="ordering"
                style={{width: "50%"}}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <div
        className="main-body"
        onClick={() => {
          handleToggle(false);
        }}
      >
        {grouping == "Status" && (
          <StatusGroup data={data} ordering={ordering} />
        )}
        {grouping === "User" && <UserGroup data={data} ordering={ordering} />}
        {grouping === "Priority" && (
          <PriorityGroup data={data} ordering={ordering} />
        )}
      </div>
    </div>
  );
}

export default App;
