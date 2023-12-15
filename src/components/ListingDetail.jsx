import { useParams } from "react-router-dom";
import Rentals from "../assets/rentals.json";

const ListingDetail = () => {
  //const itemId = "6221624";
  const { hotelId } = useParams();
  const itemProfile = Rentals.results.find((item) => item.id == hotelId);
  return (
    <div>
      <img src={itemProfile.picture_url.url} height={300} width={300} />
    </div>
  );
};

export default ListingDetail;
