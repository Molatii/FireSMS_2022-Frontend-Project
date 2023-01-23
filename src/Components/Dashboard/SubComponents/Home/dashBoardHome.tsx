import { Box } from "@chakra-ui/react";
import SmallCards from "../../cards/smallCards";
import Allcharts from "../../charts/allCharts";

function DashBoardHome() {
  return (
    <Box justifyContent="center" w="100%">
      <SmallCards />
      <Allcharts />
    </Box>
  );
}
export default DashBoardHome;
