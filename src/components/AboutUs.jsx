import classes from '../styles/aboutUs.module.scss'


const AboutUs = () => {

    return (
        < div className={classes.wrapper}>
            <h3 className={classes.aboutUs}> Sonali Rathod and Slawomir Jakub </h3>

            <div className={classes.card} >
                <img src='public/68811418_360.png'  />
                <div className={classes.description}>
                    <p>Somnali Rathod</p>
                    <br />
                    <p>Hello, I'm Sonali Rathod, a postgraduate in Masters of Computer Science. I am currently enrolled in a Web Development Bootcamp and find great joy in working with React. I am actively seeking job opportunities that will allow me to enhance and apply my skills in a professional setting.
                    </p>
                    <br />
                    <a href='https://github.com/sonali582000'>
                        <span> Github Repository →</span>
                    </a>
                </div>
            </div>
            <div className={classes.card} >
                <img src='public/Intro2.png' />
                <div className={classes.description}>
                    <p>Slawomir Jakub</p>
                    <br />
                    <p>Hello, I'm Slawomir Jakub graduated with MA in Communication Design. After working as UI designer since 2018 I'm making my dream true and switch career into web development.
                    </p>
                    <br />
                    <a href='https://github.com/mirJakub'>
                        <span> Github Repository →</span>
                    </a>
                </div>
            </div>

        </div>
    )

}

export default AboutUs;