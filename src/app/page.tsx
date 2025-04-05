import Image from "next/image";
import styles from './Homepage.module.css';

export default function Home() {
  return (
    <div className={styles.twoColumns}>
      <div className={styles.main}>
        <div className={styles.face}>
          <Image className={styles.faceImage}
            src="/headshot.jpeg" 
            alt="Headshot"
            width={300}  // Set the width of the image
            height={300} // Set the height of the image
          />
        </div>
        <div className={styles.buttonsGreeting}>
          <div className={styles.greeting}>
            Hi, my name is Ethan
          </div>
          <div className={styles.buttons}>
            <button className={styles.cvButton}>
              <a href="Savar_Ethan_Resume (14).pdf" download="EthanSavarResume.pdf">
                Download CV
              </a>
            </button>
            <button className={styles.linkedinButton}>
              <a href="https://www.linkedin.com/in/ethan-savar/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </button>
            <button className={styles.githubButton}>GitHub</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeTitle}>
            Welcome! I am Ethan, a Software Engineer and Researcher who loves learning.
          </div>
        </div>
      </div>
      <div className={styles.gap}>
      </div>
      <div className ={styles.experiences} id="experiences">
        <div className={styles.headerBoard}>
          <div className={styles.experienceTitle}>
            Experiences
          </div>
        </div>
      </div>
    </div>
  );
}
