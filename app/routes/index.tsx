/* eslint-disable react/react-in-jsx-scope */
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";


import Pin from '~/assets/pin.png'
import First from '~/assets/first.png'
import FirstMobile from '~/assets/first-mobile.png'
import Second from '~/assets/second.png'
import SecondMobile from '~/assets/second-mobile.png'
import HTML from '~/assets/html.png'
import CSSPhoto from '~/assets/skills/css.png'
import Javascript from '~/assets/skills/javascript.png'
import Typescript from '~/assets/skills/typescript.png'
import ReactPic from '~/assets/skills/react.png'
import Next from '~/assets/skills/nextjs.png'
import MaterialPic from '~/assets/skills/material-ui.png'
import Redux from '~/assets/skills/redux.png'
import Graphql from '~/assets/skills/graphql.png'
import Apollo from "~/assets/skills/apollo.png"


type IndexData = {
  skills: Array<{ name: string; png: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  const data: IndexData = {
    skills: [
      {
        png: HTML,
        name: "HTML"
      },
      {
        png: CSSPhoto,
        name: "CSS"
      },
      {
        png: Javascript,
        name: "Javascript"
      },
      {
        png: Typescript,
        name: "Typescript"
      },
      {
        png: ReactPic,
        name: "ReactJS"
      },
      {
        png: Next,
        name: "NextJS"
      },
      {
        png: MaterialPic,
        name: "Material UI"
      },
      {
        png: Redux,
        name: "Redux"
      },
      {
        png: Graphql,
        name: "GraphQL"
      },
      {
        png: Apollo,
        name: "Apollo"
      },
    ]
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
  console.log("LOG -> Index -> data", data)

  return (
    <div>
      <div className="first-section">
        <div className="first-text">
          <h1 className="title">Hello, <br />I'm Marina</h1>
          <h2 className="subtitle">frontend software engineer</h2>
          <div className="location">
            <img className="pin-icon" src={Pin} aria-hidden="true" />
            <p className="location-text">Florianópolis, Brasil</p>
          </div>
        </div>
        <img className="photo" src={First} aria-hidden="true" />
        <img className="photo-mobile" src={FirstMobile} aria-hidden="true" />
      </div>
      <div className="second-section">
        <img src={Second} className="second-photo" aria-hidden="true" />
        <div>
<div className="second-header">
        <img src={SecondMobile} className="second-photo-mobile" aria-hidden="true" />
            <h2 className="about-me">about me</h2>
</div>
          <p className="about-me-text">I'm 25 years old with a bachelor's degree in Control and Automation Engineer from UFSC. In the last 3 years, I've been working as a Frontend Software Engineer and I can say that web development is my passion. Professional posture, team player, always seeking to learn more
          </p>
        </div>
      </div>
      <div className="third-section">
        <h2 className="skills">
          professional skills
        </h2>
        <div className="skills-container">
          {data.skills.map(skill => <div key={skill.name} className="skill">
            <img src={skill.png} alt="HTML icon" className="skill-icon" />
            <p className="skill-label">{skill.name}</p>
          </div>)}
        </div>
      </div>
    </div>
  );
}
