/* eslint-disable react/no-unescaped-entities */
import { Code, Flex } from "@chakra-ui/react";

function PythonDevelopers() {
  return (
    <Flex
      bg="#2d2d2d"
      maxWidth="-webkit-fit-content"
      textAlign="start"
      borderRadius="3%"
      pt="4%"
      pl="0.5%"
      pr="0.5%"
      pb="2%"
      direction="column"
      w={{ base: "95%", md: "100%" }}
    >
      <Code color="white" variant="gost">
        import http.client
      </Code>
      <Code color="white" variant="gost">
        conn = http.client.HTTPConnection()
      </Code>
      <Code color="white" variant="gost">
        payload = " {"{"}
      </Code>
      <Code color="white" variant="gost" paddingLeft="6%" flexDirection="row">
        "message":"Monday should not be a working day","to":"+26650111000"
      </Code>
      <Code color="white" variant="gost">
        {"}"}"
      </Code>
      <Code color="white" variant="gost">
        headers = " {"{"}
      </Code>
      <Code color="white" variant="gost" paddingLeft="6%">
        'Content-Type': "application/json",
      </Code>
      <Code color="white" variant="gost" paddingLeft="6%">
        'Authorization': "API_KEY"
      </Code>
      <Code color="white" variant="gost">
        {"}"}"
      </Code>
      <Code color="white" variant="gost">
        conn.request("POST", "/api/v1/send/sms", payload, headers)
      </Code>
      <Code color="white" variant="gost">
        res = conn.getresponse()
      </Code>
      <Code color="white" variant="gost">
        data = res.read()
      </Code>
      <Code color="white" variant="gost">
        print(data.decode("utf-8"))
      </Code>
    </Flex>
  );
}
export default PythonDevelopers;
