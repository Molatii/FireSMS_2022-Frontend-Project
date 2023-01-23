import { MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ItemProp {
  link: string;
  name: string;
}

function MyMenuItem(props: ItemProp) {
  const { name, link } = props;

  return (
    <Link
      to={link}
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <MenuItem
        _hover={{
          bg: "gray.700",
          color: "white",
        }}
      >
        {name}
      </MenuItem>
    </Link>
  );
}
export default MyMenuItem;
