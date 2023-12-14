import { useState } from "react";

const Listing = ({ listingData }) => {
  const [items, setItems] = useState(listingData || []);

  return (
    <div className="listing">
      <h1>Listing</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>{i.total_count}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
