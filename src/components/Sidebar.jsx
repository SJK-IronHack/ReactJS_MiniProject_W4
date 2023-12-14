import classes from "../styles/sidebar.module.css";
import home from "../assets/home.png";
import about from "../assets/profile-user.png";

const Sidebar = () => {
  return (
    <>
      <div className={classes.container}>
        <button className={classes.btn}>
          <span>
            <img src={home} height={18} width={18} />
          </span>
          Home
        </button>

        <button className={classes.btn}>
          <span>
            <img src={about} height={18} width={18} />
          </span>
          About
        </button>
      </div>
    </>
  );
};

export default Sidebar;
