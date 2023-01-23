import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Plans() {
  return (
    <Box
      w="100%"
      textAlign={{ base: "center", md: "center" }}
      color="white"
      bg="gray.800"
      pt={{ base: "30%", md: "13%" }}
      m="0 auto"
      alignItems="center"
    >
      <Flex justify="center">
        <Text
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="bold"
          color="white"
          textAlign="center"
          pb={{ base: "8%", md: "2%" }}
          id="firstSMS"
        >
          Developer first SMS <br />
          platform
        </Text>
      </Flex>
      <Flex
        gap="10"
        p="4"
        textAlign={{ base: "center", md: "center" }}
        justify={{ base: "center", md: "center" }}
        pb={{ base: "20%", md: "6%" }}
        direction={{ base: "column", md: "row" }}
        w={{ base: "100%", md: "100%" }}
      >
        <Link id="SignUp5" to="/SignUp">
          <Button
            pt="6"
            w={{ base: "90%", md: "100%" }}
            pr={{ base: "28", md: "8" }}
            pl={{ base: "28", md: "8" }}
            pb="6"
            fontWeight="semibold"
            color="white"
            size={{ base: "lg", md: "2xl" }}
            bg="#FF5F0F"
            _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
            variant="ghost"
          >
            Create Account
          </Button>
        </Link>
        <Link id="Docs" to="/Docs">
          <Button
            w={{ base: "90%", md: "100%" }}
            pt="6"
            pr={{ base: "28", md: "8" }}
            pl={{ base: "28", md: "8" }}
            pb="6"
            fontWeight="semibold"
            size={{ base: "lg", md: "2xl" }}
            bg="gray.800"
            variant="outline"
            colorScheme="#FF5F0F"
            color="#FF5F0F"
            _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
          >
            Developers
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
export default Plans;
