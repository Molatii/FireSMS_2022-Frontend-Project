import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      pt={{ base: "8.1%", md: "2%" }}
      pb={{ base: "8%", md: "2%" }}
      mb={{ base: "0%", md: "0%" }}
      borderColor="gray.800"
      bg="gray.800"
      borderTopColor={{ base: "gray.300", md: "gray.800" }}
      borderWidth="0.5px"
    >
      <a href="https://africacode.org/">
        <Text alignItems="center" textAlign="center" color="white">
          Powered by Africa Code Foundry
        </Text>
      </a>
    </Box>
  );
}
export default Footer;
