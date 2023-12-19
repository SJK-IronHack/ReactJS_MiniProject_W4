import classes from "../styles/footer.module.scss";
import gitIcon from "../assets/github.png";

const Footer = () => {
  return (
    <>
      <div className={classes.mainCont}>
        <footer >
          <div className="footerWrapper">
        
              <a href="https://github.com/SJK-IronHack/ReactJS_MiniProject_W4">
                <span> Our Github Repository →</span>
              </a>
        
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
