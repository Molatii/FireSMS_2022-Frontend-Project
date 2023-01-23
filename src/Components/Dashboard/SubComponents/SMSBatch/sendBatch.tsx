import {
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Button,
  useToast,
  Heading,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCSVReader } from "react-papaparse";
// import jwt_decode from "jwt-decode";
import axios from "../../../../APIs/axiosBaseURL";

/*
type UserValues = {
  decoded: string;
  uuId: string;
}; */

function SMSBatch() {
  // const token = localStorage.getItem("access_token");
  const token = "hidden";
  const { CSVReader } = useCSVReader();
  // const [uuId, setUuId] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const toast = useToast();
  // const SMSBATCH_URL = `/api/v1/send/batch/${uuId}`;
  const SMSBATCH_URL = "hidden";
  let fileData: { text: string; to: []; from: string }[] = [];

  /*
  useEffect(() => {
    const decoded: UserValues = jwt_decode(token || "");
    setUuId(decoded.uuId);
  }, [token]);
  */
  const showToast = () => {
    toast({
      position: "top",
      title: "SMS Send!",
      status: "success",
      duration: 2500,
      isClosable: true,
    });
  };
  const FailToast = () => {
    toast({
      position: "top",
      title: "Uplaod File First !",
      status: "error",
      duration: 2500,
      isClosable: true,
    });
  };

  const clearArray = () => {
    fileData = [];
  };

  const onSubmit = async (e: any) => {
    e?.preventDefault();
    if (fileData.length > 0) {
      setLoading(true);
      try {
        await axios
          .post(
            SMSBATCH_URL,
            {
              messages: fileData,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          )
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              showToast();
              setStatus("");
              setLoading(false);
              clearArray();
            }
          });
      } catch (err: any) {
        setLoading(false);
        if (!err?.response) {
          setStatus("No Server Response");
          clearArray();
        } else {
          clearArray();
          setStatus("SMS Batch sending Failed");
        }
      }
    } else {
      FailToast();
      clearArray();
    }
  };

  return (
    <Flex align="center" justify="center" w="100%">
      <Stack
        mx="auto"
        maxW="xl"
        py={2}
        px={6}
        w="100%"
        mb={{ base: "80%", md: "1%" }}
      >
        <Stack align="center">
          <Heading
            fontSize="3xl"
            fontWeight="semibold"
            textAlign="center"
            color="gray.800"
            fontFamily="arial"
          >
            SEND BATCH
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
          <Stack direction="column" spacing={4} w="100%">
            <form onSubmit={onSubmit}>
              <FormControl>
                <CSVReader
                  onUploadAccepted={(results: any) => {
                    for (let i = 1; i < results.data.length; i += 1) {
                      const phone = results.data[i][0];
                      const mytext = results.data[i][1];
                      const sender = results.data[i][2];
                      if (phone !== "" || mytext !== undefined) {
                        fileData.push({
                          text: mytext,
                          to: phone.split(/\n/),
                          from: sender,
                        });
                      }
                    }
                  }}
                >
                  {({
                    getRootProps,
                    acceptedFile,
                    ProgressBar,
                    getRemoveFileProps,
                  }: any) => (
                    <>
                      <Stack>
                        <FormLabel textAlign="center">
                          CSV File with Phone numbers and Messages
                        </FormLabel>
                        <div>
                          <Box onClick={clearArray}>
                            <Button
                              onClick={clearArray}
                              textAlign="center"
                              bg="teal.400"
                              mb="2%"
                              w="80%"
                              color="white"
                              _hover={{ bg: "blue.400", color: "white" }}
                              variant="ghost"
                              {...getRootProps()}
                            >
                              Browse file
                            </Button>
                            <div>{acceptedFile && acceptedFile.name}</div>
                          </Box>
                        </div>
                        <ProgressBar />
                      </Stack>
                      <Stack spacing={10} mt={5}>
                        <Button
                          textAlign="center"
                          type="submit"
                          bg="blue.400"
                          {...getRemoveFileProps()}
                          color="white"
                          _hover={{ bg: "teal.500", color: "white" }}
                          variant="ghost"
                          loadingText="Sending SMS"
                          isLoading={loading}
                        >
                          Send
                        </Button>
                      </Stack>
                    </>
                  )}
                </CSVReader>
              </FormControl>
            </form>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
export default SMSBatch;
