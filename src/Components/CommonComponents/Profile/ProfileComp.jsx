import React from 'react'
import {Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { HiOutlineHome } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    TriangleDownIcon,
    TriangleUpIcon,
    ExternalLinkIcon,
    EditIcon,
    SearchIcon,
    AddIcon,
    LockIcon,
    BellIcon,
    TimeIcon
  } from "@chakra-ui/icons";
  import {MdPayment, MdRedeem} from 'react-icons/md';
  import {RiDeviceRecoverLine, RiApps2Line} from 'react-icons/ri'
  const useDetails = JSON.parse(localStorage.getItem("userDetail")) || [
    { given_name: "Username" },
  ];
function ProfileComp() {
  return (
   <Box w="250px" color='black' zIndex='-10'  h='100vh'  pos='relative' left='166px' top='10px'  >
            <Image src={useDetails[0].picture} boxSize={'80px'} borderRadius={'52%'} margin="10px auto" />

        <Divider color='pink' />
        <Flex color='black' align='center' p='15px 10px' >
            <HiOutlineHome size="25px" />
            <Text ml='20px' >Account overview</Text>
        </Flex>

        <Divider/>
        <Flex  align='center' p='15px 10px' color='black'>
            <EditIcon boxSize={6} />
            <Text ml='20px'>Edit profile</Text>
        </Flex>

        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
        <EditIcon boxSize={6} />
            <Text ml='20px'>Address</Text>
        </Flex>

        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
            <LockIcon boxSize={6} />
            <Text ml='20px'>Change password</Text>
        </Flex>

        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
            <BellIcon boxSize={6} />
            <Text ml='20px'>Notification settings</Text>
        </Flex>

        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
        <LockIcon boxSize={6} />
            <Text ml='20px'>Privacy settings</Text>
        </Flex>

        <Divider/>
        <Flex align='center' p='15px 10px' color='black' >
            <MdPayment size="25px" />
            <Text ml='20px'>Saved payments card</Text>
        </Flex>
        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
            <RiDeviceRecoverLine size="25px" />
            <Text ml='20px'>Recover playlists</Text>
        </Flex>
        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
            <TimeIcon boxSize={6}/>
            <Text ml='20px'>Receipts</Text>
        </Flex>
        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
            <RiApps2Line size="25px" />
            <Text ml='20px'>Apps</Text>
        </Flex>

        <Divider/>
        <Flex align='center' p='15px 10px' color='black'>
            <MdRedeem size="25px" />
            <Text ml='20px'>Reedem</Text>
        </Flex>
   </Box>
  )
}

export default ProfileComp