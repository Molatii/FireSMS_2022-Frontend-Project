import { Box, Stack, Text } from "@chakra-ui/react";
// import jwt_decode from "jwt-decode";
// import { useEffect, useState } from "react";
// import Loader from "react-spinners/HashLoader";
import UpdatePassword from "./updatePasswordForm";
import user_Icon from "../../logo/user.png";
/*
type UserValues = {
  decoded: string;
  email: string;
  country: string;
  phone: string;
}; */

function UserProfile() {
  /*
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("access_token");
    const decoded: UserValues = jwt_decode(token || "");
    setEmail(decoded.email);
    setCountry(decoded.country);
    setPhoneNumber(decoded.phone);
    setUserName(decoded.email.split("@")[0]);
    setLoading(false);
  }, []);
  

  if (loading === true) {
    return (
      <Box mt="3%">
        <Loader color="#00A3C4" size={50} />
      </Box>
    );
  } */

  return (
    <Box
      id="profile"
      justifyContent="center"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      w="100%"
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={5}
        direction={{ base: "column", md: "row" }}
        mb="4%"
      >
        <Stack
          bg="white"
          alignItems={{ base: "center", md: "left" }}
          justifyContent="left"
          shadow="lg"
          p={2}
          pt="3%"
          pb="4%"
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: "100%", md: "32%" }}
        >
          <img alt="UserPic" width="100px" height="100px" src={user_Icon} />
          <Text>Username : Pablo</Text>
          <Text>Country : Lesotho</Text>
          <Text>Phone number : 59911982</Text>
          <Text>Email Address : molatipaballo@gmail.com</Text>
        </Stack>

        <Stack
          bg="whiteAlpha.800"
          alignItems="center"
          shadow="lg"
          p={2}
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: "100%", md: "60%" }}
        >
          <UpdatePassword email="molatipaballo@gmail" />
        </Stack>
      </Stack>
    </Box>
  );
}
export default UserProfile;
