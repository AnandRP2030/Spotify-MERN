import React from "react";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";

function PremiumSection() {
	return (
		<Flex
			bg="#1D75DE"
			h="530px"
			justify={{ base: "flex-start", xl: "center" }}
			direction="column"
			pt="50px"
		>
			<Center
				color="white"
				fontSize={{ base: "28px", lg: "40px" }}
				fontWeight="bold"
				mt="45px"
				px={5}
			>
				Get Premium free for 1 month
			</Center>
			<Center
				color="white"
				fontSize={{ base: "18px", lg: "24px" }}
				mt="25px"
				px={5}
				align="center"
			>
				Just ₹119/month after. Debit and credit cards accepted. Cancel
				anytime.
			</Center>

			<Flex
				justify="center"
				mt="30px"
				direction={{ base: "column", lg: "row" }}
				gap={3}
				px={5}
			>
				<Flex
					as="button"
					rounded="50px"
					py="15px"
					bg="black"
					px="35px"
					color="white"
					fontWeight="bold"
					align="center"
					_hover={{ size: "1.1" }}
				>
					GET STARTED
				</Flex>
				<Flex
					rounded="50px"
					bg="#1D75DE"
					px="25px"
					py="13px"
					color="white"
					fontWeight="bold"
					border="2px"
					align="center"
					_hover={{ size: "30px" }}
				>
					SEE OTHER PLANS
				</Flex>
			</Flex>
			<Flex justify="center" color="white" fontSize="10px" mt="35px">
				<Link>Terms and conditions apply.</Link>
				<Text>
					1 month free not available for users who have already tried
					Premium.
				</Text>
			</Flex>
		</Flex>
	);
}

export default PremiumSection;
