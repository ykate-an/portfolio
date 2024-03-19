import * as React from "react";
import type { HeadFC } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Works from "../components/works";
import Personals from "../components/personals";
import About from "../components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";
import Skills from "../components/skills";
import Interests from "../components/interests";
import Projects from "../components/projects";

const Cara = () => (
  <Layout>
    <Parallax pages={8}>
      <Hero offset={0} factor={1} />
      <About offset={1} factor={1} />
      <Skills offset={2} factor={1} />
      <Projects offset={3} factor={1} />
      <Works offset={4} factor={1} />
      <Personals offset={5} factor={1} />
      <Interests offset={6} factor={1} />
      <Contact offset={7} factor={1} />
    </Parallax>
  </Layout>
);

export default Cara;

export const Head: HeadFC = () => <Seo />;
