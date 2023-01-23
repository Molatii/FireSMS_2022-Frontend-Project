import { Stack } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import NavHeader from "../Navigation/NavHeader";
import ResetPasswordForm from "./resetPasswordForm";

function ResetPassword() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <ResetPasswordForm />
      <Footer />
    </Stack>
  );
}
export default ResetPassword;
