import { useParams } from "react-router-dom";
// import Rentals from "../assets/rentals.json";
import classes from "../styles/listingDetail.module.scss";

const ListingDetail = ({ items }) => {
  //const itemId = "6221624";
  const { hotelId } = useParams();
  console.log(typeof hotelId);
  const itemProfile = items.find((item) => item.id === hotelId);
  return (
    <div>
      <div className={classes.itemDescription}>
        <div className={classes.listingButtons}>
          <button className="buttonRemove">Update</button>
          <button className="buttonRemove">Remove</button>
        </div>
        <h3> {itemProfile.name}</h3>
        <img src={itemProfile.picture_url.url} height={300} width={300} />

        <div className={classes.infoBlat}>
          <p>Price: {itemProfile.price}</p>
          <p>Country: {itemProfile.country}</p>
          <p>City: {itemProfile.city}</p>
          <p>Host: {itemProfile.host_name}</p>
          <p>Since: {itemProfile.host_since}</p>
          <p>Responding: {itemProfile.host_response_time}</p>
          <p>Property type: {itemProfile.property_type}</p>
          <p>Room type: {itemProfile.room_type}</p>
        </div>

        <div className={classes.description}>
          <p className={classes.subHeadline}>Description</p>
          <p> {itemProfile.description}</p>
        </div>

        <div className={classes.space}>
          <p className={classes.subHeadline}>Space</p>
          <p className={classes.space}> {itemProfile.space}</p>
          {/* <p> {itemProfile.description}</p> */}
        </div>

        <div className={classes.houseRules}>
          <p className={classes.subHeadline}>Rules</p>
          <p className={classes.houseRules}> {itemProfile.house_rules}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
