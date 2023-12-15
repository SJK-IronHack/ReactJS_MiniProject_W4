import classes from "../styles/list.module.css";
import Rentals from "../assets/rentals.json";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <>
      <div className={classes.container}>List Comp</div>
      {Rentals.results.map((items) => {
        return (
          <Link key={items.id} to={`/listing/${items.id}`}>
            <p>{items.name}</p>
            {/* <p>{items.city}</p>
            <p>{items.country}</p>
            <img className={classes.imTumbnail} src={items.picture_url.url} /> */}
          </Link>
        );
      })}
    </>
  );
};

export default Listing;
