import React,{useState} from 'react'
import {Box, Flex, Image, Input, Text} from "@chakra-ui/react"
import { useDisclosure,Modal,ModalBody,ModalOverlay, ModalCloseButton,ModalContent, ModalHeader,ModalFooter,Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
export const Badges = ({isMargin}) => {

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const[promo,  setPromo] = useState("")
  const[wrongPromo,setWrongPromo] = useState(false)
  const[correctPromo , setCorrectPromo] = useState(false)
  const [alreadyApplied, setAlreadyApplied] = useState(false)
  const checkPromo = (promocode)=>{
    if(promocode==="Masai30"){
      setCorrectPromo(true)
      
      setTimeout(() => { onClose()
        setCorrectPromo(false)
      setWrongPromo(false)
      setAlreadyApplied(true)
      
      dispatch({
        type:"PROMO SUCCESS",
      })
    }, 1000)
    }else{
      setWrongPromo(true);
    }
  }
  return (
    <Flex maxH="20px" gap={1} mt="15px"  ml={isMargin ? "20px": "0px"} justify="space-between" pr="25px">
          <Flex maxH="20px" gap={1}>
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/74fdfa7c-bd09-4641-af92-eb69784aa553_paytm.svg"
                  h="full"
                  />
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/4a4cb925-7583-42cc-b44a-be66c05c4edb_lipi.svg"
                 h="full"
                  />
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/fbb9ab64-1a3b-44c8-aa51-ef7f6c596db6_visa.svg"
                 h="full"
                  />
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/263e7c3b-3f4a-46ba-9db2-24617e3fdb9c_amex.svg"
                 h="full"
                  />
           
                  <Image
                    src="https://content-tooling.spotifycdn.com/images/7ae2af66-ecab-4bb3-b094-c5ae92d42407_mastercard.svg"
                 h="full"
                  />
              </Flex>    
              <Box>
                {isMargin?<Text onClick={onOpen} color="green" fontSize={{base:"10px", lg:"14px"}}>Have a Promo Code?</Text>:null}
              </Box>
              <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" mt="25%">
          <ModalHeader color="green">Apply Promo Code</ModalHeader>
          <ModalCloseButton color="white"/>
          <ModalBody>
            <Input 
            disabled={alreadyApplied}
            placeholder='Enter Promo Code' color="white" onChange={(e)=>setPromo(e.target.value)} ></Input>
            <Text color={ correctPromo? "green" :wrongPromo? "red" : "yellow"}
            
            >{  correctPromo? "PromoCode Successfully Applied":wrongPromo? "PromoCode is Invalid ":alreadyApplied? "": null} </Text>
            <Text color="yellow">{alreadyApplied?"You have already applied the Promocode": null}</Text>
          </ModalBody>

          <ModalFooter>
            <Button as="button" colorScheme='green' mr={3} onClick={()=>{checkPromo(promo)}} disabled={alreadyApplied}>
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
               
                </Flex>
  )
}
