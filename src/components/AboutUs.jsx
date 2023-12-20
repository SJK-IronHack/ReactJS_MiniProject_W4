import classes from '../styles/aboutUs.module.scss'


const AboutUs = () => {

    return (
        < div className={classes.wrapper}>
            <h3 className={classes.aboutUs}> Sonali Rathod and Slawomir Jakub </h3>

            <div className={classes.card} >
                <img src='public/68811418_360.png'  />
                <div className={classes.description}>
                    <p>Slawomir Jakub</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing   elit, sed do eiusmod tempor incididunt ut   labore  et dolore magna aliqu   fugiat nulla pariatur.
                    </p>
                    <a href='https://github.com/sonali582000'>
                        <span> Github Repository →</span>
                    </a>
                </div>
            </div>
            <div className={classes.card} >
                <img src='public/Intro2.png' />
                <div className={classes.description}>
                    <p>Slawomir Jakub</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing   elit, sed do eiusmod tempor incididunt ut   labore  et dolore magna aliqu   fugiat nulla pariatur.
                    </p>
                    <a href='https://github.com/mirJakub'>
                        <span> Github Repository →</span>
                    </a>
                </div>
            </div>

        </div>
    )

}

export default AboutUs;