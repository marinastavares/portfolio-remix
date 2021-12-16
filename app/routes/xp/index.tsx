/* eslint-disable react/react-in-jsx-scope */
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

import Pin from "~/assets/pin.png";
import First from "~/assets/xp/first.png";
import Batman from "~/assets/xp/second.png";

import styles from "~/styles/xp/styles.css";
import Experience, { links as ExperienceLinks } from "~/components/experience";

export function links() {
  return [...ExperienceLinks(), { rel: "stylesheet", href: styles }];
}

type IndexData = {
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    startBy: number;
    finishBy: number;
  }>;
  experience: Array<{
    title: string;
    company: string;
    consultant?: string;
    techs: string[];
    time: string;
  }>;
  languages: Array<{ name: string; grade: number }>;
  softSkills: string[];
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  const data: IndexData = {
    education: [
      {
        degree: "Bachelor in Control and Automation Engineer",
        institution: "Universidade Federal de Santa Catarina",
        location: "Florianópolis, Brasil",
        startBy: 2014,
        finishBy: 2021,
      },
      {
        degree: "High School",
        institution: "Colégio Catarinense",
        location: "Florianópolis, Brasil",
        startBy: 2012,
        finishBy: 2014,
      },
    ],
    experience: [
      {
        time: "SEP 2021 - CURRENT",
        title: "Mid-level Frontend Software Engineer",
        company: "Bliss Applications",
        consultant: "Consultant @ OnRising",
        techs: [
          "ReactJS",
          "GraphQL",
          "Apollo",
          "NextJS",
          "NestJS",
          "Typescript",
          "Design System",
          "Jenkins",
          "Agile",
        ],
      },
      {
        time: "JAN 2021 - SEP 2021",
        title: "Mid-level Frontend Software Engineer",
        company: "Jungle Devs",
        techs: [
          "ReactJS",
          "Redux",
          "cra",
          "Javascript",
          "SEO",
          "SSR",
          "Material UI",
          "aws",
          "webpack",
          "agile",
        ],
      },
      {
        time: "JAN 2019 - JAN 2021",
        title: "Frontend Software Engineer Intern",
        company: "Jungle Devs",
        techs: [
          "ReactJS",
          "Redux",
          "cra",
          "Javascript",
          "Material UI",
          "webpack",
          "agile",
        ],
      },
    ],
    languages: [{
      name: 'Portuguese',
      grade: 5
    }, {
      name: 'English',
      grade: 4
    }, {
      name: 'German',
      grade: 2
    }],
    softSkills: ['Leadership', 'Communication', 'Problem-solving', 'Teamwork'],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Marina's Profile",
    description: "Check out my new website",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<IndexData>();

  return (
    <div>
      <section className="education">
        <img className="photo-education" src={First} aria-hidden="true" />
        <div>
          <h1 className="title">Education</h1>
          {data.education.map((item) => (
            <div key={item.degree} className="container-education">
              <div className="years">
                <p className="year">{item.startBy}</p>
                <p className="year">{item.finishBy}</p>
              </div>
              <div className="content-education">
                <h2 className="education-title">{item.degree}</h2>
                <p className="education-text">
                  {item.institution} <br /> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="experience">
        <h1 className="experience-title">experience</h1>
        {data.experience.map((exp, index) => (
          <Experience
            isFirst={!index}
            key={exp.time}
            isOdd={index % 2 !== 0}
            isLast={index + 1 === data.experience.length}
            {...exp}
          />
        ))}
      </section>
      <section className="extra">
        <h1 className="extra-title">Extra</h1>
        <img src={Batman} aria-hidden="true" className="batman" />
        <div className="language">
          <h2 className="extra-subtitle"> Language</h2>
          {data.languages.map((type) => (
            <div key={type.name} className="language-type">
              <p className="language-name">{type.name}</p>
              {Array.from({length: type.grade}).map((value, index) => (
                <div className="grade" key={type.name + index} />
              ))}
            </div>
          ))}
        </div>
        <div className="soft-skills">
        <h2 className="extra-subtitle"> Soft skills</h2>
          <div className="soft-skills-content">
            {data.softSkills.map((tech) => (
              <p key={tech} className="soft-skill">
                {tech}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
