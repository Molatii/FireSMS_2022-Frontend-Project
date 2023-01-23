import { Stack } from "@chakra-ui/react";
import MobileSideBarFormat from "./mobileSideBarFormat";

function MobileSideBar() {
  return (
    <Stack direction="column" spacing={7} pos="fixed" zIndex={2}>
      <MobileSideBarFormat name="API Key" link="/dashboard/api-key" />
      <MobileSideBarFormat name="Send SMS" link="/dashboard/sms" />
      <MobileSideBarFormat name="Send Batch" link="/dashboard/sms-batch" />
      <MobileSideBarFormat name="History" link="/dashboard/sms-history" />
      <MobileSideBarFormat name="Balance" link="/dashboard/account-balance" />
    </Stack>
  );
}

export default MobileSideBar;
