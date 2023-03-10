import { Flex } from "@chakra-ui/react";
import ImageSelected from "../../atoms/image-selected";
import ImagesList from "../../molecules/images-list";

function LeftSection() {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={["column-reverse", "row"]}
      w={"100%"}
    >
      <ImagesList />
      <ImageSelected />
    </Flex>
  );
}

export default LeftSection;
