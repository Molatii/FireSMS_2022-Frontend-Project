import { Stack } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Communication Channels",
    },
  },
};

const labels = ["Others", "Direct Mail", "Apps", "Email", "SMS"];

export const data = {
  labels,
  datasets: [
    {
      label: "Bar color",
      data: [2, 9, 17, 24, 48],
      backgroundColor: "#89CFF0",
    },
  ],
};

function BarChart() {
  return (
    <Stack
      bg="white"
      alignItems="center"
      shadow="lg"
      p={2}
      borderWidth="1px"
      borderRadius="lg"
      w={{ base: "100%", md: "70%" }}
    >
      <Bar options={options} data={data} />
    </Stack>
  );
}
export default BarChart;
