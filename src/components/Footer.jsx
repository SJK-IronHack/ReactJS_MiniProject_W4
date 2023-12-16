import classes from "../styles/footer.module.css";
import gitIcon from "../assets/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={classes.mainCont}>
        <footer className="bg-dark text-center text-lg-start text-white">
          <div className="text-center p-3">
            <span>© {new Date().getFullYear()} Bearbnb </span>
            <a href="">
              <span style={{ textAlign: "center" }}>
                <img src={gitIcon} height={25} width={25} />
              </span>
              <a href="https://github.com/SJK-IronHack/ReactJS_MiniProject_W4">
                <span> Github Repository </span>

              </a>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
