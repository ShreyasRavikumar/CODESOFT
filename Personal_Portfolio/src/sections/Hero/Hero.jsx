import styles from './HeroStyles.module.css';

import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGOhpIlDeSsLw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715076969667?e=1730332800&v=beta&t=qSqNfWMwHs2fU3HEJFTeoqrEc9k99hLrry0Bd2CySs8"
          className={styles.hero}
          alt="Profile picture of Shreyas R"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          SHREYAS R
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/ShreyasRavikumar/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/shreyas-r-a05b87255/overlay/about-this-profile/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        I’m currently pursuing my engineering in the branch of CSE.I’m a passionate learner and I’m enthusiastic to explore
        new things. I seek challenging opportunities where I can fully use my skills for the success of the organization.
        </p>
        <a href="https://drive.google.com/file/d/1o351lccK7qmbP3ZC-2XJcGPrUwqaIHnW/view?usp=drive_link" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
