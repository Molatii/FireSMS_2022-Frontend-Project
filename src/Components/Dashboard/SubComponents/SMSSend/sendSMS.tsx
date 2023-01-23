import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Text,
  Button,
  useToast,
  Heading,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import jwt_decode from "jwt-decode";
import axios from "../../../../APIs/axiosBaseURL";

type FormValues = {
  smsText: string;
  receivernumber: string;
  fromUser: string;
};
/*
type UserValues = {
  decoded: string;
  uuId: string;
}; */

function SendSMS() {
  // const token = localStorage.getItem("access_token");
  const token = "hidden";
  const [loading, setLoading] = useState(false);
  // const [uuId, setUuId] = useState("");
  const [status, setStatus] = useState("");
  const toast = useToast();
  // const SMS_URL = `/api/v1/send/message/${uuId}`;
  const SMS_URL = "hidden";

  /*
  useEffect(() => {
    const decoded: UserValues = jwt_decode(token || "");
    setUuId(decoded.uuId);
  }, [token]);
*/
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const showToast = () => {
    toast({
      position: "top",
      title: "SMS Send!",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };

  const onSubmit = handleSubmit(async (mydata, e) => {
    e?.preventDefault();
    setLoading(true);

    try {
      await axios
        .post(
          SMS_URL,
          {
            message: mydata.smsText,
            to: mydata.receivernumber,
            from: mydata.fromUser,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setLoading(false);
            showToast();
            reset();
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setStatus("No Server Response");
      } else {
        setStatus("SMS send Failed");
      }
    }
  });
  return (
    <Flex align="center" justify="center" w="100%">
      <Stack
        mx="auto"
        maxW="xl"
        py={2}
        px={6}
        w="100%"
        mb={{ base: "30%", md: "0%" }}
      >
        <Stack align="center">
          <Heading
            fontSize="3xl"
            fontWeight="semibold"
            textAlign="center"
            color="gray.800"
            fontFamily="arial"
          >
            SEND SMS
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
        <Flex
          rounded="lg"
          w="100%"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4} w="100%">
            <form onSubmit={onSubmit}>
              <FormControl>
                <FormLabel>Send SMS TO</FormLabel>
                <Input
                  type="number"
                  id="number"
                  placeholder="Receiver's Phone Number"
                  aria-describedby="number-helper-text"
                  {...register("receivernumber", {
                    required: true,
                    minLength: 8,
                    maxLength: 15,
                  })}
                />
                <FormHelperText color="red" textAlign="left">
                  {errors.receivernumber?.type === "required" &&
                    "Phone number is required"}
                  {errors.receivernumber?.type === "minLength" &&
                    "Entered number is less than 8 digits"}
                  {errors.receivernumber?.type === "maxLength" &&
                    "Entered number is more than 15 digits"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>SMS Text</FormLabel>
                <Textarea
                  id="smsText"
                  placeholder="Enter Text Message"
                  aria-describedby="email-helper-text"
                  {...register("smsText", { required: true, maxLength: 160 })}
                />
                <FormHelperText color="red" textAlign="left">
                  {errors.smsText?.type === "required" &&
                    "SMS text is required"}
                  {errors.smsText?.type === "maxLength" &&
                    "Entered Text message is more than 160 charactors"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>SMS From</FormLabel>
                <Input
                  type="text"
                  id="fromUser"
                  placeholder="Sender Name or Phone number "
                  aria-describedby="number-helper-text"
                  {...register("fromUser")}
                />
              </FormControl>
              <Stack spacing={10} mt={5}>
                <Button
                  textAlign="center"
                  type="submit"
                  bg="blue.400"
                  color="white"
                  _hover={{ bg: "teal.500", color: "white" }}
                  variant="ghost"
                  loadingText="Sending SMS"
                  isLoading={loading}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
export default SendSMS;
