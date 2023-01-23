import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface SibeBarProps {
  link: string;
  name: string;
}

function MobileSideBarFormat(props: SibeBarProps) {
  const { name, link } = props;
  return (
    <Link
      to={link}
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        textAlign="center"
        shadow="lg"
        color="gray.800"
        p={1}
        borderWidth="1px"
        borderRadius="lg"
        cursor="pointer"
        _active={{
          bg: "orange.400",
          color: "white",
        }}
        _hover={{ bg: "orange.400", color: "white" }}
        w={{ base: "82%", md: "0%" }}
      >
        <Text fontSize="1xl" fontWeight="bold">
          {name}
        </Text>
      </Box>
    </Link>
  );
}
export default MobileSideBarFormat;
