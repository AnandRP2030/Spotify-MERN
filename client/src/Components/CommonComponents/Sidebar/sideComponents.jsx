import { Icon, Flex, Text, Center } from "@chakra-ui/react";
import style from "./sidebar.module.css";
const SideComp = ({ icon, name }) => {
  return (
    <Flex className={style.hoverText} h="30px" mt="15px">
      <Icon as={icon} boxSize={7} />
      <Center>
        {" "}
        <Text ml="15px"display={["none", "none", "block", "block", "block"]} > {name}</Text>
      </Center>
    </Flex>
  );
};

export default SideComp;
