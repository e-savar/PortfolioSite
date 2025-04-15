import Image from "next/image";
import { Book } from '../components/Book/book';
import EducationDesk from "../components/Education/educationDesk";
import { Experience } from '../components/Experience/experience';
import styles from './Homepage.module.css';

export default function Home() {
  return (
    <div>
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
            Hi, my name is Ethan Savar 
          </div>
          <div className={styles.buttons}>
            <a href="Savar_Ethan_Resume.pdf" download="EthanSavarResume.pdf" className={styles.cvButton}>
              Download CV
            </a>
            <a href="https://www.linkedin.com/in/ethan-savar/" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
              LinkedIn
            </a>
            <a href="https://github.com/e-savar" target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
              Github
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeTitle}>
            Welcome! I am Ethan, a Software Engineer and Researcher with a passion for mathematics. I have contributed to a wide range of projects ranging from full stack development, to data science and machine learning. If you're looking for a motivated contributor to your team, please feel free to reach out!
          </div>
        </div>
      </div>
      <div className={styles.gap}>
      </div>
      <div className ={styles.experiences} id="education">
        <div className={[styles.headerBoard, styles.block].join(" ")}>
          <div className={styles.experienceTitle}>
            Education
          </div>
        </div>
        <div className={[styles.desk, styles.block].join(" ")}>
          <EducationDesk />
        </div>
      </div>
      <div className={styles.gap}>
      </div>
      <div className ={[styles.experiences, styles.block].join(" ")} id="experiences"><div className={styles.headerBoard}>
          <div className={styles.experienceTitle}>
            Experiences
          </div>
      </div>
      <div className={[styles.book, styles.block].join(" ")}>
        <Book />
      </div>
      </div>
      <div className={styles.gap}>
      </div>
      <div className ={styles.experiences} id="projects">
        <div className={[styles.headerBoard, styles.block].join(" ")}>
          <div className={styles.experienceTitle}>
            Projects
          </div>
        </div>
        <div className={styles.timeline}>
        </div>
      </div>
      <div className={styles.gap}>
      </div>
    </div>
  );
}
