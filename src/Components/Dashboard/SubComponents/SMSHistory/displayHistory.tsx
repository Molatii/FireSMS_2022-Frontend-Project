import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../Sidebar/SideBar";
import SMSHistory from "./smsHistory";

function DisplayHistory() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <SMSHistory />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayHistory;
