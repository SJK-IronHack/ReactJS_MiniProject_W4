import classes from "../styles/list.module.css";
import Rentals from '../assets/rentals.json'
import ListingDetail from "./ListingDetail";


const Listing = () => {
  return (
    <>
      <div className={classes.container}>List Comp</div>
      {Rentals.results.map((items) => {
        return <div key={items.id}> <p>
          {items.name}</p> 
          <p>{items.city}</p>
          <p>{items.country}</p>
          <img className={classes.imTumbnail} src={items.picture_url.url}/>
          </div>;
      })}
    </>
  );
};

export default Listing;
