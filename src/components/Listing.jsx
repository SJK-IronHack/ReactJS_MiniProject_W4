import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import classes from "../styles/list.module.css";
import Rentals from "../assets/rentals.json";

const Listing = () => {
  const [items, setItems] = useState(Rentals.results);

  const handleRemove = (id) => {
    // Filter out the item with the given id
    const updatedItems = items.filter((item) => item.id !== id);
    // Update the state with the new array of items
    setItems(updatedItems);
  };

  return (
    <>
      <div className={classes.container}>List Comp</div>
      {items.map((item) => (
        <div key={item.id} className={classes.listItem}>
          <Link to={`/listing/${item.id}`}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <div className={classes.listingLocation}>
              <p>{item.city}</p>
              <p>{item.country}</p>
            </div>
            <img className={classes.imgTumbnail} src={item.picture_url.url} alt={item.name} />
          </Link>
          <Button onClick={() => handleRemove(item.id)}>Remove</Button>
        </div>
      ))}
    </>
  );
};

export default Listing;
