import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { animateScroll as scroll } from "react-scroll";
import MyMenuItem from "./MyMenuItem";

function MenuBtn() {
  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Sign In";
  const name4 = "Create account";

  // Scroll to 379px from the top
  const goTo = () => {
    scroll.scrollTo(379);
  };
  return (
    <Flex>
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
        <MenuList bg="gray.800" color="white">
          <Text onClick={goTo}>
            <MyMenuItem name={name} link="/" />
          </Text>
          <MyMenuItem name={name2} link="/docs" />
          <MyMenuItem name={name3} link="/signin" />
          <MyMenuItem name={name4} link="/signup" />
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MenuBtn;
