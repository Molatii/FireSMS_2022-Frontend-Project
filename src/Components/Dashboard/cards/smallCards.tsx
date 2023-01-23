import { Box, Stack } from "@chakra-ui/react";
import CardsFormat from "./cardsFormat";

function SmallCards() {
  return (
    <Box id="cards" alignItems="center" pb={{ base: "20%", md: "5%" }}>
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <CardsFormat
          title="SMS"
          subTitle="Users who prefer SMS Text"
          dataContent1="48%"
        />
        <CardsFormat
          title="Email"
          subTitle="Users who prefer Email"
          dataContent1="24%"
        />
        <CardsFormat
          title="Direct Mail"
          subTitle="Users who prefer Direct Mail"
          dataContent1="9%"
        />
        <CardsFormat
          title="Apps"
          subTitle="Users who prefer Apps"
          dataContent1="17%"
        />
      </Stack>
    </Box>
  );
}
export default SmallCards;
