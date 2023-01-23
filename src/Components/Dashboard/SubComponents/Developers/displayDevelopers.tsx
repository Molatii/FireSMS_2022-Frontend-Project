import { Box, Flex } from "@chakra-ui/react";
import SelectDeveloper from "../../../LandingPageContents/Developers/selectDeveloper";
import SideBarWithHeader from "../../Sidebar/SideBar";

function DisplayDevelopersDocs() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <Flex w={{ base: "100%", md: "50%" }}>
          <SelectDeveloper />
        </Flex>
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayDevelopersDocs;
