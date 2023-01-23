import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  Flex,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import axios from "../../APIs/axiosBaseURL";

type FormValues = {
  email: string;
};

function ForgotPasswordForm() {
  const RORGOTPASSWORD_URL = "/api/v1/user/forgot-password";
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [submitStatus, setsubmitStatus] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(
          RORGOTPASSWORD_URL,
          {
            emailOrPhone: data.email,
          },
          {
            headers: { "Content-Type": "application/json" },
          },
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setLoading(false);
            setsubmitStatus(true);
            reset();
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setStatus("No Server Response");
      } else if (err.response?.status === 404) {
        setStatus("User not found");
      } else if (err.response?.status === 401) {
        setStatus("Failed to send reset email");
      } else {
        setStatus("Failed to submit email");
      }
    }
  });

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack
        w="90%"
        mt={{ base: "25%", md: "5%" }}
        mb={{ base: "99%", md: "18%" }}
        maxW={{ base: "sm", md: "md" }}
        rounded={6}
        direction="column"
        pb={{ base: "2%", md: "1%" }}
        pt={{ base: "11%", md: "3%" }}
      >
        <form onSubmit={onSubmit}>
          <Heading
            color="orange.400"
            pb={{ base: "4%", md: "2%" }}
            pt={{ base: "1%", md: "0%" }}
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Forgot Password
          </Heading>
          {submitStatus && submitStatus === true && (
            <Stack
              bg="green.100"
              color="black"
              alignItems="center"
              textAlign="center"
              mt="2%"
            >
              <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                pt="7%"
                color="green.500"
              >
                <BsCheckCircleFill />
              </Text>
              <Text fontWeight="bold">Request submitted</Text>
              <Text pb="5%" w="75%">
                You should receive a password reset email with instructions if
                your email address has an account
              </Text>
            </Stack>
          )}
          <FormControl>
            <FormHelperText
              pb={{ base: "1%", md: "1%" }}
              textAlign="center"
              fontFamily="sans-serif"
              fontWeight="semi-bold"
              color="red.500"
            >
              {status}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel
              textAlign="center"
              color="white"
              pb={{ base: "4%", md: "2%" }}
            >
              Please provide the email address that you signed up with
            </FormLabel>
            <Input
              w="full"
              textAlign="center"
              color="white"
              type="email"
              id="email"
              placeholder="Your Email Address"
              aria-describedby="email-helper-text"
              {...register("email", { required: true })}
            />
            <FormHelperText color="red.500" textAlign="center">
              {errors.email?.type === "required" && "Email Address is required"}
            </FormHelperText>
          </FormControl>
          <FormControl textAlign="center" pb={{ base: "3%", md: "3%" }}>
            <Button
              size={{ base: "md", md: "md" }}
              w="full"
              mt="5%"
              colorScheme="white"
              color="white"
              type="submit"
              bg="orange.400"
              _hover={{ bg: "teal", color: "white" }}
              variant="ghost"
              isLoading={loading}
              loadingText="Submitting"
            >
              Continue
            </Button>
          </FormControl>
        </form>
      </Stack>
    </Flex>
  );
}
export default ForgotPasswordForm;
