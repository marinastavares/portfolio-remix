var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/marinastavares/github/portfolio-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-72ZEZV5S.css";

// route-module:/Users/marinastavares/github/portfolio-remix/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Righteous"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "background"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "green"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "blue"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "rose"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "purple"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "red"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mustard"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "rose"
  }), children));
}

// route-module:/Users/marinastavares/github/portfolio-remix/app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Index,
  links: () => links3,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_date_fns = __toModule(require("date-fns"));
var import_react = __toModule(require("react"));

// app/styles/projects/styles.css
var styles_default = "/build/_assets/styles-FZ3H4STT.css";

// app/components/experience/index.tsx
init_react();

// app/assets/brain.png
var brain_default = "/build/_assets/brain-X3VAM7GP.png";

// app/assets/job.png
var job_default = "/build/_assets/job-XMFPYNYL.png";

// app/assets/consultant.png
var consultant_default = "/build/_assets/consultant-XFBD2VQU.png";

// app/components/experience/styles.css
var styles_default2 = "/build/_assets/styles-UU6RDOSC.css";

// app/components/experience/index.tsx
var import_clsx = __toModule(require("clsx"));
var links2 = () => [{ rel: "stylesheet", href: styles_default2 }];
var Experience = ({
  title,
  company,
  consultant,
  techs,
  time,
  isFirst,
  isOdd,
  isLast
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "one-experience"
  }, /* @__PURE__ */ React.createElement("p", {
    className: (0, import_clsx.default)("time", { ["column3"]: isOdd })
  }, time), /* @__PURE__ */ React.createElement("div", {
    className: "middle-circle"
  }, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_clsx.default)({ ["circle"]: !isFirst, ["circle-border"]: isFirst })
  }), !isLast && /* @__PURE__ */ React.createElement("div", {
    className: "line"
  })), " ", /* @__PURE__ */ React.createElement("div", {
    className: (0, import_clsx.default)("experience-content", { ["column1"]: isOdd })
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "experience-subtitle"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "experience-location"
  }, /* @__PURE__ */ React.createElement("img", {
    src: job_default,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "experience-company"
  }, company), consultant && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("img", {
    src: consultant_default,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "experience-company"
  }, consultant))), /* @__PURE__ */ React.createElement("div", {
    className: "experience-location"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "brain",
    src: brain_default,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "experience-tech"
  }, techs.map((tech) => /* @__PURE__ */ React.createElement("p", {
    key: time + tech,
    className: "tech"
  }, tech))))));
};
var experience_default = Experience;

// route-module:/Users/marinastavares/github/portfolio-remix/app/routes/projects/index.tsx
function links3() {
  return [...links2(), { rel: "stylesheet", href: styles_default }];
}
var loader = async () => {
  const githubData = await fetch("https://api.github.com/users/marinastavares/repos").then((data2) => data2.json());
  const data = {
    repos: githubData.filter((repo) => repo.topics.includes("project")).map((repo) => {
      const { id, description, topics, name, created_at, updated_at } = repo;
      return {
        id,
        description,
        topics: topics.filter((topic) => topic !== "project"),
        name,
        createdAt: created_at,
        updatedAt: updated_at
      };
    }).sort((itemA, itemB) => new Date(itemA.createdAt) - new Date(itemB.createdAt))
  };
  return (0, import_remix3.json)(data);
};
var meta = () => {
  return {
    title: "Marina's Profile",
    description: "Check out my new website"
  };
};
function Index() {
  const data = (0, import_remix3.useLoaderData)();
  const handleLocalDate = (0, import_react.useCallback)((date) => {
    return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "numeric" });
  }, []);
  const handleRelative = (0, import_react.useCallback)((date) => {
    return (0, import_date_fns.formatRelative)(new Date(date), new Date());
  }, []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "projects"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, "Personal projects"), data.repos.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.id,
    className: "container-project"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "project-title"
  }, item.name), /* @__PURE__ */ React.createElement("div", {
    className: "topics"
  }, item.topics.map((topic) => /* @__PURE__ */ React.createElement("p", {
    key: topic,
    className: "topic"
  }, topic))), /* @__PURE__ */ React.createElement("div", {
    className: "dates"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "created-at"
  }, "Created at: ", handleLocalDate(item.createdAt)), /* @__PURE__ */ React.createElement("p", {
    className: "updated-at"
  }, " Last Updated at: ", handleRelative(item.updatedAt))), /* @__PURE__ */ React.createElement("p", {
    className: "description"
  }, item.description)))));
}

