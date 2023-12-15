import React from "react";
import classes from "../styles/list.module.css";

function ListingItem({obj}) {
  return (
    <div className={classes.listItem} key={obj.id}>
      {/* Render your item content here */}
      <h3>{obj.title}</h3>
      <p>{obj.description}</p>
    </div>
  );
}

export default ListingItem;