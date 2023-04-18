import React from "react";
import { Flex, Box, Show, Link } from "@chakra-ui/react";

const ShowCom = ({ dir }) => {
	return (
		<Box w="80%" mt={dir ? "0" : "30px"}>
			<Show above={dir ? "lg" : "base"}>
				<Flex justify="space-around" direction={dir ? "row" : "column"}>
					<Link
						mx="10px"
						href="#"
						color="white"
						fontWeight="bold"
						_hover={{ color: "#1ED760" }}
						fontSize={dir ? "16px" : "36px"}
					>
						Premium
					</Link>
					<Link
						mx="10px"
						href="#"
						color="white"
						fontWeight="bold"
						_hover={{ color: "#1ED760" }}
						fontSize={dir ? "16px" : "36px"}
						mt={dir ? "0" : "12px"}
					>
						Support
					</Link>
					<Link
						mx="10px"
						href="#"
						color="white"
						fontWeight="bolder"
						_hover={{ color: "#1ED760" }}
						fontSize={dir ? "16px" : "36px"}
						mt={dir ? "0" : "12px"}
					>
						Download
					</Link>
					<Box
						mx="10px"
						w={dir ? "2px" : "20px"}
						bg="white"
						h={dir ? "20px" : "2px"}
						mt={dir ? "0" : "25px"}
					></Box>
				</Flex>
			</Show>
		</Box>
	);
};

export default ShowCom;
