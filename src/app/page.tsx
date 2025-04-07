import Image from "next/image";
import { Book } from '../components/Book/book';
import { Experience } from '../components/Experience/experience';
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
            <a href="Savar_Ethan_Resume (14).pdf" download="EthanSavarResume.pdf" className={styles.cvButton}>
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
            Welcome! I am Ethan, a Software Engineer and Researcher who loves learning.
          </div>
        </div>
      </div>
      <div className={styles.gap}>
      </div>
      <div className ={styles.experiences} id="education">
        <div className={styles.headerBoard}>
          <div className={styles.experienceTitle}>
            Education
          </div>
        </div>
        <div className={styles.timeline}>
          <Experience
              company="The Ohio State University"
              title="Honors Bachelor of Science"
              dates="August 2022 - May 2026"
              descriptions={["Major: Computer Science Engineering", "Double Major: Mathematics"]}
            />
          <div className={styles.book}><Book /></div>
          
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
        <div className={styles.timeline}>
          <Experience
            company="JPMorganChase"
            title="Incoming Software Engineer Intern"
            dates="May 2025 - Present"
            descriptions={[]}
          />
          <Experience
            company="Department of CSE at Ohio State"
            title="Undergraduate Teaching Assistant"
            dates="August 2024 - Present"
            descriptions={[
              "Selected as an undergraduate teaching assistant for CSE 2331: Foundations II - Data Structures and Algorithms",
              "Led a team of 3 TA's across 4 course sections consisting of 200+ students to grade and design rubrics for homework",
            ]}
          />
          <Experience
            company="Immuta"
            title="Research Engineer/Scientist Intern"
            dates="May 2024 - April 2025"
            descriptions={[
              "Optimized sensitive data discovery services by leveraging finite automata theory in Python and through pattern improvement, leading to an improvement in data classification by 36\% and a decrease in error rate to less than 1\%",
              "Developed a semantic similarity clustering model in PyTorch and matplotlib enabling hierarchical data matching",
              "Built a service in Typescript to generate SQL for integration testing across Snowflake, Databricks, and Redshift",
              "Created a copilot evaluation tool using Python to observe variability in subject capturing and generations",
              "Used AWS Bedrock to create a generative AI synonym detection service as part of Immuta's policy copilot"
            ]}
          />
          <Experience
            company="DataLab at Ohio State University"
            title="Undergraduate Research Assistant"
            dates="August 2023 - January 2025"
            descriptions={[
              "Researched applications of stochastic differential equations on diffusion models for video and image generation",
              "Developed uncertainty calibration technique applying transformations to LLM logit outputs for determining accuracy",
              "Created an engine leveraging OpenCV, Python, and CLIP to analyze videos and generate scene descriptions to enable searchable indexing of relevant video segments based on text queries"
            ]}
          />
          <Experience
            company="Web Hosting at Ohio State University"
            title="Software Engineer Intern"
            dates="May 2023 - December 2023"
            descriptions={[
              "Built a full-stack website administration platform using Vue and PHP to orchestrate 300+ managed websites",
              "Optimized API infrastructure decreasing query and load times for 10+ API calls from minutes to seconds",
              "Implemented Kubernetes RBAC policies to streamline platform security and decrease website onboarding time"
            ]}
          />
          

        </div>
      </div>
      <div className={styles.gap}>
      </div>
    </div>
  );
}
