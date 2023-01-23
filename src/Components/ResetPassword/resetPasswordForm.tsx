import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
  Flex,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../APIs/axiosBaseURL";

type FormValues = {
  repeatPassword: string;
  password: string;
};

function ResetPasswordForm() {
  const tokenId = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const RESETPASSWORD_URL = "/api/v1/user/reset-password";
  const [passwordMatchErr, setPasswordMatchErr] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const showToast = () => {
    toast({
      position: "top",
      title: "Password reset was Successful..Now Log In",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit = handleSubmit(async (data, e) => {
    e?.preventDefault();

    if (data.repeatPassword === data.password) {
      setLoading(true);
      setPasswordMatchErr(false);

      try {
        await axios
          .post(
            RESETPASSWORD_URL,
            {
              resetKey: tokenId.resetId,
              newPassword: data.password,
            },
            {
              headers: { "Content-Type": "application/json" },
            },
          )
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              setLoading(false);
              showToast();
              reset();
              navigate("/signin");
            }
          });
      } catch (err: any) {
        setLoading(false);
        if (!err?.response) {
          setStatus("No Server Response");
        } else if (err.response?.status === 401) {
          setStatus("Error Invalid Key");
        } else {
          setStatus("Password Reset Failed");
        }
      }
    } else {
      setPasswordMatchErr(true);
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
            textAlign="left"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            Reset Password
          </Heading>
          <FormControl>
            <FormHelperText
              pb={{ base: "1%", md: "1%" }}
              textAlign="left"
              fontFamily="sans-serif"
              fontWeight="semi-bold"
              color="red.500"
            >
              {status}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="white">New Password</FormLabel>
            <Input
              type="password"
              id="password"
              color="white"
              placeholder="Password"
              aria-describedby="password-helper-text"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,30}$/,
                minLength: 10,
                maxLength: 30,
              })}
            />
            <FormHelperText color="red.500">
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "minLength" &&
                "Required Password minLength is 10"}
              {errors.password?.type === "maxLength" &&
                "Required Password maxLength is 30"}
              {errors.password?.type === "pattern" &&
                "Password should at least include 1 Symbol,1 Uppercase, 1 Lowercase & 1 Number"}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel color="white">Repeat Password</FormLabel>
            <Input
              type="password"
              id="repeatPassword"
              color="white"
              placeholder="Repeat Password"
              aria-describedby="password-helper-text"
              {...register("repeatPassword", {
                required: true,
              })}
            />
            <FormHelperText color="red.500">
              {errors.repeatPassword?.type === "required" &&
                "Repeat Password is required"}
              <br />
              {passwordMatchErr &&
                passwordMatchErr === true &&
                "Passwords do not match"}
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
export default ResetPasswordForm;
