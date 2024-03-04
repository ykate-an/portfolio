import { createRequire } from "module";
import { ko, en } from "./src/locale/index.mjs";
import { works, projects } from "./src/database.mjs";
const require = createRequire(import.meta.url);
const standardBasePath = `/`;

export const createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const basePath = themeOptions.basePath || standardBasePath;
  const workTemplate = require.resolve(
    `./src/@lekoarts/gatsby-theme-cara/templates/work-template.tsx`
  );
  const prjectTemplate = require.resolve(
    `./src/@lekoarts/gatsby-theme-cara/templates/project-template.tsx`
  );

  //index page
  createPage({
    path: basePath,
    component: require.resolve(
      `./src/@lekoarts/gatsby-theme-cara/templates/cara.tsx`
    ),
  });

  //work pages
  works.forEach((company) => {
    createPage({
      path: `/${company.path}`,
      component: workTemplate,
      context: {
        title: en[`${company.name}`],
        contentData: company,
      },
    });
  });

  //personal project pages
  projects.forEach((project) => {
    createPage({
      path: `/${project.path}`,
      component: prjectTemplate,
      context: {
        title: en[`${project.name}`],
        contentData: project,
      },
    });
  });
};
