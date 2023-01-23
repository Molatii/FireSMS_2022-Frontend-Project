import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ButtonProp {
  name: string;
  link: string;
}

function NavButtons(props: ButtonProp) {
  const { name, link } = props;

  return (
    <Link
      to={link}
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <Button
        pt="5.4"
        pr="4"
        pl="4"
        pb="5.4"
        color="white"
        size={{ base: "8px", md: "md" }}
        cursor="pointer"
        _hover={{ bg: "#FF5F0F", color: "white" }}
        variant="ghost"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        {name}
      </Button>
    </Link>
  );
}
export default NavButtons;
