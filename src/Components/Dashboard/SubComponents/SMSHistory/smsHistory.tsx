/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableCaption,
  TableContainer,
  Heading,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import Loader from "react-spinners/HashLoader";
// import jwt_decode from "jwt-decode";
// import axios from "../../../../APIs/axiosBaseURL";

/*
type UserValues = {
  decoded: string;
  uuId: string;
}; */

function SMSHistory() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");
  const [smsMessages, setSmsMessages] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  // const myLimit = 5;
  const [totalTexts, setTotalTexts] = useState(0);
  const [checkStatus, setcheckStatus] = useState(false);
  const [prevStatus, setprevStatus] = useState(true);
  const [keepCount, setKeepCount] = useState(5);
  /*
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const decoded: UserValues = jwt_decode(token || "");
    const myuuId = decoded.uuId;
    const SMS_HISTORY_URL = `/api/v1/message/history/${myuuId}?page=${page}&limit=${myLimit}`;

    try {
      axios
        .get(SMS_HISTORY_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setStatus("");
            setTotalTexts(response.data.messages.count);
            setSmsMessages(response.data.messages.rows);
            setStatus("");
            setLoading(false);
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setStatus("No Server Response");
      } else if (err?.response === 401) {
        setStatus("Authorization token is required");
      } else {
        setStatus("");
      }
    }
  }, [page]); */

  const movetoNext = () => {
    if (keepCount >= totalTexts) {
      setcheckStatus(true);
    } else {
      setprevStatus(false);
      setcheckStatus(false);
      setPage(page + 1);
      setKeepCount(keepCount + 5);
    }
  };

  const movetoBack = () => {
    if (page > 1) {
      setPage(page - 1);
      setKeepCount(keepCount - 5);
      setcheckStatus(false);
    } else {
      setprevStatus(true);
    }
  };

  if (loading === true) {
    return (
      <Box mt="3%" mb={{ base: "150%", md: "0%" }}>
        <Loader color="#00A3C4" size={50} />
      </Box>
    );
  }

  return (
    <Box w="100%">
      <Heading
        fontSize="3xl"
        fontWeight="semibold"
        textAlign="center"
        fontFamily="arial"
        mb="0.5%"
        color="gray.800"
      >
        SMS HISTORY
      </Heading>
      <Text
        textAlign="center"
        fontFamily="sans-serif"
        fontWeight="semi-bold"
        color="red"
      >
        {status}
      </Text>
      <Box w="100%" bg="white" mt="3%" mb={{ base: "100%", md: "0%" }}>
        <TableContainer id="mytable">
          <Table
            variant="striped"
            colorScheme="telegram"
            size="sm"
            mb={{ base: "10%", md: "0%" }}
          >
            <TableCaption>
              <Stack spacing={6} justifyContent="center" direction="row">
                <Button
                  size="sm"
                  fontWeight="bold"
                  isDisabled={prevStatus}
                  bg="teal.200"
                  _hover={{ bg: "red.200", color: "gray.600" }}
                  onClick={movetoBack}
                >
                  Prev Page
                </Button>
                <Button
                  size="sm"
                  isDisabled={checkStatus}
                  fontWeight="bold"
                  bg="teal.200"
                  _hover={{ bg: "teal.500", color: "white" }}
                  onClick={movetoNext}
                >
                  Next Page
                </Button>
              </Stack>
            </TableCaption>
            <Thead>
              <Tr fontFamily="arial">
                <Th fontFamily="arial">SMS Recipient</Th>
                <Th fontFamily="arial">Date Send</Th>
                <Th fontFamily="arial">SMS Text</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.values(smsMessages).map((value) => (
                <Tr key={value.id + 1}>
                  <Td>{value.to}</Td>
                  <Td>{value.createdAt.split("", 10)}</Td>
                  <Td>{value.text}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
export default SMSHistory;
