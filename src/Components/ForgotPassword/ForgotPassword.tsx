import { Stack } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import NavHeader from "../Navigation/NavHeader";
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPassword() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <ForgotPasswordForm />
      <Footer />
    </Stack>
  );
}
export default ForgotPassword;
