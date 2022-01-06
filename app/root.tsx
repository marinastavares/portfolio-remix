/* eslint-disable react/react-in-jsx-scope */
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "remix";
import type { LinksFunction } from "remix";

import globalStylesUrl from "~/styles/global.css";
import Logo from "~/assets/logo";
import Twitter from "~/assets/twitter";
import Github from "~/assets/github";
import Linkedin from "~/assets/linkedin";

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Righteous' },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <header className="header">
          <Link to="/" title="Marina's logo" className="header-logo">
            <Logo />
          </Link>
          <nav aria-label="Main navigation" className="header-nav">
            <ul>
              <li>
                <Link className="header-link" to="/">Home</Link>
              </li>
              <li>
              <Link className="header-link" to="/xp">XP</Link>
              </li>
              <li>
              <Link className="header-link" to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
      </header>
        <main className="main">{children}</main>
      <footer className="footer">
        <a aria-label="Link to github account" target="_blank" href="https://www.github.com/marinastavares" aria-label="Github link" rel="noreferrer">
            <Github />
        </a>
        <a aria-label="Link to twitter account" target="_blank" href="https://www.twitter.com/marinastavares" aria-label="Twitter link" rel="noreferrer">
            <Twitter />
        </a>
        <a aria-label="Link to linkedin account" target="_blank" href="https://www.linkedin.com/in/marinastavares" aria-label="Twitter link" rel="noreferrer">
            <Linkedin />
        </a>
      </footer>
    </div>
  );
}
