import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../styles/list.module.css";
import Rentals from "../assets/rentals.json";
import { Button } from "react-bootstrap";


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
      <div className={classes.listContainer}>List Comp</div>
      {items.map((item) => (
        <div key={item.id} className={classes.listItem}>
          <Link to={`/listing/${item.id}`} className={classes.listItemLink}>
            <img className={classes.imgTumbnail} src={item.picture_url.url} alt={item.name} />
            <div className={classes.basicInfos}>
              <div className={classes.listingLocation}>
                <p>{item.city}</p>
                <p>{item.country}</p>
              </div>
              <div className={classes.price}>{item.price} $ </div>
            </div>

            <div className={classes.listItemDescription}>
              <p>{item.name}</p>
            </div>
          </Link>
          <Button className="buttonRemove" onClick={() => handleRemove(item.id)}>Remove</Button>
        </div>
      ))}
    </>
  );
};

export default Listing;
