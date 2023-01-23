/* eslint-disable react/jsx-no-constructed-context-values */
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import Footer from "../../Footer/footer";
import { DashBoardContext } from "../DashboardContext/dashboardContext";
import TopNav from "../TopNavigation/topNav";
import MobileSideBar from "./mobileSideBar";
import SidebarContent from "./sideBarContent";

function SideBar({ children }: { children: ReactNode }) {
  const { isOpen, onClose } = useDisclosure();
  const [sideBarSize, setSideBarSize] = useState("large");

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <DashBoardContext.Provider
        value={{
          sideBarSize,
          setSideBarSize,
        }}
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <TopNav />
        <Box ml={{ base: 0, md: sideBarSize === "small" ? "79" : "15%" }} p="4">
          <Box alignItems="center" py={10}>
            <Box mt="22%" display={{ base: "Block", md: "none" }}>
              <MobileSideBar />
            </Box>
            <Stack
              alignItems="center"
              textAlign="center"
              mt={{ base: "5%", md: "6%" }}
            >
              {children}
            </Stack>
          </Box>
        </Box>
        <Box display={{ base: "contents", md: "none" }}>
          <Footer />
        </Box>
      </DashBoardContext.Provider>
    </Box>
  );
}

export default SideBar;
