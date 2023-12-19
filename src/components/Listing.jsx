import { Link } from "react-router-dom";
import classes from "../styles//list.module.scss";
import Sidebar from "./Sidebar";
import { useState } from "react";


const Listing = ({ items, setItems }) => {
  const handleRemove = (id) => {
    // Filter out the item with the given id
    const updatedItems = items.filter((item) => item.id !== id);
    // Update the state with the new array of items
    setItems(updatedItems);
  };
  let [price, setPrices] = useState(false);


  return (
    <>
          <Sidebar price={price} whenChanging = {whenChanging} />

      <div className={classes.listContainer}></div>
      {items.map((item) => (
        <div key={item.id} className={classes.listItem}>
          <Link to={`/listing/${item.id}`} className={classes.listItemLink}>
            <img
              className={classes.imgTumbnail}
              src={item.picture_url.url}
              alt={item.name}
            />
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
          <button
            className="buttonRemove"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default Listing;
