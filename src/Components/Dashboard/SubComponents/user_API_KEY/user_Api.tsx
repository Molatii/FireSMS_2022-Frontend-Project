import { Box, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
// import jwt_decode from "jwt-decode";
import CardsFormat from "../../cards/cardsFormat";
/*
type UserValues = {
  decoded: string;
  apiKey: string;
  account: any;
}; */

function UserApi() {
  const [apiKeyStatus, setApiKeyStatus] = useState(false);
  // const [userAPI, setUserAPI] = useState("");
  const userAPI = "user Token shown here";
  const hidden = "***************************";
  const [apiKey, setApiKey] = useState(hidden);

  /*
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const decoded: UserValues = jwt_decode(token || "");
    setUserAPI(decoded.account.apiKey);
  }, []); 
  */

  const ApiShow = () => {
    setApiKey(userAPI);
    setApiKeyStatus(true);
  };
  const ApiHide = () => {
    setApiKeyStatus(false);
    setApiKey(hidden);
  };

  return (
    <Box
      id="cards"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      mb={{ base: "90%", md: "4%" }}
      justifyContent="center"
      w="100%"
    >
      <Stack
        spacing={5}
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        mb="2%"
      >
        <CardsFormat title="API Key" subTitle="" dataContent1={apiKey} />
      </Stack>
      {apiKeyStatus ? (
        <Button
          color="white"
          fontWeight="semibold"
          bg="blue.400"
          _hover={{ bg: "teal.500", color: "white" }}
          variant="ghost"
          mb="3%"
          onClick={ApiHide}
        >
          Hide Key
        </Button>
      ) : (
        <Button
          bg="blue.400"
          color="white"
          fontWeight="semibold"
          mb="3%"
          _hover={{ bg: "teal.500", color: "white" }}
          variant="ghost"
          onClick={ApiShow}
        >
          Show Key
        </Button>
      )}
    </Box>
  );
}
export default UserApi;
