/** @jsx jsx */
import { jsx, Badge, Paragraph } from "theme-ui";
import * as React from "react";
import type { HeadFC } from "gatsby";
import { Parallax } from "@react-spring/parallax";
import { Themed } from "@theme-ui/mdx";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo";
import { ko, en } from "../../../locale/index.mjs";
import ProjectItem from "../components/subComponents/project-item";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "../elements/content.tsx";
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
  waveAnimation,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";

const WorkPage = ({ pageContext }: { pageContext: Object }) => {
  const { description, name, period, position, projects, tech } =
    pageContext.contentData;

  let { pages = 1 } = pageContext.contentData;
  const introSize = 1;
  const footerSize = 0.2;
  const totalPages = pages + introSize + footerSize;
  const footerOffset = totalPages - footerSize;

  return (
    <Layout>
      <Parallax pages={totalPages}>
        <div className="project__intro">
          <Divider
            bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
            sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
            speed={-0.2}
            offset={0}
            factor={1}
          />
          <Content speed={0.4} offset={0} factor={1}>
            <Inner>
              <div>
                <Themed.h1>{en[`${name}`]}</Themed.h1>
                <Themed.div>
                  <Themed.div>
                    <Themed.em>Employment Period</Themed.em>
                    <Themed.h6>{en[`${period}`]}</Themed.h6>
                  </Themed.div>
                  <Themed.div>
                    <Themed.em>Position </Themed.em>
                    <Themed.h6> {en[`${position}`]}</Themed.h6>
                  </Themed.div>
                  <Themed.div>
                    <Themed.em>Company Overview </Themed.em>
                    <Themed.h6>{en[`${description}`]}</Themed.h6>
                  </Themed.div>
                  <Themed.div>
                    <Themed.em>Technical Skills</Themed.em>
                    <Themed.div>
                      {tech.map((item) => {
                        return (
                          <Badge backgroundColor="icon_blue" m={1}>
                            {en[`${item}`]}
                          </Badge>
                        );
                      })}
                    </Themed.div>
                  </Themed.div>
                </Themed.div>
              </div>
            </Inner>
          </Content>
        </div>
        <div className="project__spec">
          <Divider
            bg="divider"
            clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
            speed={0.2}
            offset={1}
            factor={1}
          />
          <Content speed={0.4} offset={1} factor={pages} justifyContent="start">
            <Inner>
              <Paragraph mb={5}>
                <Themed.h2>Work Experience</Themed.h2>
              </Paragraph>
              {projects.map((project: Object) => {
                return <ProjectItem project={project} />;
              })}
            </Inner>
          </Content>
          <Divider
            fill="divider"
            speed={0.2}
            offset={footerOffset}
            factor={footerSize}
          >
            <div
              sx={{
                position: `absolute`,
                bottom: 0,
                width: `full`,
                transform: `matrix(1, 0, 0, -1, 0, 0)`,
              }}
            >
              <div
                sx={{
                  position: `relative`,
                  height: `full`,
                  svg: { width: `100%`, height: `40vh` },
                  path: { animation: waveAnimation(`20s`) },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="contact-wave"
                  viewBox="0 0 800 338.05"
                  preserveAspectRatio="none"
                >
                  <path>
                    <animate
                      attributeName="d"
                      values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                      repeatCount="indefinite"
                      dur="30s"
                    />
                  </path>
                </svg>
              </div>
            </div>
          </Divider>
        </div>
      </Parallax>
    </Layout>
  );
};

export default WorkPage;

export const Head: HeadFC = () => <Seo />;