// route-module:/Users/marinastavares/github/portfolio-remix/app/routes/xp/index.tsx
var xp_exports = {};
__export(xp_exports, {
  default: () => Index2,
  links: () => links4,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/assets/xp/first.png
var first_default = "/build/_assets/first-U35SLYKH.png";

// app/assets/xp/second.png
var second_default = "/build/_assets/second-PZSNWZLD.png";

// app/styles/xp/styles.css
var styles_default3 = "/build/_assets/styles-APSA6ZY4.css";

// route-module:/Users/marinastavares/github/portfolio-remix/app/routes/xp/index.tsx
function links4() {
  return [...links2(), { rel: "stylesheet", href: styles_default3 }];
}
var loader2 = () => {
  const data = {
    education: [
      {
        degree: "Bachelor in Control and Automation Engineer",
        institution: "Universidade Federal de Santa Catarina",
        location: "Florian\xF3polis, Brasil",
        startBy: 2014,
        finishBy: 2021
      },
      {
        degree: "High School",
        institution: "Col\xE9gio Catarinense",
        location: "Florian\xF3polis, Brasil",
        startBy: 2012,
        finishBy: 2014
      }
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
          "Agile"
        ]
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
          "agile"
        ]
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
          "agile"
        ]
      }
    ],
    languages: [{
      name: "Portuguese",
      grade: 5
    }, {
      name: "English",
      grade: 4
    }, {
      name: "German",
      grade: 2
    }],
    softSkills: ["Leadership", "Communication", "Problem-solving", "Teamwork"]
  };
  return (0, import_remix4.json)(data);
};
var meta2 = () => {
  return {
    title: "Marina's Profile",
    description: "Check out my new website"
  };
};
function Index2() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", {
    className: "education"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "photo-education",
    src: first_default,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, "Education"), data.education.map((item) => /* @__PURE__ */ React.createElement("div", {
    key: item.degree,
    className: "container-education"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "years"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "year"
  }, item.startBy), /* @__PURE__ */ React.createElement("p", {
    className: "year"
  }, item.finishBy)), /* @__PURE__ */ React.createElement("div", {
    className: "content-education"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "education-title"
  }, item.degree), /* @__PURE__ */ React.createElement("p", {
    className: "education-text"
  }, item.institution, " ", /* @__PURE__ */ React.createElement("br", null), " ", item.location)))))), /* @__PURE__ */ React.createElement("section", {
    className: "experience"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "experience-title"
  }, "experience"), data.experience.map((exp, index) => /* @__PURE__ */ React.createElement(experience_default, __spreadValues({
    isFirst: !index,
    key: exp.time,
    isOdd: index % 2 !== 0,
    isLast: index + 1 === data.experience.length
  }, exp)))), /* @__PURE__ */ React.createElement("section", {
    className: "extra"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "extra-title"
  }, "Extra"), /* @__PURE__ */ React.createElement("img", {
    src: second_default,
    "aria-hidden": "true",
    className: "batman"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "language"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "extra-subtitle"
  }, " Language"), data.languages.map((type) => /* @__PURE__ */ React.createElement("div", {
    key: type.name,
    className: "language-type"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "language-name"
  }, type.name), Array.from({ length: type.grade }).map((value, index) => /* @__PURE__ */ React.createElement("div", {
    className: "grade",
    key: type.name + index
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "soft-skills"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "extra-subtitle"
  }, " Soft skills"), /* @__PURE__ */ React.createElement("div", {
    className: "soft-skills-content"
  }, data.softSkills.map((tech) => /* @__PURE__ */ React.createElement("p", {
    key: tech,
    className: "soft-skill"
  }, tech))))));
}

// route-module:/Users/marinastavares/github/portfolio-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/assets/pin.png
var pin_default = "/build/_assets/pin-7HHC4BRV.png";

// app/assets/html.png
var html_default = "/build/_assets/html-VRWPVUAM.png";

// app/assets/skills/css.png
var css_default = "/build/_assets/css-KJYDBOHS.png";

// app/assets/skills/javascript.png
var javascript_default = "/build/_assets/javascript-47UPTLHB.png";

// app/assets/skills/typescript.png
var typescript_default = "/build/_assets/typescript-2UFIPCX7.png";

// app/assets/skills/react.png
var react_default = "/build/_assets/react-LDCP2IER.png";

// app/assets/skills/nextjs.png
var nextjs_default = "/build/_assets/nextjs-ZSDCVEEM.png";

// app/assets/skills/material-ui.png
var material_ui_default = "/build/_assets/material-ui-4MZEQT7H.png";

// app/assets/skills/redux.png
var redux_default = "/build/_assets/redux-RVDGROJC.png";

// app/assets/skills/graphql.png
var graphql_default = "/build/_assets/graphql-MFV3IZ5M.png";

// app/assets/skills/apollo.png
var apollo_default = "/build/_assets/apollo-E4NSFF7E.png";

