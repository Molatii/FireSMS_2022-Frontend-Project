import { Box } from "@chakra-ui/react";
import SideBarWithHeader from "../../Sidebar/SideBar";
import UserProfile from "./userProfile";

function DisplayProfile() {
  return (
    <Box justifyContent="center" w="100%">
      <SideBarWithHeader>
        <UserProfile />
      </SideBarWithHeader>
    </Box>
  );
}
export default DisplayProfile;
