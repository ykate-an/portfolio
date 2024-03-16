import * as React from "react";
import type { HeadFC } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";
import ProjectDetail from "../components/project-detail";

const Cara = ({ pageContext }: { pageContext: Object }) => {
  console.log(pageContext,111,'pageContext in project-template');
  return (
  <Layout>
    <Parallax pages={5}>
      <ProjectDetail offset={0} factor={4} contentData={pageContext.contentData} pages={5} />
    </Parallax>
  </Layout>)
};

export default Cara;

export const Head: HeadFC = () => <Seo />;
