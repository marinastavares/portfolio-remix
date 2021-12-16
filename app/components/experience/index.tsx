/* eslint-disable react/react-in-jsx-scope */

import Brain from "~/assets/brain.png";
import Job from "~/assets/job.png";
import Consultant from "~/assets/consultant.png";

import styles from "./styles.css";
import clsx from "clsx";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface ExperienceProps {
  title: string;
  company: string;
  consultant?: string;
  techs: string[];
  time: string;
  isOdd?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
}

const Experience = ({
  title,
  company,
  consultant,
  techs,
  time,
  isFirst,
  isOdd,
  isLast,
}: ExperienceProps) => {
  return (
    <div className="one-experience">
      <p className={clsx("time", { ["column3"]: isOdd })}>{time}</p>
      <div className="middle-circle">
        <div className={clsx({ ["circle"]: !isFirst, ['circle-border']: isFirst})} />
        {!isLast && <div className="line" />}
      </div>{" "}
      <div className={clsx("experience-content", { ["column1"]: isOdd })}>
        <h2 className="experience-subtitle">{title}</h2>
        <div className="experience-location">
          <img src={Job} aria-hidden="true" />
          <p className="experience-company">{company}</p>
          {consultant && (
            <>
              <img src={Consultant} aria-hidden="true" />
              <p className="experience-company">{consultant}</p>
            </>
          )}
        </div>
        <div className="experience-location">
          <img className="brain" src={Brain} aria-hidden="true" />
          <div className="experience-tech">
            {techs.map((tech) => (
              <p key={time + tech} className="tech">
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
