import * as React from "react";
import type { HeadFC } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import { Themed } from "@theme-ui/mdx";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";
import { ko, en } from "../../../locale/index.mjs";
import ProjectItem from "../components/subComponents/project-item";

const Cara = ({ pageContext }: { pageContext: Object }) => {
  console.log(pageContext, 111, "pageContext in project-template");
  const { title, description, name, period, position, projects, tech } =
    pageContext.contentData;
  return (
    <Layout>
      <Parallax pages={5}>
        <Themed.h1>{en[`${title}`]}</Themed.h1>
        <Themed.h5>{en[`${name}`]}</Themed.h5>
        <Themed.h5>{en[`${period}`]}</Themed.h5>
        <Themed.h5>{en[`${description}`]}</Themed.h5>
        <Themed.h5>{en[`${position}`]}</Themed.h5>
        <Themed.h5>{en[`${tech}`]}</Themed.h5>

        {
          projects.map((project, idx) => {
            return (<ProjectItem project={project} />)
          })}

      </Parallax>
    </Layout>
  );
};

export default Cara;

export const Head: HeadFC = () => <Seo />;
