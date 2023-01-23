/* eslint-disable react/no-unescaped-entities */
import { Code, Flex } from "@chakra-ui/react";

function PHPDevelopers() {
  return (
    <Flex
      bg="#2d2d2d"
      maxWidth="-webkit-fit-content"
      textAlign="start"
      borderRadius="3%"
      pt="4%"
      pl="2%"
      pr="2%"
      pb="2%"
      direction="column"
      w={{ base: "95%", md: "100%" }}
    >
      <Code color="white" variant="gost">
        {"<"}?php
      </Code>
      <Code color="white" variant="gost" pb="3.5%">
        $curl = curl_init();
      </Code>
      <Code color="white" variant="gost">
        curl_setopt_array($curl, [
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_URL {"=>"} "/api/v1/send/sms",
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_RETURNTRANSFER {"=>"} true,
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_ENCODING {"=>"} "",
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_MAXREDIRS {"=>"} 10,
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_TIMEOUT {"=>"} 30,
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_HTTP_VERSION {"=>"} CURL_HTTP_VERSION_1_1,
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_CUSTOMREQUEST {"=>"} "POST",
      </Code>
      <Code color="white" variant="gost" pl="5%">
        CURLOPT_POSTFIELDS {"=>"} " {"{"}
      </Code>
      <Code color="white" variant="gost" pl="9%">
        "message":"Monday should not be a working day",
      </Code>
      <Code color="white" variant="gost" pl="9%">
        "to":"+26650111000"
      </Code>
      <Code color="white" variant="gost">
        {"}"}",
      </Code>
      <Code color="white" variant="gost">
        CURLOPT_HTTPHEADER {"=>"} [
      </Code>
      <Code color="white" variant="gost" paddingLeft="9%">
        "Authorization: API_KEY",
      </Code>
      <Code color="white" variant="gost" paddingLeft="9%">
        "Content-Type: application/json"
      </Code>
      <Code color="white" variant="gost" paddingLeft="6%">
        ],
      </Code>
      <Code color="white" variant="gost" pb="2%">
        ]);
      </Code>
      <Code color="white" variant="gost">
        $response = curl_exec($curl);
      </Code>
      <Code color="white" variant="gost" pb="4%">
        $err = curl_error($curl);
      </Code>
      <Code color="white" variant="gost" pb="5%">
        curl_close($curl);
      </Code>
      <Code color="white" variant="gost">
        if ($err) {"{"}
      </Code>
      <Code color="white" variant="gost" paddingLeft="6%">
        echo "cURL Error #:" . $err;
      </Code>
      <Code color="white" variant="gost">
        {"}"} else {"{"}
      </Code>
      <Code color="white" variant="gost" paddingLeft="6%">
        echo $response;
      </Code>
      <Code color="white" variant="gost">
        {"}"}
      </Code>
    </Flex>
  );
}
export default PHPDevelopers;
