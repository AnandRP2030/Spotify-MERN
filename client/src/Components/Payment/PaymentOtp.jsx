import React, { useState } from "react";
import {
  HStack,
  PinInput,
  PinInputField,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export function PaymentOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const getOtp = (e) => {
    setOtp(e);
  };

  const SuccessPayment = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      toast({
        title: "Payment Successful",
        description: "Your payment has been successful",
        status: "success",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/paymentsuccess");
        setTimeout(() => {
          navigate("/");
        }, 7000);
      }, 2500);

      dispatch({
        type: "PREMIUM USER",
      });
    }
  };
  return (
    <Flex
      w="1fr"
      h="100vh"
      bg="#1f2120"
      justify="center"
      alignItems="center"
      boxSizing="boderBox"
    >
      {/* <BackAnime /> */}
      <Flex
        h="60%"
        w="24%"
        bg="#232324"
        borderRadius="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // boxShadow="#1ed760 0px 19px 38px, #1ed760 0px 15px 12px"
        minWidth="380px"
        zIndex="100"
        position="fixed"
      >
        <form
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormControl
            display="flex"
            // bg="green"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            h="100%"
            w="80%"
            color="white"
            // mb="80px"
            align="center"
            isRequired
          >
            <Heading textAlign="center" mt="40px">
              Enter Your OTP
            </Heading>
            {/* ---------Pin INput---------------- */}
            {/* <PinInputOtp getOtp={getOtp} /> */}
            <Input
              type="submit"
              value="Confirm Payment"
              bg="#1ed760"
              color="black"
              fontSize="20px"
              fontWeight="700"
              borderRadius="40px"
              mb="45px"
              h="12%"
              border="none"
              _hover={{ bg: "#b5f7bc", transition: "fade" }}
              onClick={SuccessPayment}
            />
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
}
