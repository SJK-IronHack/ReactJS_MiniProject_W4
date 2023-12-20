import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "../styles/addHotel.module.scss";

const AddHotel = ({ items, setItems }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");
  const [host, setHost] = useState("");
  const [responding, setResponding] = useState("");
  const [property, setProperty] = useState("");
  const [room, setRoom] = useState("");
  const [space, setSpace] = useState("");
  const [rules, setRules] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, country, url, host, desc, price });

    setItems([
      {
        id: uuidv4(),
        country: country,
        city: city,
        neighbourhood: "La Latina",
        name: name,
        space: space,
        description: desc,
        house_rules: rules,
        host_name: name,
        host_since: host,
        host_response_time: responding,
        property_type: property,
        room_type: room,
        accommodates: 6,
        bathrooms: 2.0,
        bedrooms: 2,
        beds: 2,
        price: price,
        cleaning_fee: 25,
        review_scores_rating: 90,
        cancellation_policy: "moderate",
        picture_url: {
          thumbnail: true,
          filename: "34ca06b6_original.jpg",
          format: "JPEG",
          width: 639,
          mimetype: "image/jpeg",
          etag: '"d434d211cd0197a13dcc8db9e2ce86afa8ee3169"',
          id: uuidv4(),
          last_synchronized: "2019-06-03T13:56:01.954410",
          color_summary: [
            "rgba(209, 209, 198, 1.00)",
            "rgba(201, 192, 185, 1.00)",
            "rgba(167, 126, 121, 1.00)",
          ],
          height: 426,
          url: url,
        },
      },
      ...items,
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <h3>Add Hotel Page</h3>
        <div>
          <label>
            Name :
            <input
              name="name"
              type="text"
              placeholder=" Hotel Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Country :
            <select
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">-- None --</option>
              <option value="Spain">Spain</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>
          </label>
          <br />
          <label>
            City :
            <select
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">-- None --</option>
              <option value="Madrid">Madrid</option>
              <option value="Paris">Paris</option>
              <option value="Berlin">Berlin</option>
            </select>
          </label>
          <br />
          <label>
            Price :
            <input
              name="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <br />
          <label>
            Image URL
            <input
              name="url"
              type="text"
              placeholder="Image URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <br />
          <label>
            Host
            <input
              name="host_name"
              type="text"
              placeholder="Host name"
              value={host}
              onChange={(e) => setHost(e.target.value)}
            />
          </label>
          <br />
          <label>
            Responding
            <input
              name="host_response_time"
              type="text"
              placeholder="Responding Time"
              value={responding}
              onChange={(e) => setResponding(e.target.value)}
            />
          </label>
          <br />
          <label>
            Property Type
            <input
              name="property_type"
              type="text"
              placeholder="Property Type"
              value={property}
              onChange={(e) => setProperty(e.target.value)}
            />
          </label>
          <br />
          <label>
            Room Type
            <input
              name="room_type"
              type="text"
              placeholder="Room Type"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </label>
          <br />
          <label>
            Space Information
            <textarea
              name="space"
              placeholder="Space Information"
              rows={4}
              cols={40}
              value={space}
              onChange={(e) => setSpace(e.target.value)}
            />
          </label>
          <br />
          <label>
            Rules
            <textarea
              name="house_rules"
              placeholder="House Rules"
              rows={4}
              cols={40}
              value={rules}
              onChange={(e) => setRules(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description :
            <textarea
              name="description"
              placeholder="House Description"
              rows={4}
              cols={40}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>

          <br />
          <button type="submit">Add Student</button>
          <br />
          <br />
          <br />
          <br />
        </div>
      </form>
    </>
  );
};

export default AddHotel;
