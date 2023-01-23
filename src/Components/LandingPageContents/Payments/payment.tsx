import { Box, Stack, Text } from "@chakra-ui/react";
import AccTable from "./table";

function Payments() {
  const MyInfor =
    "We currently only have a bank account payment options, you will have to send us proof of payment to purchase@firesms.co";
  return (
    <Stack justify="center" alignItems="center" w="100%">
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="#FF5F0F"
        pt={{ base: "14%", md: "5%" }}
        pb={{ base: "8%", md: "4%" }}
        id="PaymentOptions"
      >
        Payment options
      </Text>
      <Box w={{ base: "90%", md: "35%" }} justifyContent="center">
        <Text textAlign="center" color="white" pb={{ base: "16%", md: "8%" }}>
          {MyInfor}
        </Text>
      </Box>
      <Text
        fontWeight="bold"
        fontSize="md"
        textAlign="center"
        color="#FF5F0F"
        pb="2%"
      >
        Bank Account
      </Text>
      <AccTable />
    </Stack>
  );
}
export default Payments;
