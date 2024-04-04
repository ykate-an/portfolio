import * as React from "react";
import { Themed } from "@theme-ui/mdx";
import { ko, en } from "../../../../locale/index.mjs";
import { jsx, Badge, Paragraph } from "theme-ui";

const ProjectItem = ({ project }: { project: Object }) => {
  const {
    title,
    where,
    period,
    description,
    role,
    details = undefined,
    appendix = undefined,
    outcome = undefined,
  } = project;
  return (
    <Paragraph my={5}>
      <Themed.div>
        <Themed.em>Project </Themed.em>
        <Themed.h4>{en[`${title}`]}</Themed.h4>
      </Themed.div>

      <Themed.div>
        <Themed.em>Overview </Themed.em>
        <Themed.h6>{en[`${description}`]}</Themed.h6>
      </Themed.div>

      <Themed.div>
        <Themed.em>Period </Themed.em>
        <Themed.h6>{en[`${period}`]}</Themed.h6>
      </Themed.div>

      {outcome && <Themed.h5>{en[`${outcome}`]}</Themed.h5>}

      {details &&
        [role, ...details].map((detail, i) => {
          return (
            <Themed.ul>
              <Themed.li key={i}> {en[`${detail}`]}</Themed.li>
            </Themed.ul>
          );
        })}
      {appendix &&
        appendix.map((img, i) => {
          return (
            <img
              src={require(`../../../../assets/${img}`).default}
              key={i}
              alt="img"
              style={{ width: "200px", height: "200px" }}
            />
          );
        })}
    </Paragraph>
  );
};

export default ProjectItem;
