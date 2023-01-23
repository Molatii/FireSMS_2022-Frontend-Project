/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Stack, Text } from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";
import CompanyName from "./CompanyName";
import MenuBtn from "./MenuBtn";
import NavButtons from "./NavButtons";

function NavHeader() {
  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Sign In";
  const name4 = "Create account";

  // Scroll to 452px from the top
  const goToPricing = () => {
    scroll.scrollTo(452);
  };

  return (
    <header>
      <Box
        display="flex"
        align-items="center"
        justifyContent="space-between"
        bg="gray.800"
        w="100%"
        pos="fixed"
        zIndex={2}
      >
        <Box w="60%">
          <CompanyName />
        </Box>
        <Box mt="3" mb="2">
          <Stack
            mr="4"
            spacing={0}
            direction="row"
            align="center"
            display={["none", "none", "flex", "flex"]}
          >
            <Text onClick={goToPricing}>
              <NavButtons name={name} link="/" />
            </Text>
            <NavButtons name={name2} link="/docs" />
            <NavButtons name={name3} link="/signin" />
            <NavButtons name={name4} link="/signup" />
          </Stack>
          <MenuBtn />
        </Box>
      </Box>
    </header>
  );
}
export default NavHeader;
