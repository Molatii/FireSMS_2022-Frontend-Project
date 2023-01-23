import { Box, Stack, Text } from "@chakra-ui/react";
import PlatformCardFormat from "./platformCardFormat";

function SmsPlatForms() {
  return (
    <Box bg="gray.900" alignItems="center" pb={{ base: "20%", md: "8%" }}>
      <Text
        color="white"
        textAlign="center"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="semibold"
        fontFamily="sans-serif"
        pb={{ base: "8%", md: "3%" }}
        pt="3%"
      >
        The most affordable platform
      </Text>
      <Stack
        mt={2}
        pb="5"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justify="center"
      >
        <PlatformCardFormat
          bg="gray.50"
          title="FireSMS"
          dataContent1="R"
          dataContent2="0,13"
          dataContent3="Per SMS"
        />
        <PlatformCardFormat
          bg="gray.900"
          title="Twilio"
          dataContent1="R"
          dataContent2="1,20+"
          dataContent3="Per SMS"
        />
      </Stack>
    </Box>
  );
}
export default SmsPlatForms;
