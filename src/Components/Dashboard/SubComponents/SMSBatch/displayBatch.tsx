import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../Sidebar/SideBar";
import SMSBatch from "./sendBatch";

function DisplayBatch() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <SMSBatch />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayBatch;
