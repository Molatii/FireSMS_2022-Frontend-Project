import { Box, Stack, Text } from "@chakra-ui/react";
import PricesFormat from "./pricesFormat";

function PricesStak() {
  return (
    <Box
      id="Prices"
      bg="gray.800"
      alignItems="center"
      pb={{ base: "20%", md: "8%" }}
    >
      <Text
        color="white"
        textAlign="center"
        fontSize="4xl"
        fontWeight="semibold"
        fontFamily="sans-serif"
      >
        Plans that fit your need
      </Text>
      <Text
        color="gray.500"
        textAlign="center"
        fontSize="lg"
        pb={{ base: "9%", md: "3%" }}
      >
        Start with 10 free messages. No credit card needed.
      </Text>
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <PricesFormat
          title="Hobby"
          subTitle="less than 1k"
          dataContent1="R"
          dataContent2="0,15"
          dataContent3="/sms"
        />
        <PricesFormat
          title="Startup"
          subTitle="1k+"
          dataContent1="R"
          dataContent2="0,13"
          dataContent3="/sms"
        />
        <PricesFormat
          title="Enterprise"
          subTitle="10k+"
          dataContent1="R"
          dataContent2="0,12"
          dataContent3="/sms"
        />
      </Stack>
    </Box>
  );
}
export default PricesStak;
