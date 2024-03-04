import * as React from "react";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
import { ko, en } from "../../../locale/index.mjs";
import { Themed } from "@theme-ui/mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import TestMDX from "../sections/test.mdx";

const Project = ({
  offset,
  factor = 1,
  pages,
  company,
}: {
  offset: number;
  factor?: number;
  pages: number;
  company: Object;
}) => {
  return (
    <div>
      <Divider
        bg="divider"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={factor}
      />
      <Divider speed={0.1} offset={offset} factor={pages - 1}>
        <UpDown>
          <Svg
            icon="box"
            hiddenMobile
            width={6}
            color="icon_blue"
            left="50%"
            top="75%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="70%"
            top="20%"
          />
          <Svg
            icon="triangle"
            width={8}
            stroke
            color="icon_darkest"
            left="25%"
            top="5%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={24}
            color="icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <Svg
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_purple"
            left="5%"
            top="80%"
          />
          <Svg
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="95%"
            top="50%"
          />
          <Svg
            icon="circle"
            hiddenMobile
            width={6}
            color="icon_brightest"
            left="85%"
            top="15%"
          />
          <Svg
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <Svg
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <Svg
          icon="circle"
          width={12}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
        <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
        <Svg
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content
        speed={0.4}
        offset={offset}
        factor={factor}
        justifyContent="start"
      >
        <Inner>
          <ProjectContent company={company} />
          {/* <TestMDX
          company={company}
        />  */}
          {/* <TestMDX
        company={company}
        year={2022}
        components={{
          Planet() {
            return <span style={{ color: "tomato" }}>Pluto</span>;
          },
        }}
      /> */}

          {/* <Themed.h1>test Theme</Themed.h1> */}
        </Inner>
      </Content>
    </div>
  );
};

const ProjectContent = ({ company }: { company:  Object}) => {
  const { name, position, period, description, projects, tech } = company ;
  return (
    <>
      <Themed.h1>{en[`${name}`]}</Themed.h1>
      <Themed.h5>{en[`${position}`]}</Themed.h5>
      <Themed.h5>{en[`${period}`]}</Themed.h5>
      <Themed.h5>{en[`${description}`]}</Themed.h5>

      <Themed.h2>Used Skills</Themed.h2>

      {tech.map((skill, i) => {
        return <Themed.li key={i}>{en[`${skill}`]}</Themed.li>;
      })}

      <Themed.h2>Projects</Themed.h2>

      {projects.map((project, i) => {
        return (
          <Themed.div key={i}>
            -
            <Themed.ul>
              <Themed.h4>{en[`${project.title}`]}</Themed.h4>
              <Themed.h5>{en[`${project.period}`]}</Themed.h5>
              <Themed.h5>{en[`${project.description}`]}</Themed.h5>
              <Themed.h5>{en[`${project.role}`]}</Themed.h5>
              <Themed.h5>{en[`${project.features}`]}</Themed.h5>
              <Themed.h5>{en[`${project.outcome}`]}</Themed.h5>
              <Themed.h5>{en[`${project.tech}`]}</Themed.h5>
              {project.link && <Themed.h5>{en[`${project.link}`]}</Themed.h5>}
              {project.details &&
                project.details.map((detail, i) => {
                  return <Themed.b key={i}>{en[`${detail}`]}</Themed.b>;
                })}
              {project.appendix &&
                project.appendix.map((img, i) => {
                  return (
                    <img
                      src={require(`../../../assets/${img}`).default}
                      alt="img"
                    />
                  );
                })}
            </Themed.ul>
          </Themed.div>
        );
      })}
    </>
  );
};

export default Project;