// route-module:/Users/marinastavares/github/portfolio-remix/app/routes/index.tsx
var SKILLS = {
  HTML: "HTML",
  CSS: "CSS",
  JAVASCRIPT: "Javascript",
  TYPESCRIPT: "Typescript",
  REACT_JS: "ReactJS",
  NEXT: "Next",
  MATERIAL_UI: "Material UI",
  REDUX: "Redux",
  GRAPHQL: "GraphQL",
  APOLLO: "Apollo"
};
var SKILL_ICONS = {
  [SKILLS.HTML]: html_default,
  [SKILLS.CSS]: css_default,
  [SKILLS.JAVASCRIPT]: javascript_default,
  [SKILLS.TYPESCRIPT]: typescript_default,
  [SKILLS.REACT_JS]: react_default,
  [SKILLS.NEXT]: nextjs_default,
  [SKILLS.MATERIAL_UI]: material_ui_default,
  [SKILLS.REDUX]: redux_default,
  [SKILLS.GRAPHQL]: graphql_default,
  [SKILLS.APOLLO]: apollo_default
};
var loader3 = () => {
  const data = {
    currentPosition: "frontend software engineer",
    location: "Lisboa, Portugal",
    aboutMe: "I'm 25 years old with a bachelor's degree in Control and Automation Engineer from UFSC. In the last 3 years, I've been working as a Frontend Software Engineer and I can say that web development is my passion. Professional posture, team player, always seeking to learn more.",
    skills: Object.values(SKILLS)
  };
  return (0, import_remix5.json)(data);
};
var meta3 = () => {
  return {
    title: "Marina's Profile",
    description: "Check out my new website"
  };
};
function Index3() {
  const data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "first-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "first-text"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title"
  }, "Hello, ", /* @__PURE__ */ React.createElement("br", null), "I'm Marina"), /* @__PURE__ */ React.createElement("h2", {
    className: "subtitle"
  }, data.currentPosition), /* @__PURE__ */ React.createElement("div", {
    className: "location"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "pin-icon",
    src: pin_default,
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "location-text"
  }, data.location))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: true,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/xp/index": {
    id: "routes/xp/index",
    parentId: "root",
    path: "xp",
    index: true,
    caseSensitive: void 0,
    module: xp_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJpbmFzdGF2YXJlcy9naXRodWIvcG9ydGZvbGlvLXJlbWl4L2FwcC9yb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmluYXN0YXZhcmVzL2dpdGh1Yi9wb3J0Zm9saW8tcmVtaXgvYXBwL3JvdXRlcy9wcm9qZWN0cy9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJpbmFzdGF2YXJlcy9naXRodWIvcG9ydGZvbGlvLXJlbWl4L2FwcC9yb3V0ZXMveHAvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFyaW5hc3RhdmFyZXMvZ2l0aHViL3BvcnRmb2xpby1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcmluYXN0YXZhcmVzL2dpdGh1Yi9wb3J0Zm9saW8tcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hcmluYXN0YXZhcmVzL2dpdGh1Yi9wb3J0Zm9saW8tcmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tYXJpbmFzdGF2YXJlcy9naXRodWIvcG9ydGZvbGlvLXJlbWl4L2FwcC9yb3V0ZXMvcHJvamVjdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tYXJpbmFzdGF2YXJlcy9naXRodWIvcG9ydGZvbGlvLXJlbWl4L2FwcC9yb3V0ZXMveHAvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9tYXJpbmFzdGF2YXJlcy9naXRodWIvcG9ydGZvbGlvLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9wcm9qZWN0cy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3Byb2plY3RzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicHJvamVjdHNcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMveHAvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy94cC9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInhwXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cbmltcG9ydCB7XG4gIExpbmssXG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VDYXRjaCxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIn4vYXNzZXRzL2xvZ29cIjtcbmltcG9ydCBUd2l0dGVyIGZyb20gXCJ+L2Fzc2V0cy90d2l0dGVyXCI7XG5pbXBvcnQgR2l0aHViIGZyb20gXCJ+L2Fzc2V0cy9naXRodWJcIjtcbmltcG9ydCBMaW5rZWRpbiBmcm9tIFwifi9hc3NldHMvbGlua2VkaW5cIjtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2FwcCNsaW5rc1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZ2xvYmFsU3R5bGVzVXJsIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJpZ2h0ZW91c1wiLFxuICAgIH0sXG4gIF07XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPk9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+XG4gICAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4LWFwcFwiPlxuICAgICAgey8qIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgdGl0bGU9XCJNYXJpbmEncyBsb2dvXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cImhlYWRlci1uYXZcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiIHRvPVwiL3hwXCI+WFA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiB0bz1cIi9wcm9qZWN0c1wiPlByb2plY3RzPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPiAqL31cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmVlblwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9zZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2tcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cnBsZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFja1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVzdGFyZFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9zZVwiIC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8YSBhcmlhLWxhYmVsPVwiTGluayB0byBnaXRodWIgYWNjb3VudFwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5naXRodWIuY29tL21hcmluYXN0YXZhcmVzXCIgYXJpYS1sYWJlbD1cIkdpdGh1YiBsaW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgPEdpdGh1YiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGFyaWEtbGFiZWw9XCJMaW5rIHRvIHR3aXR0ZXIgYWNjb3VudFwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9tYXJpbmFzdGF2YXJlc1wiIGFyaWEtbGFiZWw9XCJUd2l0dGVyIGxpbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICA8VHdpdHRlciAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGFyaWEtbGFiZWw9XCJMaW5rIHRvIGxpbmtlZGluIGFjY291bnRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hcmluYXN0YXZhcmVzXCIgYXJpYS1sYWJlbD1cIlR3aXR0ZXIgbGlua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgIDxMaW5rZWRpbiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIGpzb24sIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2UsIGZvcm1hdFJlbGF0aXZlLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBQaW4gZnJvbSBcIn4vYXNzZXRzL3Bpbi5wbmdcIjtcbmltcG9ydCBGaXJzdCBmcm9tIFwifi9hc3NldHMveHAvZmlyc3QucG5nXCI7XG5pbXBvcnQgQmF0bWFuIGZyb20gXCJ+L2Fzc2V0cy94cC9zZWNvbmQucG5nXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIn4vc3R5bGVzL3Byb2plY3RzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBFeHBlcmllbmNlLCB7IGxpbmtzIGFzIEV4cGVyaWVuY2VMaW5rcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvZXhwZXJpZW5jZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbLi4uRXhwZXJpZW5jZUxpbmtzKCksIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5pbnRlcmZhY2UgUmVwb0luaXRpYWxQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHRvcGljczogc3RyaW5nW107XG4gIG5hbWU6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICB1cGRhdGVkX2F0OiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgUmVwb1Byb3BzIHtcbiAgaWQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdG9waWNzOiBzdHJpbmdbXTtcbiAgbmFtZTogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59XG5cbnR5cGUgSW5kZXhEYXRhID0ge1xuICByZXBvczogQXJyYXk8UmVwb1Byb3BzPjtcbn07XG5cbi8vIExvYWRlcnMgcHJvdmlkZSBkYXRhIHRvIGNvbXBvbmVudHMgYW5kIGFyZSBvbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIsIHNvXG4vLyB5b3UgY2FuIGNvbm5lY3QgdG8gYSBkYXRhYmFzZSBvciBydW4gYW55IHNlcnZlciBzaWRlIGNvZGUgeW91IHdhbnQgcmlnaHQgbmV4dFxuLy8gdG8gdGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgaXQuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZ2l0aHViRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL21hcmluYXN0YXZhcmVzL3JlcG9zJykudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICBjb25zdCBkYXRhOiBJbmRleERhdGEgPSB7XG4gICAgcmVwb3M6IGdpdGh1YkRhdGEuZmlsdGVyKChyZXBvOiBSZXBvSW5pdGlhbFByb3BzKSA9PiByZXBvLnRvcGljcy5pbmNsdWRlcygncHJvamVjdCcpKVxuICAgIC5tYXAoKHJlcG86IFJlcG9Jbml0aWFsUHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHtpZCwgZGVzY3JpcHRpb24sIHRvcGljcywgbmFtZSwgY3JlYXRlZF9hdCwgdXBkYXRlZF9hdH0gPSByZXBvXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLCBkZXNjcmlwdGlvbiwgdG9waWNzOiB0b3BpY3MuZmlsdGVyKHRvcGljID0+IHRvcGljICE9PSAncHJvamVjdCcpLCBuYW1lLCBjcmVhdGVkQXQ6IGNyZWF0ZWRfYXQsIHVwZGF0ZWRBdDogdXBkYXRlZF9hdFxuICAgICAgfVxuICAgIH0pXG4gICAgLnNvcnQoKGl0ZW1BOlJlcG9Qcm9wcyAsIGl0ZW1COiBSZXBvUHJvcHMpID0+IG5ldyBEYXRlKGl0ZW1BLmNyZWF0ZWRBdCkgLSBuZXcgRGF0ZShpdGVtQi5jcmVhdGVkQXQpKSxcbiAgfTtcblxuICAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjanNvblxuICByZXR1cm4ganNvbihkYXRhKTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIk1hcmluYSdzIFByb2ZpbGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDaGVjayBvdXQgbXkgbmV3IHdlYnNpdGVcIixcbiAgfTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9yb3V0aW5nI2luZGV4LXJvdXRlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPEluZGV4RGF0YT4oKTtcblxuICBjb25zdCBoYW5kbGVMb2NhbERhdGUgPSB1c2VDYWxsYmFjaygoZGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7ICB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnMi1kaWdpdCcsIGRheTogJ251bWVyaWMnIH0pXG4gIH0sW10pXG4gIGNvbnN0IGhhbmRsZVJlbGF0aXZlID0gdXNlQ2FsbGJhY2soKGRhdGUpID0+IHtcbiAgICByZXR1cm4gZm9ybWF0UmVsYXRpdmUobmV3IERhdGUoZGF0ZSksIG5ldyBEYXRlKCkpXG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5QZXJzb25hbCBwcm9qZWN0czwvaDE+XG4gICAgICAgICAge2RhdGEucmVwb3MubWFwKChpdGVtOiBSZXBvUHJvcHMpID0+IChcbiAgICAgICAgICAgIDxhIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiY29udGFpbmVyLXByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPntpdGVtLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljc1wiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udG9waWNzLm1hcCh0b3BpYyA9PiA8cCBrZXk9e3RvcGljfSBjbGFzc05hbWU9XCJ0b3BpY1wiPnt0b3BpY308L3A+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiZGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNyZWF0ZWQtYXRcIj5DcmVhdGVkIGF0OiB7aGFuZGxlTG9jYWxEYXRlKGl0ZW0uY3JlYXRlZEF0KX08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1cGRhdGVkLWF0XCI+IExhc3QgVXBkYXRlZCBhdDoge2hhbmRsZVJlbGF0aXZlKGl0ZW0udXBkYXRlZEF0KX08L3A+XG48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xuXG5pbXBvcnQgQnJhaW4gZnJvbSBcIn4vYXNzZXRzL2JyYWluLnBuZ1wiO1xuaW1wb3J0IEpvYiBmcm9tIFwifi9hc3NldHMvam9iLnBuZ1wiO1xuaW1wb3J0IENvbnN1bHRhbnQgZnJvbSBcIn4vYXNzZXRzL2NvbnN1bHRhbnQucG5nXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xuXG5pbnRlcmZhY2UgRXhwZXJpZW5jZVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29tcGFueTogc3RyaW5nO1xuICBjb25zdWx0YW50Pzogc3RyaW5nO1xuICB0ZWNoczogc3RyaW5nW107XG4gIHRpbWU6IHN0cmluZztcbiAgaXNPZGQ/OiBib29sZWFuO1xuICBpc0xhc3Q/OiBib29sZWFuO1xuICBpc0ZpcnN0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgRXhwZXJpZW5jZSA9ICh7XG4gIHRpdGxlLFxuICBjb21wYW55LFxuICBjb25zdWx0YW50LFxuICB0ZWNocyxcbiAgdGltZSxcbiAgaXNGaXJzdCxcbiAgaXNPZGQsXG4gIGlzTGFzdCxcbn06IEV4cGVyaWVuY2VQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib25lLWV4cGVyaWVuY2VcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xzeChcInRpbWVcIiwgeyBbXCJjb2x1bW4zXCJdOiBpc09kZCB9KX0+e3RpbWV9PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGUtY2lyY2xlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHsgW1wiY2lyY2xlXCJdOiAhaXNGaXJzdCwgWydjaXJjbGUtYm9yZGVyJ106IGlzRmlyc3R9KX0gLz5cbiAgICAgICAgeyFpc0xhc3QgJiYgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgLz59XG4gICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcImV4cGVyaWVuY2UtY29udGVudFwiLCB7IFtcImNvbHVtbjFcIl06IGlzT2RkIH0pfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImV4cGVyaWVuY2Utc3VidGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBlcmllbmNlLWxvY2F0aW9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9e0pvYn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJleHBlcmllbmNlLWNvbXBhbnlcIj57Y29tcGFueX08L3A+XG4gICAgICAgICAge2NvbnN1bHRhbnQgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e0NvbnN1bHRhbnR9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImV4cGVyaWVuY2UtY29tcGFueVwiPntjb25zdWx0YW50fTwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2UtbG9jYXRpb25cIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJyYWluXCIgc3JjPXtCcmFpbn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVyaWVuY2UtdGVjaFwiPlxuICAgICAgICAgICAge3RlY2hzLm1hcCgodGVjaCkgPT4gKFxuICAgICAgICAgICAgICA8cCBrZXk9e3RpbWUgKyB0ZWNofSBjbGFzc05hbWU9XCJ0ZWNoXCI+XG4gICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgUGluIGZyb20gXCJ+L2Fzc2V0cy9waW4ucG5nXCI7XG5pbXBvcnQgRmlyc3QgZnJvbSBcIn4vYXNzZXRzL3hwL2ZpcnN0LnBuZ1wiO1xuaW1wb3J0IEJhdG1hbiBmcm9tIFwifi9hc3NldHMveHAvc2Vjb25kLnBuZ1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy94cC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgRXhwZXJpZW5jZSwgeyBsaW5rcyBhcyBFeHBlcmllbmNlTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL2V4cGVyaWVuY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gWy4uLkV4cGVyaWVuY2VMaW5rcygpLCB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxudHlwZSBJbmRleERhdGEgPSB7XG4gIGVkdWNhdGlvbjogQXJyYXk8e1xuICAgIGRlZ3JlZTogc3RyaW5nO1xuICAgIGluc3RpdHV0aW9uOiBzdHJpbmc7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBzdGFydEJ5OiBudW1iZXI7XG4gICAgZmluaXNoQnk6IG51bWJlcjtcbiAgfT47XG4gIGV4cGVyaWVuY2U6IEFycmF5PHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbXBhbnk6IHN0cmluZztcbiAgICBjb25zdWx0YW50Pzogc3RyaW5nO1xuICAgIHRlY2hzOiBzdHJpbmdbXTtcbiAgICB0aW1lOiBzdHJpbmc7XG4gIH0+O1xuICBsYW5ndWFnZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyBncmFkZTogbnVtYmVyIH0+O1xuICBzb2Z0U2tpbGxzOiBzdHJpbmdbXTtcbn07XG5cbi8vIExvYWRlcnMgcHJvdmlkZSBkYXRhIHRvIGNvbXBvbmVudHMgYW5kIGFyZSBvbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIsIHNvXG4vLyB5b3UgY2FuIGNvbm5lY3QgdG8gYSBkYXRhYmFzZSBvciBydW4gYW55IHNlcnZlciBzaWRlIGNvZGUgeW91IHdhbnQgcmlnaHQgbmV4dFxuLy8gdG8gdGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgaXQuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZGF0YTogSW5kZXhEYXRhID0ge1xuICAgIGVkdWNhdGlvbjogW1xuICAgICAge1xuICAgICAgICBkZWdyZWU6IFwiQmFjaGVsb3IgaW4gQ29udHJvbCBhbmQgQXV0b21hdGlvbiBFbmdpbmVlclwiLFxuICAgICAgICBpbnN0aXR1dGlvbjogXCJVbml2ZXJzaWRhZGUgRmVkZXJhbCBkZSBTYW50YSBDYXRhcmluYVwiLFxuICAgICAgICBsb2NhdGlvbjogXCJGbG9yaWFuXHUwMEYzcG9saXMsIEJyYXNpbFwiLFxuICAgICAgICBzdGFydEJ5OiAyMDE0LFxuICAgICAgICBmaW5pc2hCeTogMjAyMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRlZ3JlZTogXCJIaWdoIFNjaG9vbFwiLFxuICAgICAgICBpbnN0aXR1dGlvbjogXCJDb2xcdTAwRTlnaW8gQ2F0YXJpbmVuc2VcIixcbiAgICAgICAgbG9jYXRpb246IFwiRmxvcmlhblx1MDBGM3BvbGlzLCBCcmFzaWxcIixcbiAgICAgICAgc3RhcnRCeTogMjAxMixcbiAgICAgICAgZmluaXNoQnk6IDIwMTQsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZXhwZXJpZW5jZTogW1xuICAgICAge1xuICAgICAgICB0aW1lOiBcIlNFUCAyMDIxIC0gQ1VSUkVOVFwiLFxuICAgICAgICB0aXRsZTogXCJNaWQtbGV2ZWwgRnJvbnRlbmQgU29mdHdhcmUgRW5naW5lZXJcIixcbiAgICAgICAgY29tcGFueTogXCJCbGlzcyBBcHBsaWNhdGlvbnNcIixcbiAgICAgICAgY29uc3VsdGFudDogXCJDb25zdWx0YW50IEAgT25SaXNpbmdcIixcbiAgICAgICAgdGVjaHM6IFtcbiAgICAgICAgICBcIlJlYWN0SlNcIixcbiAgICAgICAgICBcIkdyYXBoUUxcIixcbiAgICAgICAgICBcIkFwb2xsb1wiLFxuICAgICAgICAgIFwiTmV4dEpTXCIsXG4gICAgICAgICAgXCJOZXN0SlNcIixcbiAgICAgICAgICBcIlR5cGVzY3JpcHRcIixcbiAgICAgICAgICBcIkRlc2lnbiBTeXN0ZW1cIixcbiAgICAgICAgICBcIkplbmtpbnNcIixcbiAgICAgICAgICBcIkFnaWxlXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aW1lOiBcIkpBTiAyMDIxIC0gU0VQIDIwMjFcIixcbiAgICAgICAgdGl0bGU6IFwiTWlkLWxldmVsIEZyb250ZW5kIFNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgICAgIGNvbXBhbnk6IFwiSnVuZ2xlIERldnNcIixcbiAgICAgICAgdGVjaHM6IFtcbiAgICAgICAgICBcIlJlYWN0SlNcIixcbiAgICAgICAgICBcIlJlZHV4XCIsXG4gICAgICAgICAgXCJjcmFcIixcbiAgICAgICAgICBcIkphdmFzY3JpcHRcIixcbiAgICAgICAgICBcIlNFT1wiLFxuICAgICAgICAgIFwiU1NSXCIsXG4gICAgICAgICAgXCJNYXRlcmlhbCBVSVwiLFxuICAgICAgICAgIFwiYXdzXCIsXG4gICAgICAgICAgXCJ3ZWJwYWNrXCIsXG4gICAgICAgICAgXCJhZ2lsZVwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGltZTogXCJKQU4gMjAxOSAtIEpBTiAyMDIxXCIsXG4gICAgICAgIHRpdGxlOiBcIkZyb250ZW5kIFNvZnR3YXJlIEVuZ2luZWVyIEludGVyblwiLFxuICAgICAgICBjb21wYW55OiBcIkp1bmdsZSBEZXZzXCIsXG4gICAgICAgIHRlY2hzOiBbXG4gICAgICAgICAgXCJSZWFjdEpTXCIsXG4gICAgICAgICAgXCJSZWR1eFwiLFxuICAgICAgICAgIFwiY3JhXCIsXG4gICAgICAgICAgXCJKYXZhc2NyaXB0XCIsXG4gICAgICAgICAgXCJNYXRlcmlhbCBVSVwiLFxuICAgICAgICAgIFwid2VicGFja1wiLFxuICAgICAgICAgIFwiYWdpbGVcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsYW5ndWFnZXM6IFt7XG4gICAgICBuYW1lOiAnUG9ydHVndWVzZScsXG4gICAgICBncmFkZTogNVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdFbmdsaXNoJyxcbiAgICAgIGdyYWRlOiA0XG4gICAgfSwge1xuICAgICAgbmFtZTogJ0dlcm1hbicsXG4gICAgICBncmFkZTogMlxuICAgIH1dLFxuICAgIHNvZnRTa2lsbHM6IFsnTGVhZGVyc2hpcCcsICdDb21tdW5pY2F0aW9uJywgJ1Byb2JsZW0tc29sdmluZycsICdUZWFtd29yayddLFxuICB9O1xuXG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4gIHJldHVybiBqc29uKGRhdGEpO1xufTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiTWFyaW5hJ3MgUHJvZmlsZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNoZWNrIG91dCBteSBuZXcgd2Vic2l0ZVwiLFxuICB9O1xufTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZ3VpZGVzL3JvdXRpbmcjaW5kZXgtcm91dGVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGE8SW5kZXhEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImVkdWNhdGlvblwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBob3RvLWVkdWNhdGlvblwiIHNyYz17Rmlyc3R9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RWR1Y2F0aW9uPC9oMT5cbiAgICAgICAgICB7ZGF0YS5lZHVjYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5kZWdyZWV9IGNsYXNzTmFtZT1cImNvbnRhaW5lci1lZHVjYXRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5ZWFyc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInllYXJcIj57aXRlbS5zdGFydEJ5fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ5ZWFyXCI+e2l0ZW0uZmluaXNoQnl9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWVkdWNhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJlZHVjYXRpb24tdGl0bGVcIj57aXRlbS5kZWdyZWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlZHVjYXRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uaW5zdGl0dXRpb259IDxiciAvPiB7aXRlbS5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXhwZXJpZW5jZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZXhwZXJpZW5jZS10aXRsZVwiPmV4cGVyaWVuY2U8L2gxPlxuICAgICAgICB7ZGF0YS5leHBlcmllbmNlLm1hcCgoZXhwLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxFeHBlcmllbmNlXG4gICAgICAgICAgICBpc0ZpcnN0PXshaW5kZXh9XG4gICAgICAgICAgICBrZXk9e2V4cC50aW1lfVxuICAgICAgICAgICAgaXNPZGQ9e2luZGV4ICUgMiAhPT0gMH1cbiAgICAgICAgICAgIGlzTGFzdD17aW5kZXggKyAxID09PSBkYXRhLmV4cGVyaWVuY2UubGVuZ3RofVxuICAgICAgICAgICAgey4uLmV4cH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImV4dHJhXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJleHRyYS10aXRsZVwiPkV4dHJhPC9oMT5cbiAgICAgICAgPGltZyBzcmM9e0JhdG1hbn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYmF0bWFuXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJleHRyYS1zdWJ0aXRsZVwiPiBMYW5ndWFnZTwvaDI+XG4gICAgICAgICAge2RhdGEubGFuZ3VhZ2VzLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3R5cGUubmFtZX0gY2xhc3NOYW1lPVwibGFuZ3VhZ2UtdHlwZVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYW5ndWFnZS1uYW1lXCI+e3R5cGUubmFtZX08L3A+XG4gICAgICAgICAgICAgIHtBcnJheS5mcm9tKHtsZW5ndGg6IHR5cGUuZ3JhZGV9KS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGVcIiBrZXk9e3R5cGUubmFtZSArIGluZGV4fSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2Z0LXNraWxsc1wiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZXh0cmEtc3VidGl0bGVcIj4gU29mdCBza2lsbHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29mdC1za2lsbHMtY29udGVudFwiPlxuICAgICAgICAgICAge2RhdGEuc29mdFNraWxscy5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgPHAga2V5PXt0ZWNofSBjbGFzc05hbWU9XCJzb2Z0LXNraWxsXCI+XG4gICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgUGluIGZyb20gXCJ+L2Fzc2V0cy9waW4ucG5nXCI7XG5pbXBvcnQgRmlyc3QgZnJvbSBcIn4vYXNzZXRzL2ZpcnN0LnBuZ1wiO1xuaW1wb3J0IEZpcnN0TW9iaWxlIGZyb20gXCJ+L2Fzc2V0cy9maXJzdC1tb2JpbGUucG5nXCI7XG5pbXBvcnQgU2Vjb25kIGZyb20gXCJ+L2Fzc2V0cy9zZWNvbmQucG5nXCI7XG5pbXBvcnQgU2Vjb25kTW9iaWxlIGZyb20gXCJ+L2Fzc2V0cy9zZWNvbmQtbW9iaWxlLnBuZ1wiO1xuaW1wb3J0IEhUTUwgZnJvbSBcIn4vYXNzZXRzL2h0bWwucG5nXCI7XG5pbXBvcnQgQ1NTUGhvdG8gZnJvbSBcIn4vYXNzZXRzL3NraWxscy9jc3MucG5nXCI7XG5pbXBvcnQgSmF2YXNjcmlwdCBmcm9tIFwifi9hc3NldHMvc2tpbGxzL2phdmFzY3JpcHQucG5nXCI7XG5pbXBvcnQgVHlwZXNjcmlwdCBmcm9tIFwifi9hc3NldHMvc2tpbGxzL3R5cGVzY3JpcHQucG5nXCI7XG5pbXBvcnQgUmVhY3RQaWMgZnJvbSBcIn4vYXNzZXRzL3NraWxscy9yZWFjdC5wbmdcIjtcbmltcG9ydCBOZXh0IGZyb20gXCJ+L2Fzc2V0cy9za2lsbHMvbmV4dGpzLnBuZ1wiO1xuaW1wb3J0IE1hdGVyaWFsUGljIGZyb20gXCJ+L2Fzc2V0cy9za2lsbHMvbWF0ZXJpYWwtdWkucG5nXCI7XG5pbXBvcnQgUmVkdXggZnJvbSBcIn4vYXNzZXRzL3NraWxscy9yZWR1eC5wbmdcIjtcbmltcG9ydCBHcmFwaHFsIGZyb20gXCJ+L2Fzc2V0cy9za2lsbHMvZ3JhcGhxbC5wbmdcIjtcbmltcG9ydCBBcG9sbG8gZnJvbSBcIn4vYXNzZXRzL3NraWxscy9hcG9sbG8ucG5nXCI7XG5cbnR5cGUgSW5kZXhEYXRhID0ge1xuICBjdXJyZW50UG9zaXRpb246IHN0cmluZztcbiAgbG9jYXRpb246IHN0cmluZztcbiAgYWJvdXRNZTogc3RyaW5nO1xuICBza2lsbHM6IHN0cmluZ1tdO1xufTtcblxuY29uc3QgU0tJTExTID0ge1xuICBIVE1MOiBcIkhUTUxcIixcbiAgQ1NTOiBcIkNTU1wiLFxuICBKQVZBU0NSSVBUOiBcIkphdmFzY3JpcHRcIixcbiAgVFlQRVNDUklQVDogXCJUeXBlc2NyaXB0XCIsXG4gIFJFQUNUX0pTOiBcIlJlYWN0SlNcIixcbiAgTkVYVDogXCJOZXh0XCIsXG4gIE1BVEVSSUFMX1VJOiBcIk1hdGVyaWFsIFVJXCIsXG4gIFJFRFVYOiBcIlJlZHV4XCIsXG4gIEdSQVBIUUw6IFwiR3JhcGhRTFwiLFxuICBBUE9MTE86IFwiQXBvbGxvXCIsXG59O1xuXG5jb25zdCBTS0lMTF9JQ09OUyA9IHtcbiAgW1NLSUxMUy5IVE1MXTogSFRNTCxcbiAgW1NLSUxMUy5DU1NdOiBDU1NQaG90byxcbiAgW1NLSUxMUy5KQVZBU0NSSVBUXTogSmF2YXNjcmlwdCxcbiAgW1NLSUxMUy5UWVBFU0NSSVBUXTogVHlwZXNjcmlwdCxcbiAgW1NLSUxMUy5SRUFDVF9KU106IFJlYWN0UGljLFxuICBbU0tJTExTLk5FWFRdOiBOZXh0LFxuICBbU0tJTExTLk1BVEVSSUFMX1VJXTogTWF0ZXJpYWxQaWMsXG4gIFtTS0lMTFMuUkVEVVhdOiBSZWR1eCxcbiAgW1NLSUxMUy5HUkFQSFFMXTogR3JhcGhxbCxcbiAgW1NLSUxMUy5BUE9MTE9dOiBBcG9sbG8sXG59O1xuXG4vLyBMb2FkZXJzIHByb3ZpZGUgZGF0YSB0byBjb21wb25lbnRzIGFuZCBhcmUgb25seSBldmVyIGNhbGxlZCBvbiB0aGUgc2VydmVyLCBzb1xuLy8geW91IGNhbiBjb25uZWN0IHRvIGEgZGF0YWJhc2Ugb3IgcnVuIGFueSBzZXJ2ZXIgc2lkZSBjb2RlIHlvdSB3YW50IHJpZ2h0IG5leHRcbi8vIHRvIHRoZSBjb21wb25lbnQgdGhhdCByZW5kZXJzIGl0LlxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2xvYWRlclxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGE6IEluZGV4RGF0YSA9IHtcbiAgICBjdXJyZW50UG9zaXRpb246IFwiZnJvbnRlbmQgc29mdHdhcmUgZW5naW5lZXJcIixcbiAgICBsb2NhdGlvbjogXCJMaXNib2EsIFBvcnR1Z2FsXCIsXG4gICAgYWJvdXRNZTpcbiAgICAgIFwiSSdtIDI1IHllYXJzIG9sZCB3aXRoIGEgYmFjaGVsb3IncyBkZWdyZWUgaW4gQ29udHJvbCBhbmQgQXV0b21hdGlvbiBFbmdpbmVlciBmcm9tIFVGU0MuIEluIHRoZSBsYXN0IDMgeWVhcnMsIEkndmUgYmVlbiB3b3JraW5nIGFzIGEgRnJvbnRlbmQgU29mdHdhcmUgRW5naW5lZXIgYW5kIEkgY2FuIHNheSB0aGF0IHdlYiBkZXZlbG9wbWVudCBpcyBteSBwYXNzaW9uLiBQcm9mZXNzaW9uYWwgcG9zdHVyZSwgdGVhbSBwbGF5ZXIsIGFsd2F5cyBzZWVraW5nIHRvIGxlYXJuIG1vcmUuXCIsXG4gICAgc2tpbGxzOiBPYmplY3QudmFsdWVzKFNLSUxMUyksXG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I2pzb25cbiAgcmV0dXJuIGpzb24oZGF0YSk7XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbWV0YVxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJNYXJpbmEncyBQcm9maWxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ2hlY2sgb3V0IG15IG5ldyB3ZWJzaXRlXCIsXG4gIH07XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvcm91dGluZyNpbmRleC1yb3V0ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxJbmRleERhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtdGV4dFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICBIZWxsbywgPGJyIC8+XG4gICAgICAgICAgSSdtIE1hcmluYVxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj57ZGF0YS5jdXJyZW50UG9zaXRpb259PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGluLWljb25cIiBzcmM9e1Bpbn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2NhdGlvbi10ZXh0XCI+e2RhdGEubG9jYXRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwicGhvdG9cIiBzcmM9e0ZpcnN0fSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBob3RvLW1vYmlsZVwiIHNyYz17Rmlyc3RNb2JpbGV9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZ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
