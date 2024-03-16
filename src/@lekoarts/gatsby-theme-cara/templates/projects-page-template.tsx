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
  return (
    <Layout>
      <Parallax pages={5}>
      <ProjectItem project={pageContext.contentData} />
      </Parallax>
    </Layout>
  );
};

export default Cara;

export const Head: HeadFC = () => <Seo />;
