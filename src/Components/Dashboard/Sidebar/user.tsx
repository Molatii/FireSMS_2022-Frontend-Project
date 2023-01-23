import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import { useContext, useEffect, useState } from "react";
import { DashBoardContext } from "../DashboardContext/dashboardContext";

/*
type UserValues = {
  decoded: string;
  email: string;
}; */

function User() {
  const { sideBarSize } = useContext(DashBoardContext);
  /*
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      const token = localStorage.getItem("access_token");
      const decoded: UserValues = jwt_decode(token || "");
      setUserName(decoded.email.split("@")[0]);
    }
  }, []);

  */

  return (
    <HStack>
      <Flex
        alignItems="center"
        align="center"
        p="4"
        mx="2"
        mb={sideBarSize === "small" ? "-560%" : "-200%"}
      >
        <Link
          to="/dashboard/profile"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          <HStack cursor="pointer">
            <img
              alt="User-Icon"
              width="35px"
              height="35px"
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
            />
            {sideBarSize && sideBarSize === "large" && (
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="center"
                spacing="1px"
                fontSize="16"
              >
                <Text fontSize="sm" color="gray.800">
                  UserName
                </Text>
              </VStack>
            )}
            {sideBarSize && sideBarSize === "small" && (
              <VStack
                display={{ base: "none", md: "none" }}
                alignItems="center"
                spacing="1px"
                fontSize="16"
              >
                <Text fontSize="sm" color="gray.800">
                  UserName
                </Text>
              </VStack>
            )}
          </HStack>
        </Link>
      </Flex>
    </HStack>
  );
}
export default User;
