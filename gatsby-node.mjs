import { createRequire } from "module";
import { ko, en } from "./src/locale/index.mjs";
import { works, projects } from "./src/database.mjs";
const require = createRequire(import.meta.url);
const standardBasePath = `/`;

export const createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const basePath = themeOptions.basePath || standardBasePath;
  const workPageTemplate = require.resolve(
    `./src/@lekoarts/gatsby-theme-cara/templates/works-page-template.tsx`
  );
  const projectsPageTemplate = require.resolve(
    `./src/@lekoarts/gatsby-theme-cara/templates/projects-page-template.tsx`
  );

  //index page
  createPage({
    path: basePath,
    component: require.resolve(
      `./src/@lekoarts/gatsby-theme-cara/templates/cara.tsx`
    ),
  });

  //work pages
  works.forEach((item) => {
    createPage({
      path: `/${item.path}`,
      component: workPageTemplate,
      context: {
        title: en[`${item.name}`],
        contentData: item,
      },
    });
  });

  //projects project pages
  projects.forEach((item) => {
    createPage({
      path: `/${item.path}`,
      component: projectsPageTemplate,
      context: {
        title: en[`${item.name}`],
        contentData: item,
      },
    });
  });
};
