/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Stack, Text } from "@chakra-ui/react";
import Loader from "react-spinners/HashLoader";
import { useState } from "react";
// import jwt_decode from "jwt-decode";
import CardsFormat from "../../cards/cardsFormat";
// import axios from "../../../../APIs/axiosBaseURL";

/*
type UserValues = {
  decoded: string;
  uuId: string;
}; */

function CheckBalance() {
  const [loading, setLoading] = useState(false);
  const [UserBalance, setUserBalance] = useState("");
  const [status, setStatus] = useState("");

  /*
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const decoded: UserValues = jwt_decode(token || "");
    const myuuId = decoded.uuId;
    const ACCOUNT_BALANCE_URL = `/api/v1/account/balance/${myuuId}`;

    try {
      axios
        .get(ACCOUNT_BALANCE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setUserBalance(response.data.account.balance);
            setStatus("");
            setLoading(false);
          }
        });
    } catch (err: any) {
      setLoading(false);
      if (!err?.response) {
        setStatus("No Server Response");
      }
    }
  }, []); */

  if (loading === true) {
    return (
      <Box mt="3%" mb={{ base: "150%", md: "0%" }}>
        <Loader color="#00A3C4" size={50} />
      </Box>
    );
  }

  return (
    <Box
      id="cards"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      mb={{ base: "25%", md: "4%" }}
      justifyContent="center"
      w="100%"
    >
      <Text
        textAlign="center"
        fontFamily="sans-serif"
        fontWeight="semi-bold"
        color="red"
        mb="1%"
      >
        {status}
      </Text>
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        mb="4%"
      >
        <CardsFormat
          title="Balance"
          subTitle=""
          dataContent1={`${UserBalance} Points`}
        />
        <CardsFormat title="Failed Messages" subTitle="" dataContent1="0" />
        <CardsFormat title="Pending Messages" subTitle="" dataContent1="0" />
      </Stack>
    </Box>
  );
}
export default CheckBalance;
