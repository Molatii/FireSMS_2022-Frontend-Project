import { Stack, Text } from "@chakra-ui/react";
import BarChart from "./barChart";
import PieChart from "./pieChart";

function Allcharts() {
  return (
    <Stack spacing={5} alignItems="center" justifyContent="center" w="100%">
      <Text
        textAlign="left"
        fontFamily="arial"
        fontWeight="semibold"
        fontSize="2xl"
      >
        SMS Growth
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        w={{ base: "100%", md: "90%" }}
      >
        <BarChart />
        <PieChart />
      </Stack>
    </Stack>
  );
}
export default Allcharts;
