/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">();
  const isDark = colorMode === `dark`;
  // setColorMode(next);
  return (
    <Box as="footer" variant="footer">
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      ></Flex>
    </Box>
  );
};

export default Footer;
