/* eslint-disable react/react-in-jsx-scope */
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";


import Pin from '~/assets/pin.png'
import First from '~/assets/xp/first.png'
import FirstMobile from '~/assets/first-mobile.png'

import styles from '~/styles/xp/styles.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}


type IndexData = {
  education: Array<{ degree: string, institution: string, location: string, startBy: number, finishBy: number }>
  experience: Array<{ title: string, company: string, consultant?: string, techs: string[], time: string }>,
  languages: Array<{ name: string; grade: number }>
  softSkills: string[]
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  const data: IndexData = {
    education: [{ degree: 'Bachelor in Control and Automation Engineer', institution: 'Universidade Federal de Santa Catarina', location: 'Florianópolis, Brasil', startBy: 2014, finishBy: 2021 }, { degree: 'High School', institution: 'Colégio Catarinense', location: 'Florianópolis, Brasil', startBy: 2012, finishBy: 2014 }],
    experience: [{
      time: 'SEP 2021 - CURRENT',
      title: 'Mid-level Frontend Software Engineer',
      company: 'Bliss Applications',
      consultant: 'Consultant @ OnRising',
      techs: ['ReactJS', 'GraphQL', 'Apollo', 'NextJS', 'NestJS', 'Typescript', 'Design System', 'Jenkins', 'Agile']
    }, {
      time: 'JAN 2021 - SEP 2021',
      title: 'Mid-level Frontend Software Engineer',
      company: 'Jungle Devs',
      techs: ['ReactJS', 'Redux', 'cra', 'Javascript', 'SEO', 'SSR', 'Material UI', 'aws', 'webpack', 'agile']
    }, {
      time: 'JAN 2019 - JAN 2021',
      title: 'Frontend Software Engineer Intern',
      company: 'Jungle Devs',
      techs: ['ReactJS', 'Redux', 'cra', 'Javascript', 'Material UI', 'webpack', 'agile']
    }],
    languages: [],
    softSkills: [],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Marina's Profile",
    description: "Check out my new website"
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
          {data.education.map(item => <div key={item.degree} className="container-education">
            <div className="years">
              <p className="year">{item.startBy}</p>
              <p className="year">{item.finishBy}</p>
            </div>
            <div className="content-education">
              <h2 className="education-title">{item.degree}</h2>
              <p className="education-text">{item.institution} <br /> {item.location}</p>
            </div>
          </div>)}
        </div>
      </section>
      <section className="experience">
        <h1 className="experience-title">experience</h1>
        <div className="dots">{data.experience.map((item, index) => {
          if (index % 2 === 0) {
            return (<>
            <p className="time">{item.time}</p>
            <div className="circle"/>
            <div className="experience-content">
              <h2 className="experience-subtitle">{item.title}</h2>
                <div className="experience-location">
                  <p className="experience-company">
                    {item.company}
                  </p>
                  {item.consultant && <p className="experience-company">
                    {item.consultant}
                  </p>}
                </div>
                <div className="experience-tech">
                  {item.techs.map(tech => <p key={item.time + tech} className="tech">{tech}</p>)}
                </div>
            </div>
            </>)
          }
        })}</div>
      </section>
    </div>
  );
}
