import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const FooterDetails = ({ ele }) => {
	return (
		<Box>
			{Object.keys(ele).map((key) => {
				{
					if (key === "title") {
						return (
							<Text fontWeight="bold" color="gray">
								{ele[key]}
							</Text>
						);
					} else {
						return (
							<Box
								my="20px"
								fontSize="16px"
								_hover={{ color: "#1ED760" }}
							>
								<Link decoration="none">{ele[key]}</Link>
							</Box>
						);
					}
				}
			})}
		</Box>
	);
};

export default FooterDetails;
