import { createRequire } from "module";
import { ko, en } from "./src/locale/index.mjs";
import { works } from "./src/database.mjs";
const require = createRequire(import.meta.url);
const standardBasePath = `/`;

export const createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const projectPageTemplate = require.resolve(
    `./src/@lekoarts/gatsby-theme-cara/templates/cara_test.tsx`
  );

  const basePath = themeOptions.basePath || standardBasePath;

  //index page
  createPage({
    path: basePath,
    component: require.resolve(
      `./src/@lekoarts/gatsby-theme-cara/templates/cara.tsx`
    ),
  });

  //project pages /Wizschool /Mofas(hackersholdings)
  works.forEach((company) => {
    createPage({
      path: `/${company.link}`,
      component: projectPageTemplate,
      context: {
        title: en[`${company.name}`],
      },
    });
  });
};
