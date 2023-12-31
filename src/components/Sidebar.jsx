import classes from "../styles/sidebar.module.scss";

const Sidebar = ({ checkedPrice, setCheckedPrice }) => {
  return (
    <>
      <div className={classes.buttonsContainer}>
        <label>
          Sort Listings by Price
          <div className={classes.checkboxContainer}>
            <input
              name="price"
              type="checkbox"
              value={checkedPrice}
              onChange={(e) => setCheckedPrice(e.target.checked)}
            />
          </div>
        </label>
        {/* <label>
          Sort Listings by Price
        <div className={classes.toggle}>

          <input name="price" type="checkbox" className={classes.toggleState} />
          <div className={classes.indicator}></div>
        </div>
        </label> */}
      </div>
    </>
  );
};

export default Sidebar;
