import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

export const CurrentPlan = ({ month, price, plan, bg, color }) => {
  const dispatch = useDispatch();
  const continuePayment = () => {
    dispatch({
      type: "CONTINUE PAYMENT",
    });
  };
  return (
    <Box p={3} mx={4} color={color} mt="10px">
      <Box bg={bg} p={4} borderTopLeftRadius="10px" borderTopRightRadius="10px">
        <Text fontSize="20px">Premium {plan}</Text>
        <Text fontSize="12px">1 Premium Account</Text>
      </Box>
      <Flex
        bg="white"
        color="black"
        p={4}
        borderBottomLeftRadius="10px"
        borderBottomRightRadius="10px"
      >
        <Text flex="1">Starting Today</Text>
        <Text flex="2" align="right" ml={{ base: 2, xl: 14 }}>
          One time payment of ₹{price}.00 INR for {month} months
        </Text>
      </Flex>
      <Center mt="10px">
        <Button colorScheme="green" size="lg" onClick={continuePayment}>
          Continue Payment
        </Button>
      </Center>
    </Box>
  );
};
