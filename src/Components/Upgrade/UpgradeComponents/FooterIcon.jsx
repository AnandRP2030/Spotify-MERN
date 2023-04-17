import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Icon, Flex } from "@chakra-ui/react";
const FooterIcon = () => {
	return (
		<Flex gap={4} flex="1">
			<Icon as={BsTwitter} boxSize={12} _hover={{ color: "#1ED760" }} />
			<Icon as={BsInstagram} boxSize={12} _hover={{ color: "#1ED760" }} />
			<Icon as={FaFacebookF} boxSize={12} _hover={{ color: "#1ED760" }} />
		</Flex>
	);
};

export default FooterIcon;
