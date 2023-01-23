import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../Sidebar/SideBar";
import DashBoardHome from "./dashBoardHome";

function DisplayHome() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <DashBoardHome />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayHome;
