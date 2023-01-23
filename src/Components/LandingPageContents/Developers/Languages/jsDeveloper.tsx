/* eslint-disable react/no-unescaped-entities */
import { Code, Flex } from "@chakra-ui/react";

function JSDevelopers() {
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
      <Code color="white" variant="gost" pl="5%">
        fetch("/api/v1/send/sms", {"{"}
      </Code>
      <Code color="white" variant="gost" pl="5%">
        "method": "POST",
      </Code>
      <Code color="white" variant="gost" pl="5%">
        "headers": {"{"}
      </Code>
      <Code color="white" variant="gost" pl="8%">
        "Content-Type": "application/json",
      </Code>
      <Code color="white" variant="gost" pl="8%">
        "Authorization": "API_KEY"
      </Code>
      <Code color="white" variant="gost" pl="5%">
        {"}"}",
      </Code>
      <Code color="white" variant="gost" pl="5%">
        "body": {"{"}"message":"Monday should not be a working
        day","to":"26650111000" {"}"}
      </Code>
      <Code color="white" variant="gost" pl="2%">
        {"}"})
      </Code>
      <Code color="white" variant="gost" pl="2%">
        .then(response {"=>"} {"{"}
      </Code>
      <Code color="white" variant="gost" pl="5%">
        console.log(response);
      </Code>
      <Code color="white" variant="gost" pl="2%">
        {"}"})
      </Code>
      <Code color="white" variant="gost" pl="2%">
        .catch(err {"=>"} {"{"}
      </Code>
      <Code color="white" variant="gost" pl="5%">
        console.error(err);
      </Code>
      <Code color="white" variant="gost" pl="2%">
        {"}"})
      </Code>
    </Flex>
  );
}
export default JSDevelopers;
