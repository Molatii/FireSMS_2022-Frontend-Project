import { Stack } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import NavHeader from "../Navigation/NavHeader";
import SignUpForm from "./signUpForm";

function SignUp() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <SignUpForm />
      <Footer />
    </Stack>
  );
}
export default SignUp;
