import { Link } from "react-router-dom";
import classes from "../styles//list.module.scss";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Rentals from "../assets/rentals.json";

const Listing = ({ data, setData }) => {
  const [items, setItems] = useState(Rentals.results);
  const [checkedPrice, setCheckedPrice] = useState(false);
  const handleRemove = (id) => {
    // Filter out the item with the given id
    const updatedItems = items.filter((item) => item.id !== id);
    const updatedItems2 = data.filter((item) => item.id !== id);
    // Update the state with the new array of data
    setItems(updatedItems);
    setData(updatedItems2);
  };

  const sortData = () => {
    const dataSort = [...data];
    dataSort.sort((a, b) => a.price - b.price);
    setData(dataSort);
  };
  useEffect(() => {
    sortData();
  }, []);

  return (
    <>
      <Sidebar checkedPrice={checkedPrice} setCheckedPrice={setCheckedPrice} />

      {checkedPrice && (
        <div>
          {data.map((item) => (
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
                  <p style={{ marginTop: "25px" }}>{item.name}</p>
                </div>
              </Link>
              <button
                style={{ marginTop: "25px" }}
                className={classes.buttonRemove}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {!checkedPrice && (
        <div>
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
                  <p style={{ marginTop: "25px" }}>{item.name}</p>
                </div>
              </Link>
              <button
                style={{ marginTop: "25px" }}
                className={classes.buttonRemove}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Listing;
