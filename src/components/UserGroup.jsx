import React from "react";
import "./UserGroup.css";
import Card from "./Card";
import Avatar from "./Avatar";

function UserGroup({ data, ordering }) {
  return (
    <div className="user_main">
      {data &&
        data.users.map((user) => {
          let cards = [];
          {
            data.tickets.map((ticket) => {
              if (ticket.userId === user.id) {
                cards.push(ticket);
              }
            });
          }
          if (ordering === "Priority") {
            cards.sort((a, b) => b.priority - a.priority);
          } else if (ordering === "Title") {
            cards.sort((a, b) => a.title.localeCompare(b.title));
          }
          return (
            <div className="user_block">
              <div className="user_cont">
                <div className="user_smblk">
                  <Avatar available={user.available} />
                  <div>{user.name}</div>
                  <div>{cards.length}</div>
                </div>
                <div className="user_smblk">
                  <img alt="" src="add.svg" />
                  <img alt="" src="3dot.svg" />
                </div>
              </div>
              <div className="user_cardcont">
                {cards.map((card, id) => (
                  <Card
                    key={id}
                    title={card.id}
                    desc={card.title}
                    tags={card.tag[0]}
                    priority={card.priority}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default UserGroup;
