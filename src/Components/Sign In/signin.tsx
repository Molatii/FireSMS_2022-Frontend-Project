import { Stack } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import NavHeader from "../Navigation/NavHeader";
import SignINForm from "./signInform";

function SignIn() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <SignINForm />
      <Footer />
    </Stack>
  );
}
export default SignIn;
