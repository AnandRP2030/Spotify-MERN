import React from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";
import PlansData from "./PlansData";
import {useSelector} from 'react-redux'

const PricingCard = () => {

    const plans = useSelector(state=>state.paymentReducer.plans)
	return (
		<Box bg="#EFEFEF" py="60px">
			<Center fontWeight="bold" fontSize="30px">
				Pick your Premium
			</Center>
			<Center fontWeight="semibold" fontSize="13px">
				Listen without limits on your phone, speaker, and other devices
			</Center>
			<Flex
				direction={{ base: "column", xl: "row" }}
				maxW="1140px"
				m="auto"
				justify="space-around"
				align={{ base: "center", xl: "normal" }}
			>
				{plans.map((ele, i) => {
					return <PlansData ele={ele}  index={i}/>;
				})}
			</Flex>
		</Box>
	);
};

export default PricingCard;
