import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  useColorMode
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import "../assets/css/News.css";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex boxShadow="md">
        <Box p="2" m="4">
          <Heading className="newsHeading" fontFamily="Inter" fontSize="2xl">
            News App
          </Heading>
        </Box>
        <Spacer />
        <Box m="5">
          <IconButton mr="4" aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
