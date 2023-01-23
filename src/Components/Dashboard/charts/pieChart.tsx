import { Stack } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["SMS Increase 60%", "SMS Decrease 8.7%", "other Channels 30.5%"],
  datasets: [
    {
      data: [60, 8.7, 30.5],
      backgroundColor: ["#39e75f", "#FFA500", "#C0C0C0"],
      borderColor: ["#98EE90", "#FFA500", "#C0C0C0"],
      borderWidth: 1,
    },
  ],
};

function PieChart() {
  return (
    <Stack
      bg="white"
      alignItems="center"
      shadow="lg"
      p={2}
      borderWidth="1px"
      borderRadius="lg"
      w={{ base: "100%", md: "28%" }}
    >
      <Pie data={data} />
    </Stack>
  );
}
export default PieChart;
