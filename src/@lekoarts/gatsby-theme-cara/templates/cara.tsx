import * as React from "react";
import type { HeadFC } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
// import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Hero from "../components/hero";
import Works from "../components/works";
import Personals from "../components/personals";
import About from "../components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";
import Skills from "../components/skills";
import Interests from "../components/interests";
import OnePage from "../components/onePage";

const Cara = () => {
  return (
    <Layout>
      {/* <OnePage /> */}
      <Parallax pages={7}>
        <Hero offset={0} factor={1} />
        <Skills offset={1} factor={1} />
        <Works offset={2} factor={1} />
        <Personals offset={3} factor={1} />
        <About offset={4} factor={1} />
        <Interests offset={5} factor={1} />
        <Contact offset={6} factor={1} />
      </Parallax>
    </Layout>
  );
};

export default Cara;

export const Head: HeadFC = () => <Seo />;
