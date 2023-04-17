import React from "react";
import {
	Popover,
	PopoverTrigger,
	PopoverHeader,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	Hide,
	Text,
	Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Profile = () => {
	return (
		<Hide below="lg">
			<Flex align="center">
				<Popover placement="bottom-start">
					<PopoverTrigger>
						<Flex align="center" justify="space-between">
							<Text
								color="white"
								fontWeight="bold"
								fontSize="17px"
								_hover={{ color: "#1ED760" }}
							>
								Profile
							</Text>
							<ChevronDownIcon
								color="white"
								boxSize={6}
								mx="6px"
								mb="3px"
								_hover={{ color: "#1ED760" }}
							/>
						</Flex>
					</PopoverTrigger>
					<PopoverContent
						w="160px"
						mt="10px"
						h="90px"
						pl="10px"
						boxShadow="none !important"
					>
						<PopoverArrow />
						<PopoverBody>
							<Text
								mt="10px"
								fontWeight="bold"
								fontSize="15px"
								_hover={{ color: "#1ED760" }}
							>
								Account
							</Text>
							<Text
								mt="10px"
								fontWeight="bold"
								fontSize="15px"
								_hover={{ color: "#1ED760" }}
							>
								Log Out
							</Text>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</Flex>
		</Hide>
	);
};

export default Profile;
