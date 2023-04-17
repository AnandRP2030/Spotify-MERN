import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Flex,
  Box,
  Text,
  Center,
  List,
  ListItem,
  ListIcon,
  Image,
  Hide,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Badges } from "./Badges";
import Navbar from "../Upgrade/UpgradeComponents/Navbar";
import { CurrentPlan } from "./CurrentPlan";
import { CreditCard } from "./CreditCard";

export const Payment = () => {
  const currentPlan = useSelector((state) => state.paymentReducer.currentPlan);
  const data = useSelector(
    (state) => state.paymentReducer.plans[currentPlan - 1]
  );
  const onPlanData = useSelector((state) => state.paymentReducer.onPaymentPlan);
  const continuePayment = useSelector(
    (state) => state.paymentReducer.continuePayment
  );

  const dispatch = useDispatch();
  useEffect(() => {
    updatePlan(1, data.month1);
  }, []);

  function updatePlan(month, price) {
    dispatch({
      type: "UPDATE USER PLAN",
      payload: { month, price },
    });
  }

  return (
    <>
      <Navbar />
      <Box
        bgGradient="linear(to-r, rgb(5,227,136),rgb(26,141,95))"
        p={10}
        minH="100vh"
      >
        <Flex
          fontWeight="bold"
          maxW="1140px"
          mx="auto"
          mt="65px"
          maxH="900px"
          boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          rounded="20px"
          style={{ transform: "scale(0.77)", zIndex: -1 }}
        >
          {/* for displaying the pricePlans */}
          <Flex
            direction="column"
            flex="1"
            bg={data.bg}
            color={data.color}
            pb="20px"
            pt="20px"
            borderTopLeftRadius="20px"
            borderBottomLeftRadius="20px"
          >
            <Center fontSize="38px">Music For Everyone.</Center>
            <Center fontSize="25px">Premium Subscription</Center>

            <Flex justify="space-around" align="center" mt="10px">
              <Text fontSize="24px">You chose</Text>
              <Link to="/upgrade">
                <Text
                  color={data.color === "white" ? "black" : "white"}
                  fontWeight="semibold"
                >
                  Change plan
                </Text>
              </Link>
            </Flex>
            {/* price and subscription details */}
            <Box
              bg={data.bg}
              color={data.color}
              w="90%"
              mx="auto"
              rounded="20px"
              py={3}
            >
              <Flex
                direction="column"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
                rounded="10px"
                p={3}
              >
                <Text fontSize="32px">Premium {data.plan}</Text>

                <Text>{data.account}</Text>
              </Flex>
              <Badges isMargin={false} />
              <Text mt="8px" fontSize="16px">
                {data.day}
              </Text>
            </Box>
            {/* features of plan */}
            <List w="80%" mx="auto" fontSize="18px" mt={-3}>
              <ListItem mt="10px">
                <ListIcon as={CheckCircleIcon} color={data.color} boxSize={4} />
                1 month free
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={CheckCircleIcon} color={data.color} boxSize={4} />
                {data.adFree}
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={CheckCircleIcon} color={data.color} boxSize={4} />
                {data.group}
              </ListItem>
              <ListItem mt="10px">
                <ListIcon as={CheckCircleIcon} color={data.color} boxSize={4} />
                {data.download}
              </ListItem>
              {data.family !== undefined ? (
                <ListItem mt="10px">
                  <ListIcon
                    as={CheckCircleIcon}
                    color={data.color}
                    boxSize={4}
                  />
                  {data.family}
                </ListItem>
              ) : null}
            </List>

            {/* monthly subscription details */}
            <Hide below="md">
              <Flex direction="column" mt="10px">
                <Flex
                  border="1px"
                  w="98%"
                  mx="auto"
                  align="center"
                  justify="space-between"
                  mt="5px"
                  p={2}
                  onClick={() => updatePlan(3, data.month3)}
                >
                  <Box>
                    <Text fontSize="24px">3 months</Text>
                    <Text fontSize="15px">₹{data.month3} one-time payment</Text>
                  </Box>
                  <Box>
                    <ChevronRightIcon boxSize={8} />
                  </Box>
                </Flex>
                <Flex
                  border="1px"
                  w="98%"
                  mx="auto"
                  align="center"
                  justify="space-between"
                  mt="5px"
                  p={2}
                  onClick={() => updatePlan(6, data.month6)}
                >
                  <Box>
                    <Text fontSize="24px">6 months</Text>
                    <Text fontSize="15px">₹{data.month6} one-time payment</Text>
                  </Box>
                  <Box>
                    <ChevronRightIcon boxSize={8} />
                  </Box>
                </Flex>
                <Flex
                  border="1px"
                  w="98%"
                  mx="auto"
                  align="center"
                  justify="space-between"
                  mt="5px"
                  p={2}
                  onClick={() => updatePlan(12, data.month12)}
                >
                  <Box>
                    <Text fontSize="24px">1 year</Text>
                    <Text fontSize="15px">
                      ₹{data.month12} one-time payment
                    </Text>
                  </Box>
                  <Box>
                    <ChevronRightIcon boxSize={8} />
                  </Box>
                </Flex>
              </Flex>
            </Hide>
          </Flex>
          {/* for payment purpose */}
          <Flex
            bg="black"
            flex="1"
            borderTopRightRadius="20px"
            borderBottomRightRadius="20px"
            direction="column"
          >
            <Flex direction="column" mt="20px" align="center" gap={3}>
              <Box>
                <Image
                  src={require("../Upgrade/UpgradeComponents/logo.jpg")}
                  w="190px"
                />
              </Box>
              {continuePayment ? null : (
                <Box>
                  <Image src="https://cdn.dribbble.com/users/1299339/screenshots/14693431/media/0d14cfd0199c68d53fff50e42cca6c4b.gif" />
                </Box>
              )}
            </Flex>
            {continuePayment ? (
              <CreditCard />
            ) : (
              <>
                <Badges isMargin={true} />
                <CurrentPlan
                  price={onPlanData.price}
                  month={onPlanData.month}
                  plan={data.plan}
                  bg={data.bg}
                  color={data.color}
                />
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
