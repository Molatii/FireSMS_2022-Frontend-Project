import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Text,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../../../../APIs/axiosBaseURL";

type FormValues = {
  repeatPassword: string;
  password: string;
  currentpassword: string;
};
interface EmailProp {
  email: string;
}

// eslint-disable-next-line react/prop-types
function UpdatePassword({ email }: EmailProp) {
  const userEmail = email;
  const [passwordMatchErr, setPasswordMatchErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const toast = useToast();
  const LOGIN_URL = "/api/v1/user/login";
  const UPDATE_URL = "/api/v1/user/update-password";
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const showToast = () => {
    toast({
      position: "top",
      title: "Password Updated!",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const updatePassword = async (mydata: any) => {
    if (mydata.repeatPassword === mydata.password) {
      setLoading(true);
      setPasswordMatchErr(false);
      try {
        await axios
          .put(
            UPDATE_URL,
            {
              emailOrPhone: userEmail,
              newPassword: mydata.password,
              confirmPassword: mydata.repeatPassword,
            },
            {
              headers: { "Content-Type": "application/json" },
            },
          )
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              showToast();
              reset();
              setLoading(false);
              localStorage.removeItem("session");
              localStorage.removeItem("access_token");
              navigate("/signIn");
            }
          });
      } catch (err: any) {
        setLoading(false);
        if (!err?.response) {
          setStatus("No Server Response");
        } else {
          setStatus("Failed to update Password");
        }
      }
    } else {
      setLoading(false);
      setPasswordMatchErr(true);
    }
  };

  const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(
          LOGIN_URL,
          JSON.stringify({
            emailOrPhone: userEmail,
            password: mydata.currentpassword,
          }),
          {
            headers: { "Content-Type": "application/json" },
          },
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setStatus("");
            updatePassword(mydata);
            setLoading(false);
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setStatus("No Server Response");
      } else {
        setStatus("Current Password not recognised");
      }
    }
  });
  return (
    <Flex align="center" justify="center" w="100%">
      <Stack mx="auto" maxW="xl" w="100%">
        <Stack align="center">
          <Heading
            fontSize="2xl"
            fontWeight="semibold"
            textAlign="center"
            color="gray.800"
            pt="2%"
            mb="2%"
            fontFamily="arial"
          >
            Update Password
          </Heading>
          <Text
            textAlign="center"
            fontFamily="sans-serif"
            fontWeight="semi-bold"
            color="red"
          >
            {status}
          </Text>
        </Stack>
        <Flex w="100%">
          <Stack spacing={4} w="100%">
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel>Current Password</FormLabel>
                <Input
                  type="password"
                  id="currentpassword"
                  color="black"
                  placeholder="Current Password"
                  aria-describedby="password-helper-text"
                  {...register("currentpassword", {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,30}$/,
                    minLength: 10,
                    maxLength: 30,
                  })}
                />
                <FormHelperText color="red.500" textAlign="left">
                  {errors.currentpassword?.type === "required" &&
                    "Current Pssword is required"}
                  {errors.currentpassword?.type === "minLength" &&
                    "Required Current Pssword minLength is 10"}
                  {errors.currentpassword?.type === "maxLength" &&
                    "Required Current Pssword maxLength is 30"}
                  {errors.currentpassword?.type === "pattern" &&
                    "Current Pssword should at least include 1 Symbol,1 Uppercase, 1 Lowercase & 1 Number"}
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  color="black"
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
                <FormHelperText color="red.500" textAlign="left">
                  {errors.password?.type === "required" &&
                    "Password is required"}
                  {errors.password?.type === "minLength" &&
                    "Required Password minLength is 10"}
                  {errors.password?.type === "maxLength" &&
                    "Required Password maxLength is 30"}
                  {errors.password?.type === "pattern" &&
                    "Password should at least include 1 Symbol,1 Uppercase, 1 Lowercase & 1 Number"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  id="repeatPassword"
                  color="black"
                  placeholder="Repeat Password"
                  aria-describedby="password-helper-text"
                  {...register("repeatPassword", {
                    required: true,
                  })}
                />
                <FormHelperText color="red.500" textAlign="left">
                  {errors.repeatPassword?.type === "required" &&
                    "Password Confirmation is required"}
                  <br />
                  {passwordMatchErr &&
                    passwordMatchErr === true &&
                    "Passwords do not match"}
                </FormHelperText>
              </FormControl>
              <Stack spacing={10} mt={5}>
                <Button
                  textAlign="center"
                  type="submit"
                  bg="blue.400"
                  color="white"
                  mb="2%"
                  _hover={{ bg: "teal.500", color: "white" }}
                  variant="ghost"
                  loadingText="Updating Password"
                  isLoading={loading}
                >
                  Update Password
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
export default UpdatePassword;
