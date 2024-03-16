import * as React from "react";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
import { Themed } from "@theme-ui/mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import WorksMDX from "../sections/works.mdx"

const Works = ({
  offset,
  factor = 1,
  pages,
}: {
  offset: number;
  factor?: number;
  pages: number;
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
        // justifyContent="start"
      >
        <Inner>
 <WorksMDX />
          
           {/* <div   sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}>
           </div> */}
            
        </Inner>
      </Content>
      
    </div>
  );
};



export default Works;
