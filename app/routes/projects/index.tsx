/* eslint-disable react/react-in-jsx-scope */
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { useCallback } from "react";

import Pin from "~/assets/pin.png";
import First from "~/assets/xp/first.png";
import Batman from "~/assets/xp/second.png";

import styles from "~/styles/projects/styles.css";
import Experience, { links as ExperienceLinks } from "~/components/experience";

export function links() {
  return [...ExperienceLinks(), { rel: "stylesheet", href: styles }];
}

interface RepoInitialProps {
  id: string;
  description: string;
  topics: string[];
  name: string;
  created_at: string;
  updated_at: string;
}
interface RepoProps {
  id: string;
  description: string;
  topics: string[];
  name: string;
  createdAt: string;
  updatedAt: string;
}

type IndexData = {
  repos: Array<RepoProps>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  const githubData = await fetch('https://api.github.com/users/marinastavares/repos').then(data => data.json())
  const data: IndexData = {
    repos: githubData.filter((repo: RepoInitialProps) => repo.topics.includes('project'))
    .map((repo: RepoInitialProps) => {
      const {id, description, topics, name, created_at, updated_at} = repo

      return {
        id, description, topics: topics.filter(topic => topic !== 'project'), name, createdAt: created_at, updatedAt: updated_at
      }
    })
    .sort((itemA:RepoProps , itemB: RepoProps) => new Date(itemA.createdAt) - new Date(itemB.createdAt)),
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

  const handleLocalDate = useCallback((date) => {
    return new Date(date).toLocaleDateString("en-US", {  year: 'numeric', month: '2-digit', day: 'numeric' })
  },[])
  const handleRelative = useCallback((date) => {
    return formatRelative(new Date(date), new Date())
  },[])

  return (
    <div>
      <section className="projects">
          <h1 className="title">Personal projects</h1>
          {data.repos.map((item: RepoProps) => (
            <a key={item.id} className="container-project">
                <h2 className="project-title">{item.name}</h2>
                <div className="topics">
                  {item.topics.map(topic => <p key={topic} className="topic">{topic}</p>)}
                </div>
<div className="dates">
                  <p className="created-at">Created at: {handleLocalDate(item.createdAt)}</p>
                  <p className="updated-at"> Last Updated at: {handleRelative(item.updatedAt)}</p>
</div>
                <p className="description">
                  {item.description}
                </p>
            </a>
          ))}
      </section>
    </div>
  );
}
