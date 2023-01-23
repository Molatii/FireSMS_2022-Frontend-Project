import { Box, useColorModeValue, Text, BoxProps, Flex } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { MdOutlineSms, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TbMessageShare } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { VscKey } from "react-icons/vsc";
import { useContext } from "react";
import { DashBoardContext } from "../DashboardContext/dashboardContext";
import NavItem from "./NavItemFormat";
import User from "./user";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
  const { sideBarSize, setSideBarSize } = useContext(DashBoardContext);
  return (
    <Box
      transition="0.3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: 0, md: sideBarSize === "small" ? "20" : "15%" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        height="16"
        alignItems="center"
        justifyContent="space-between"
        mb={sideBarSize === "small" ? "55%" : "20%"}
        mx="7"
        direction="row"
      >
        <Text
          mr="2"
          ml="1"
          fontSize="2xl"
          fontFamily="sans-serif"
          fontWeight="bold"
          cursor="pointer"
          _hover={{
            fontWeight: "bold",
            fontSize: "3xl",
          }}
          onClick={() => {
            if (sideBarSize === "small") setSideBarSize("large");
            else setSideBarSize("small");
          }}
        >
          {sideBarSize === "small" ? <FiMenu /> : <GrClose />}
        </Text>
      </Flex>
      {sideBarSize && sideBarSize === "large" && (
        <>
          <NavItem icon={VscKey} name="API Key" link="/dashboard/api-key" />
          <NavItem icon={MdOutlineSms} name="Send SMS" link="/dashboard/sms" />
          <NavItem
            icon={TbMessageShare}
            name="Send Batch"
            link="/dashboard/sms-batch"
          />
          <NavItem
            icon={TiMessages}
            name="SMS History"
            link="/dashboard/sms-history"
          />
          <NavItem
            icon={MdOutlineAccountBalanceWallet}
            name="View Balance"
            link="/dashboard/account-balance"
          />
        </>
      )}
      {sideBarSize && sideBarSize === "small" && (
        <>
          <NavItem icon={VscKey} name="" link="/dashboard/api-key" />
          <NavItem icon={MdOutlineSms} name="" link="/dashboard/sms" />
          <NavItem icon={TbMessageShare} name="" link="/dashboard/sms-batch" />
          <NavItem icon={TiMessages} name="" link="/dashboard/sms-history" />
          <NavItem
            icon={MdOutlineAccountBalanceWallet}
            name=""
            link="/dashboard/account-balance"
          />
        </>
      )}
      <User />
    </Box>
  );
}
