import { Box, Stack } from "@chakra-ui/react";
import CardsFormat from "../../cards/cardsFormat";

function UserPricingOptions() {
  return (
    <Box
      id="cards"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      justifyContent="center"
      w="100%"
    >
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        mb={{ base: "25%", md: "4%" }}
      >
        <CardsFormat
          title="Hobby"
          subTitle="Less than 1k"
          dataContent1="R 0,15 / sms"
        />
        <CardsFormat
          title="StartUp"
          subTitle="1k+"
          dataContent1="R 0,13 /sms"
        />
        <CardsFormat
          title="Enterprice"
          subTitle="10k+"
          dataContent1="R 0,12 /sms"
        />
      </Stack>
    </Box>
  );
}
export default UserPricingOptions;
