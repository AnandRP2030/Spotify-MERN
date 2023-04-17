import React from "react";
import { Flex, Image, Text, Box, Center } from "@chakra-ui/react";
const PowerSecCard = ({ img, text1, text2 }) => {
	return (
		<Box mb="40px">
			<Flex
				direction={{ base: "row", xl: "column" }}
				align="center"
				justify={{ base: "flex-start", lg: "center" }}
				ml={{ base: "25px", lg: "0" }}
			>
				<Image
					src={img}
					alt="logo"
					w={{ base: "110px", xl: "160px" }}
				/>
				<Flex
					direction="column"
					w={{ base: "60%", xl: "full" }}
					px="20px"
				>
					<Text
						fontWeight="bold"
						fontSize="22px"
						my="10px"
						align={{ xl: "center" }}
					>
						{text1}
					</Text>
					<Text
						fontWeight="semibold"
						lineHeight="25px"
						fontSize="14px"
						align={{ xl: "center" }}
					>
						{text2}
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default PowerSecCard;
