import classes from "../styles/list.module.css";
import rental from "../assets/rentals.json";
import { useState } from "react";

const Listing = () => {
  return (
    <>
      console.log({rental.results[0].city})
      <div className={classes.container}>
        <div>
          {rental.results.map((items) => {
            return <div key={items.id}>{items.id}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Listing;
