import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../Sidebar/SideBar";
import SMSBulk from "./sendBulk";

function DisplayBulk() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <SMSBulk />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayBulk;
