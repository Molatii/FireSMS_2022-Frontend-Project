import { Button } from "@chakra-ui/react";

function PrricesBtn() {
  return (
    <Button
      fontWeight="semibold"
      size="md"
      h="42.7px"
      w="110px"
      cursor="pointer"
      bg="#FF5F0F"
      variant="ghost"
      colorScheme="#FF5F0F"
      color="white"
      _hover={{ bg: "#CBD5E0", color: "#FF5F0F" }}
    >
      Get Started
    </Button>
  );
}
export default PrricesBtn;
