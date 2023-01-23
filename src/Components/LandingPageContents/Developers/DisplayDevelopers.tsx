import { Stack } from "@chakra-ui/react";
import Footer from "../../Footer/footer";
import NavHeader from "../../Navigation/NavHeader";
import SelectDeveloper from "./selectDeveloper";

function DisplayDevelopers() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <SelectDeveloper />
      <Footer />
    </Stack>
  );
}
export default DisplayDevelopers;
