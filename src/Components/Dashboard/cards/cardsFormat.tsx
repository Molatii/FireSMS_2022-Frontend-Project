import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface CardData {
  title: string;
  subTitle: string;
  dataContent1: string;
}

function CardsFormat(props: CardData) {
  const { title, dataContent1, subTitle, ...rest } = props;
  return (
    <Box
      bg="white"
      textAlign="center"
      p={4}
      shadow="lg"
      borderWidth="1px"
      borderRadius="lg"
      w={{ base: "100%", md: "30%" }}
      {...rest}
    >
      <Heading
        color="gray.700"
        fontSize="2xl"
        pb="1"
        fontFamily="Arial"
        fontWeight="bold"
      >
        {title}
      </Heading>
      <Text mt={1} color="black" fontSize="sm" fontFamily="Arial">
        {subTitle}
      </Text>
      <Stack mt={2} pb="1" direction="row" alignItems="center" justify="center">
        <Text fontSize="1xl" color="blue.500" fontWeight="semibold">
          {dataContent1}
        </Text>
      </Stack>
    </Box>
  );
}
export default CardsFormat;
