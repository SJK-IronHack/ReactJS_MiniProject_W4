import { useParams } from "react-router-dom";
import Rentals from "../assets/rentals.json";
import classes from "../styles/listingDetail.module.css";
import '../styles/listingDetail.module.scss';
import { Button } from "react-bootstrap";


const ListingDetail = () => {
  //const itemId = "6221624";
  const { hotelId } = useParams();
  const itemProfile = Rentals.results.find((item) => item.id == hotelId);
  return (
    <div>
      <div className={classes.itemDescription}>
        <div className={classes.listingButtons}>
          <Button className="buttonRemove">Update</Button>
          <Button className="buttonRemove">Remove</Button>
        </div>
        <h3> {itemProfile.name}</h3>
        <img src={itemProfile.picture_url.url} height={300} width={300} />

        <div className={classes.infoBlat} >
          <p>Price: {itemProfile.price}</p>
          <p>Country: {itemProfile.country}</p>
          <p>City: {itemProfile.city}</p>
          <p>Host: {itemProfile.host_name}</p>
          <p>Since: {itemProfile.host_since}</p>
          <p>responding: {itemProfile.host_response_time}</p>
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
          <p> {itemProfile.description}</p>
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
