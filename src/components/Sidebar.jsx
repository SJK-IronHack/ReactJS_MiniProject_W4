import classes from "../styles/sidebar.module.scss";
import home from "../assets/home.png";
import about from "../assets/profile-user.png";
import { useEffect, useState } from "react";

const Sidebar = ({price, whenChanging}) => {


        const handleCheckedPrices = (e) => whenChanging(e.target.checked)



  return (
    <>
      <div className={classes.buttonsContainer}>
      
          <label>
            Listings under 100$
            <input name="price" type="checkbox" checked={price} onChange={handleCheckedPrices} />
          </label>
    
        {/* <div>
        <label>
            Country
            <select name="country">
              <option value="">-- All --</option>
              <option value="Spain">Spain</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>
          </label>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
