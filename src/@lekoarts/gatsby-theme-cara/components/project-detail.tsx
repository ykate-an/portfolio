import * as React from "react";
import { Themed } from "@theme-ui/mdx";
import { ko, en } from "../../../locale/index.mjs";

const ProjectDetail = ({ contentData }: { contentData: Object }) => {
    console.log(contentData, 111, "contentData at project-detail page");
    const {
      title,
      where,
      period,
      description,
      role,
      details = undefined,
      appendix = undefined,
      outcome = undefined,
    } = contentData;
    return (
      <>
        <Themed.h1>{en[`${title}`]}</Themed.h1>
        <Themed.h5>{en[`${where}`]}</Themed.h5>
        <Themed.h5>{en[`${period}`]}</Themed.h5>
        <Themed.h5>{en[`${description}`]}</Themed.h5>
        <Themed.h5>{en[`${role}`]}</Themed.h5>
  
        {outcome && <Themed.h5>{en[`${outcome}`]}</Themed.h5>}
     
  
        {details && details.map((detail, i) => {
                    return (
                      <Themed.ul>
                      <Themed.li key={i}> {en[`${detail}`]}</Themed.li> 
                      </Themed.ul>
                    )
                  })}
  
          {appendix && appendix.map((img, i) => {
                    return (
                      <img
                        src={require(`../../../assets/${img}`).default}
                        key={i}
                        alt="img"
                      />
                    );
                  })} 
     
      </>
    );
  };

export default ProjectDetail