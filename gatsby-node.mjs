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
  // const projectTemplate = require.resolve(
  //   `./src/@lekoarts/gatsby-theme-cara/templates/project-item-template.tsx`
  // );

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
      component: workPageTemplate,
      context: {
        title: en[`${company.name}`],
        contentData: company,
      },
    });
  });

  //personal project pages
  // works.forEach((company) => {
  //   createPage({
  //     path: `/${company.path}`,
  //     component: projectTemplate,
  //     context: {
  //       title: en[`${company.name}`],
  //       contentData: company,
  //     },
  //   });
  // });
};
