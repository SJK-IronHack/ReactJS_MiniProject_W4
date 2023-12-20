import classes from "../styles/sidebar.module.scss";

const Sidebar = ({ checkedPrice, setCheckedPrice }) => {
  return (
    <>
      <div className={classes.buttonsContainer}>
        <label>
          Sort Listings by Name
          <input
            name="price"
            type="checkbox"
            value={checkedPrice}
            onChange={(e) => setCheckedPrice(e.target.checked)}
          />
        </label>
        <label>
          Sort Listings by Price
          <input name="price" type="checkbox" />
        </label>
      </div>
    </>
  );
};

export default Sidebar;
