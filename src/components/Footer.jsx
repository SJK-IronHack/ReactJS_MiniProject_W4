import classes from "../styles/footer.module.css";
import gitIcon from "../assets/github.png";
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
              <span> Github Repository </span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
