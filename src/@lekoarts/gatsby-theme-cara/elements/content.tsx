/** @jsx jsx */
import { jsx } from "theme-ui";
import { ParallaxLayer } from "@react-spring/parallax";

type ContentProps = {
  speed: number;
  offset: number;
  children: React.ReactNode;
  className?: string;
  factor?: number;
  justifyContent?: string;
};

const Content = ({
  speed,
  offset,
  children,
  className = ``,
  factor = 1,
  justifyContent = `center`,
}: ContentProps) => (
  <ParallaxLayer
    sx={{
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: justifyContent,
      zIndex: 50,
      // border: "1px solid red",
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
);

export default Content;
