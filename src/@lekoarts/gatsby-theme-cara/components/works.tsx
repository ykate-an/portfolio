/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
import WorksMDX from "../sections/works.mdx";
import { works } from "../../../database.mjs";
import { Themed } from "@theme-ui/mdx";
import { Text, Paragraph } from "theme-ui";
import ProjectCard from "./project-card";
import { ko, en } from "../../../locale/index.mjs";

const Works = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content
      speed={0.4}
      offset={offset}
      factor={factor}
      // justifyContent="start"
    >
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <WorkCards />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <Svg
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_brightest"
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <Svg
          icon="circle"
          width={16}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <Svg
          icon="triangle"
          hiddenMobile
          width={16}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <Svg
          icon="circle"
          width={6}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
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
      <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <Svg
        icon="hexa"
        width={16}
        stroke
        color="icon_red"
        left="75%"
        top="30%"
      />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
);

const WorkCards = () => {
  const bgColors = [
    "linear-gradient(to right, #D585FF 0%, #00FFEE 100%)",
    "linear-gradient(to right, rgba(244,132,132,1) 0%, rgba(238,174,202,1) 30%, rgba(236,245,255,1) 100%)",
    "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)",
    "linear-gradient(to right, #662D8C 0%, #ED1E79 100%)",
  ];
  const companys = works.map((company, idx) => {
    return {
      ...company,
      bg: bgColors[idx],
    };
  });

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <>
      <Themed.h2>Works</Themed.h2>
      {companys.map((company) => {
        return (
          <ProjectCard
            title={en[`${company.name}`]}
            link={`/${company.path}`}
            bg={company.bg}
            key={company.path}
          >
            {<Paragraph>{en[`${company.position}`]}</Paragraph>}
            {<Paragraph pt={1}>{en[`${company.period}`]}</Paragraph>}
            {<Paragraph pt={3}>{en[`${company.description}`]}</Paragraph>}
          </ProjectCard>
        );
      })}
    </>
  );
};

export default Works;
