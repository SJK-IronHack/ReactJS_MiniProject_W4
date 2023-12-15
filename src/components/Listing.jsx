import classes from "../styles/list.module.css";
import ListingItem from "./ListItem";
import Rentals from '../assets/rentals.json'

const Listing = () => {
  return (
    <>
      <div className={classes.container}>List Comp</div>
      {Rentals.results.map((items) => {
        return <div key={items.id}> <p>
          {items.name}</p> 
          <p>{items.city}</p>
          <p>{items.country}</p>
          <img className={classes.imgTumbnail} src={items.picture_url.url}/>
          </div>;
      })}
    </>
  );
};

export default Listing;
