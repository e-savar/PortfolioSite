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
            <button className={styles.cvButton}>Download CV</button>
            <button className={styles.linkedinButton}>
              Linkedin
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
    </div>
  );
}
