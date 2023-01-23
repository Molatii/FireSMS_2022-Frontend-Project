/* eslint-disable react/jsx-props-no-spreading */
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface CardDataTypes {
  title: string;
  bg: string;
  dataContent1: string;
  dataContent2: string;
  dataContent3: string;
}

function PlatformCardFormat(props: CardDataTypes) {
  const { title, dataContent1, dataContent2, dataContent3, bg, ...rest } =
    props;
  return (
    <Box
      textAlign="center"
      p={5}
      borderRadius="lg"
      bg={bg}
      w={{ base: "88%", md: "18%" }}
      {...rest}
    >
      <Heading color="#FF5F0F" fontSize="4xl" pb="5" pt="4" fontFamily="Arial">
        {title}
      </Heading>
      <Stack direction="row" alignItems="center" justify="center">
        <Text color="#FF5F0F" fontSize="5xl" fontWeight="extrabold">
          {dataContent1}
        </Text>
        <Text fontSize="5xl" color="#FF5F0F" fontWeight="extrabold">
          {dataContent2}
        </Text>
      </Stack>
      <Text fontSize="sm" color="#FF5F0F">
        {dataContent3}
      </Text>
    </Box>
  );
}
export default PlatformCardFormat;
