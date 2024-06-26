/** @jsx jsx */
import * as React from "react";
import { Themed } from "@theme-ui/mdx";
import { ko, en } from "../../../../locale/index.mjs";
import { jsx, Badge, Paragraph, Text } from "theme-ui";

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
    link = undefined,
  } = project;
  return (
    <Paragraph my={5}>
      <Themed.div>
        <Themed.em>Project </Themed.em>
        <Themed.h4>
          <Text color="primary">{en[`${title}`]}</Text>
        </Themed.h4>
      </Themed.div>

      <Themed.div>
        <Themed.em>Overview </Themed.em>
        <Themed.h6>{en[`${description}`]}</Themed.h6>
      </Themed.div>

      <Themed.div>
        <Themed.em>Period </Themed.em>
        <Themed.h6>{en[`${period}`]}</Themed.h6>
      </Themed.div>

      {outcome && (
        <Themed.div>
          <Themed.em>Outcome </Themed.em>
          <Themed.h6>{en[`${outcome}`]}</Themed.h6>
        </Themed.div>
      )}

      {link && (
        <Themed.div>
          <Themed.em>Relevant Link</Themed.em>
          <Themed.h6>{en[`${link}`]}</Themed.h6>
        </Themed.div>
      )}

      <Themed.div>
        <Themed.em>Details </Themed.em>
        <Themed.ul
          sx={{
            padding: "0",
            paddingLeft: "15px",
            marginTop: "-1px",
            "list-style-type": "circle",
          }}
        >
          {details &&
            [role, ...details].map((detail, i) => {
              return <Themed.li key={i}> {en[`${detail}`]}</Themed.li>;
            })}
        </Themed.ul>

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
      </Themed.div>
    </Paragraph>
  );
};

export default ProjectItem;
