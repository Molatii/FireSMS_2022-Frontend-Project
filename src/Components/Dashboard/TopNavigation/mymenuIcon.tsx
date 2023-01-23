import {
  Flex,
  Menu,
  MenuButton,
  Text,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import MyMenuItem from "../../Navigation/MyMenuItem";

function MyMenuIcon() {
  const navigate = useNavigate();
  const signOut = async () => {
    localStorage.removeItem("session");
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Profile";
  const name4 = "Sign Out";

  return (
    <Flex display={{ base: "contents", md: "none" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          display={["flex", "flex", "none", "none"]}
          mr="4"
        />
        <MenuList bg="gray.800" color="white" mt="1.5%">
          <MyMenuItem name={name} link="/dashboard/pricing" />
          <MyMenuItem name={name2} link="/dashboard/docs" />
          <MyMenuItem name={name3} link="/dashboard/profile" />
          <Text onClick={signOut}>
            <MyMenuItem name={name4} link="" />
          </Text>
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MyMenuIcon;
