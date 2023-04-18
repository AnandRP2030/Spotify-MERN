import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToast } from '@chakra-ui/react'
function PrivateLogin({ children }) {
    const toast = useToast()

    const data = useSelector((payload) => {
        return payload.SignupReducer
    })

  if (data.UserData==[] || data.UserData=="") {
    toast({
        title: 'You Need To SignUp First',
        description: "Fill the form to signup",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
    })
    return <Navigate to="/Signup" />;
  }

  return children;
}

export default PrivateLogin;