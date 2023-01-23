import { Flex, HStack, useColorModeValue, Text, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavButtons from "../../Navigation/NavButtons";
import MyMenuIcon from "./mymenuIcon";
import { DashBoardContext } from "../DashboardContext/dashboardContext";

function TopNav() {
  const { sideBarSize } = useContext(DashBoardContext);
  const navigate = useNavigate();

  const signOut = async () => {
    localStorage.removeItem("session");
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  const Home = () => {
    navigate("/dashboard");
  };

  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Profile";
  const name4 = "Sign Out";

  return (
    <Flex
      ml={{ base: 0, md: sideBarSize === "small" ? "79" : "15%" }}
      transition="0.3s ease"
      height="16"
      bg={useColorModeValue("gray.800", "gray.800")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      pos="fixed"
      zIndex={2}
      w={{ base: "100%", md: sideBarSize === "small" ? "94.2%" : "85%" }}
    >
      <HStack
        cursor="pointer"
        direction="row"
        onClick={Home}
        spacing={0}
        w="50%"
      >
        <Stack alignItems="center">
          <img
            width="30px"
            height="20px"
            alt="logo"
            src="https://pngimg.com/uploads/flame/flame_PNG13246.png"
          />
        </Stack>
        <Stack w="92%">
          <Text mt="13.3" color="white" fontSize="2xl" fontWeight="bold">
            FireSMS
          </Text>
        </Stack>
      </HStack>

      <HStack spacing={{ base: "0", md: "0" }} mr={{ base: "0", md: "5" }}>
        <Flex alignItems="center">
          <HStack display={{ base: "none", md: "contents" }} mr="5">
            <NavButtons name={name} link="/dashboard/pricing" />
            <NavButtons name={name2} link="/dashboard/docs" />
            <NavButtons name={name3} link="/dashboard/profile" />
            <Text onClick={signOut}>
              <NavButtons name={name4} link="/" />
            </Text>
          </HStack>
          <MyMenuIcon />
        </Flex>
      </HStack>
    </Flex>
  );
}

export default TopNav;
