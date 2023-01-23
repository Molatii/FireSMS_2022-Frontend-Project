import { Stack } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import Payments from "../LandingPageContents/Payments/payment";
import Plans from "../LandingPageContents/PlansComponent/plans";
import PricesStak from "../LandingPageContents/PricesComponet/pricesStack";
import SmsPlatForms from "../LandingPageContents/SMSPlarForms/smsPLatforms";
import NavHeader from "../Navigation/NavHeader";

function Layout() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <Plans />
      <PricesStak />
      <SmsPlatForms />
      <Payments />
      <Footer />
    </Stack>
  );
}
export default Layout;
