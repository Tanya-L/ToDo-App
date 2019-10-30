import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItems(props) {
  const items = props.items;
  //   console.log(items);
  const listItems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="checkbox"
            value={item.done}
            onChange={e => {
              props.setUpdateDone(e.target.value, item.key);
            }}
          ></input>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={e => {
              props.setUpdateText(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              onClick={() => {
                props.deleteItem(item.key);
              }}
              icon="trash"
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItems;
